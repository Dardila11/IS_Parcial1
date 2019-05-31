<?php
include_once '../php/materia.php';
include_once '../php/saveest_materias.php';

#$est_codigo = 10460232;

if(isset($_GET["codigo"])){
    $est_codigo = $_GET['codigo'];
    $filename = 'js/'.$est_codigo.'.json';
    if(file_exists($filename)){
        echo "existe";
        
    }else{
        /* no existe. le crea datos de estado 
        de materias al nuevo estudiante */
        nuevo_estudiante($est_codigo);  
    }
    
}


?>