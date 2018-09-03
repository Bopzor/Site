<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('html_errors', 1);

require '../classes/Project.php';
include '../sendResponse.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $p = new Project();

  $projects = $p->getProjectsList();

  sendJSON($projects);

} elseif (isAuthorized()) {

  switch ($method) {
    case 'POST':

      try {
        if ($_POST['title'] === '' || $_POST['content'] === '') {
          throw new Exception('Missing Field', 400); 
        }

        $p = new Project();

        $p->title = $_POST['title']; 
        $p->content = $_POST['content'];
        $p->repo = $_POST['repo'];
        $p->url = $_POST['url'];

        if(isset($_POST['id'])) {
          $p->id = $_POST['id'];
          $project = $p->updateProject();

          sendJSON($project);
          
          break;
        }
        
        $project = $p->createProject();

        sendJSON($project);

        break;

      } catch (Exception $e) {
        handleErrors($e->getCode());
        break;
      }

    case 'DELETE':
      $p = new Project();

      $p->id = $_GET['project_id'];
      $project = $p->removeProject();

      sendJSON($project);

      break;
    }

} else {

  return $error = 401;
}


