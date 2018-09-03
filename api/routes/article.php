<?php

require '../classes/Article.php';
include '../sendResponse.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $a = new Article();

  $articles = $a->getArticlesList();

  sendJSON($articles);

} elseif (isAuthorized()) {

  switch ($method) {
    case 'POST':

      try {
        if ($_POST['title'] === '' && $_POST['content'] === '') {
          throw new Exception('Missing fileds', 400);
        }

        $a = new Article();
        $a->title = $_POST['title']; 
        $a->content = $_POST['content'];
        $a->categoriesId = $_POST['categoriesId'];

        if(isset($_POST['id'])) {
          $a->id = $_POST['id'];
          $article = $a->updateArticle();

          sendJSON($article);
          
          break;
        }
        
        $article = $a->createArticle();

        sendJSON($article);

        break;

      } catch (Exception $e) {
        handleErrors($e->getCode());
        break;
      }

    case 'DELETE':
      $a = new Article();

      $a->id = $_GET['article_id'];
      $article = $a->removeArticle();

      sendJSON($article);

      break;
    }

} else {

  return $error = 401;
}


