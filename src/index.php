<?php
require_once('db-connect.php');
$stmt=$db->query('SELECT * FROM big_questions');
$big_questions= $stmt->fetchAll();
var_dump($big_questions);
?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <link rel="stylesheet" href="reset.css"> -->
    <link rel="stylesheet" href="style.css" />
    <title>Quizy</title>
  </head>
  <body>
    <div id="main"></div>
    <script src="main.js"></script>
  </body>
</html>