<?php
include_once __DIR__.'/estMateria.php';

function nuevo_estudiante($codigo){
    $estMaterias = array();
    $counter = 0;
    for ($i=101; $i < 121 ; $i++) { 
        $estMaterias[$counter] = new estMateria($i,false);
        $counter += 1;
    }
    $materias_json = json_encode($estMaterias, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    $fp = fopen('../js/'.$codigo.'.json','w');
    fwrite($fp,$materias_json);
    fclose($fp);
}

?>