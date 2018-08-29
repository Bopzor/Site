<?php

require '../classes/Project.php';
include '../sendJSON.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $p = new Project();

  $projects = $p->getProjectsList();

  sendJSON($projects);

} elseif (isAuthorized()) {

  switch ($method) {
    case 'POST':
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


