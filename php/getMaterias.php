<?php

include 'php/materia.php';
include 'php/saveest_materias.php';
$est_codigo = 10460232;
$filename = 'js/'.$est_codigo.'.json';
if(file_exists($filename)){
    echo "existe";
    /* envia estado de las materias del estudiante */
    
}else{
    echo "no existe";
    /* crea nuevo fichero con el codigo del estudiante */
    nuevo_estudiante($est_codigo);
}

if(isset($_GET["codigo"])){
    $est_codigo = $_GET['codigo'];
    $filename = 'js/'.$est_codigo.'.json';
    if(file_exists($filename)){
        echo "existe";
        
    }else{
        echo "no existe";  
    }
    
}
?>