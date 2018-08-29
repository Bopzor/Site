<?php

require '../classes/Comment.php';
include '../sendJSON.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $c = new Comment();
  $c->articleId = $_GET['article_id'];

  $comments = $c->getComments();

  sendJSON($comments);

} elseif ($method === 'POST'){
  $c = new Comment();
  $c->nick = $_POST['nick'];
  $c->content = $_POST['content'];
  $c->articleId = $_POST['articleId'];

  $comment = $c->createComment();

  sendJSON($comment);
}


