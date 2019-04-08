<?php

require '../utilities.php';

class Article {
  public $id;
  public $title;
  public $content;
  public $categoriesId;

  private $pdo;

  public function __construct() {
    $this->id = null;
    $this->title = null;
    $this->content = null;
    $this->categoriesId = null;

    $this->pdo = getPDO();
  }

  public function getArticlesList() {
   $query = $this->pdo->prepare
    ('
      SELECT a.title, a.content, a.publishedAt, a.id, GROUP_CONCAT(c.id SEPARATOR ",") AS category_id, GROUP_CONCAT(c.name SEPARATOR ",") AS category_name
      FROM article a
      INNER JOIN article_category a_c
      ON a_c.article_id = a.id
      INNER JOIN category c
      ON c.id = a_c.category_id
      WHERE a_c.article_id = a.id
      GROUP BY a.id
      ORDER BY a.publishedAt DESC
    ');

    $query->execute();

    return $result = $query->fetchAll();
  }

  public function createArticle() {
    $query = $this->pdo->prepare('INSERT INTO article (title, content) VALUES (?, ?)');

    $query->execute([$this->title, $this->content]);

    $article_id = $this->pdo->lastInsertId();

    $categories_id = explode(',', $this->categoriesId);

    foreach ($categories_id as $value) {
      $query = $this->pdo->prepare('INSERT INTO article_category (article_id, category_id) VALUES (?, ?)');

      $query->execute([$article_id, $value]);
    }

    $query = $this->pdo->prepare('
      SELECT a.title, a.content, a.publishedAt, a.id, GROUP_CONCAT(c.name SEPARATOR ",")
        AS category_name
      FROM article a
      INNER JOIN article_category a_c
        ON a_c.article_id = a.id
      INNER JOIN category c
        ON c.id = a_c.category_id
      WHERE a.id = ? AND a_c.article_id = a.id
      GROUP BY a.id
    ');

    $query->execute([$article_id]);
    $result = $query->fetch();

    return $result;
  }

  public function removeArticle() {
    $query = $this->pdo->prepare
    ('
      DELETE FROM comment
      WHERE article_id = ?
    ');

    $query->execute([$this->id]);

    $query = $this->pdo->prepare
      ('
        DELETE FROM article_category
        WHERE article_id = ?
      ');

      $query->execute([$this->id]);

    $query = $this->pdo->prepare
      ('
        DELETE FROM article
        WHERE id = ?
      ');

    $query->execute([$this->id]);

    return $result = $this->id;
  }

  public function updateArticle() {
    $query = $this->pdo->prepare('
      UPDATE article
      SET title=?, content=?, updatedAt=NOW()
      WHERE id=?
    ');

    $query->execute([$this->title, $this->content, $this->id]);

    if ($this->categoriesId) {
      $categories_id = explode(',', $this->categoriesId);

      foreach ($categories_id as $value) {
        $query = $this->pdo->prepare('
          UPDATE article_category
          SET category_id=?
          WHERE article_id=?
        ');

        $query->execute([$value, $this->id]);
      }
    }

    $query = $this->pdo->prepare('
      SELECT a.title, a.content, a.publishedAt, a.id, GROUP_CONCAT(c.id SEPARATOR ",") AS category_id, GROUP_CONCAT(c.name SEPARATOR ",") AS category_name
      FROM article a
      INNER JOIN article_category a_c
      ON a_c.article_id = a.id
      INNER JOIN category c
      ON c.id = a_c.category_id
      WHERE a.id = ? AND a_c.article_id = a.id
      GROUP BY a.id
    ');

    $query->execute([$this->id]);

    return $result = $query->fetch();
  }
}
