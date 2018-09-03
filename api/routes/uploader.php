<?php

include '../sendResponse.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
  $file = $_FILES['image']['name'];

  move_uploaded_file($_FILES['image']['tmp_name'], '../../web/public/images/'.$file);

  $results = [
    'id' => $file,
    'url'=> './images/'.$file,
  ];

  sendJSON($results);
}
