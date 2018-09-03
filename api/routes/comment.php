<?php

require '../classes/Comment.php';
include '../sendResponse.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $c = new Comment();
  $c->articleId = $_GET['article_id'];

  $comments = $c->getComments();

  sendJSON($comments);

} elseif ($method === 'POST'){
  try {
    if ($_POST['nick'] === '' && $_POST['content'] === '') {
      throw new Exception('Missing fileds', 400);
    }

    $c = new Comment();
    $c->nick = $_POST['nick'];
    $c->content = $_POST['content'];
    $c->articleId = $_POST['articleId'];

    $comment = $c->createComment();

    sendJSON($comment);
    
  } catch(Exception $e) {
    handleErrors($e->getCode());
  }
}


