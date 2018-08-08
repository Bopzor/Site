<?php

require '../utilities.php';

class Project {
  public $id;
  public $title;
  public $content;
  public $github;
  public $url;

  private $pdo;

  public function __construct() {
    $this->id = null;
    $this->title = null;
    $this->content = null;
    $this->github = null;
    $this->url = null;

    $this->pdo = getPDO();
  }

  public function getProjectsList() {
   $query = $this->pdo->prepare
    ('
      SELECT p.title, p.content, p.publishedAt, p.id, p.github, p.url
      FROM project p
      ORDER BY publishedAt DESC
    ');

    $query->execute();

    return $result = $query->fetchAll();   
  }

  public function createProject() {
    $query = $this->pdo->prepare('INSERT INTO project (title, content, github, url) VALUES (?, ?, ?, ?)');

    $query->execute([$this->title, $this->content, $this->github, $this->url]);

    $project_id = $this->pdo->lastInsertId();

    $query = $this->pdo->prepare
    ('
      SELECT p.title, p.content, p.publishedAt, p.id, p.github, p.url
      FROM project p
      WHERE p.id = ?
    ');

    $query->execute([$project_id]);
    $result = $query->fetch();

    return $result;  
  } 

  public function removeProject() {
    $query = $this->pdo->prepare
    ('
      DELETE FROM project
      WHERE id = ? 
    ');

    $query->execute([$this->id]);

    return $result = $this->id;
  }

  public function updateProject() {
    $query = $this->pdo->prepare('
      UPDATE project
      SET title=?, content=?, github=?, url=?
      WHERE id=?
    ');

    $query->execute([$this->title, $this->content, $this->github, $this->url, $this->id]);

    $query = $this->pdo->prepare
    ('
      SELECT p.title, p.content, p.publishedAt, p.id, p.github, p.url
      FROM project p
      WHERE p.id = ?
    ');

    $query->execute([$this->id]);

    return $result = $query->fetch();
  }
}
