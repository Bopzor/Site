<?php

require '../utilities.php';

class Category {
  private $pdo;

  public function __construct() {
    $this->pdo = getPDO();
  }

  public function getCategories() {
    $this->pdo = getPDO();

    $query = $this->pdo->prepare('SELECT * FROM category');

    $query->execute();

    return $result = $query->fetchAll();
  }
}
