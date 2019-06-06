<?php
include_once '../php/materia.php';
include_once '../php/saveest_materias.php';

if(isset($_GET["codigo"])){
    $est_codigo = $_GET['codigo'];
    $filename = '../js/'.$est_codigo.'.json';
    if(file_exists($filename)){
        echo $est_codigo;
    }else{
        nuevo_estudiante($est_codigo);  
        echo $est_codigo;
    }
    
}


?>