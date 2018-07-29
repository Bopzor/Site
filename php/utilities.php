<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('html_errors', 1);

include 'environment.php';

function getPDO() {
  try {
    $pdo = new PDO($_ENV['dsn'], $_ENV['login'], $_ENV['pwd'], [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $pdo->exec('SET NAMES UTF8');  

    return $pdo;
    
  } catch(Exception $e) {
      echo 'Exception -> ';
      var_dump($e->getMessage());
  }
}

function getToken() {
  return $_ENV['ADMIN_TOKEN'];
};

function isAuthorized() {
  if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if ($_SERVER['HTTP_AUTHORIZATION'] === getToken()) {
      return true;
    }
  } else {
    $headers = getallheaders();
    if ($headers['Authorization'] === getToken()) {
      return true;
    }
  }

  return false;
}

