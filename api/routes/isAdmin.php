<?php

include '../utilities.php';

header('Content-Type: application/json');

if ($_POST['token'] === null) {
  print(json_encode(false));
} else {
  print(json_encode(getToken() === $_POST['token']));
}

