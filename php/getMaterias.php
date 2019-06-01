<?php
include_once '../php/materia.php';
include_once '../php/saveest_materias.php';

if(isset($_GET["codigo"])){
    $est_codigo = $_GET['codigo'];
    $filename = '../js/'.$est_codigo.'.json';
    if(file_exists($filename)){
        echo $est_codigo;
        /* envia el json del estudiante con las 
            materias y sus estados */

        
    }else{
        /* no existe. le crea datos de estado 
        de materias al nuevo estudiante */
        echo $est_codigo;
        nuevo_estudiante($est_codigo);  
    }
    
}


?>