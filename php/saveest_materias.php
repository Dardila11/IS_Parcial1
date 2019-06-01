<?php
include_once __DIR__.'/estMateria.php';

function nuevo_estudiante($codigo){
    $estMaterias = array();
    $counter = 0;
    for ($i=101; $i <= 121 ; $i++) { 
        $estMaterias[$counter] = new estMateria($i,false);
        $counter += 1;
    }
    $materias_json = json_encode($estMaterias, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    $fp = fopen('../js/'.$codigo.'.json','w');
    fwrite($fp,$materias_json);
    fclose($fp);
}

function update_estudiante($idMateria, $codEstudiante, $estadoMateria){

    $archivo = file_get_contents($codEstudiante.'.json');
    echo $archivo;
    /* $archivoDecodificado = json_decode($archivo, true);
    $archivoDecodificado[$idMateria] = $estadoMateria;
    $json = json_encode($archivoDecodificado);
    file_put_contents($codEstudiante.'.json',$json); */
}
?>