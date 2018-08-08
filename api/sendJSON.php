<?php

function sendJson($result) {
  header('Content-Type: application/json');
  print(json_encode($result));
}
