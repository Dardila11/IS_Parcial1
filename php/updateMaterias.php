<?php
include_once '../php/materia.php';
include_once '../php/saveest_materias.php';

$jsonString = file_get_contents($_GET["myData"]);
echo $jsonString
?>