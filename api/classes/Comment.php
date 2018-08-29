<?php

require '../utilities.php';

class Comment {
  public $nick;
  public $content;
  public $articleId;

  private $pdo;

  public function __construct() {
    $this->nick = null;
    $this->content = null;
    $this->articleId = null;

    $this->pdo = getPDO();
  }

  public function getComments() {
    $query = $this->pdo->prepare
    ('
      SELECT c.nick, c.content, c.publishedAt, c.id
      FROM comment c
      WHERE c.article_id = ?
    ');

    $query->execute([$this->articleId]);

    return $result = $query->fetchAll();
  }

  public function createComment() {
    $query = $this->pdo->prepare('INSERT INTO comment (nick, content, article_id) VALUES (?, ?, ?)');

    $query->execute([$this->nick, $this->content, $this->articleId]);

    $comment_id = $this->pdo->lastInsertId();

    $query = $this->pdo->prepare
    ('
      SELECT c.nick, c.content, c.publishedAt, c.id
      FROM comment c
      WHERE c.id = ?
    ');

    $query->execute([$comment_id]);

    return $result = $query->fetch();
  }

}
