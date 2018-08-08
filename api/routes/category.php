<?php

require '../classes/Category.php';
include '../sendJSON.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $c = new Category();

  $categories = $c->getCategories();

  sendJSON($categories);
}
