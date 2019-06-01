<?php
include_once '../php/materia.php';
include_once '../php/saveest_materias.php';

//$jsonString = file_get_contents($_GET["myData"]);
//echo $jsonString
if(isset($_POST["myData"])){
    $datos = $_POST["myData"];
    $newJsonString = json_encode($datos);
    header('Content-Type: application/json');
    echo $newJsonString;
}
?>