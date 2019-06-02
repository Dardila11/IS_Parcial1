<?php
include_once '../php/materia.php';
include_once __DIR__.'/estMateria.php';

if(isset($_POST["myData"])){
    $datos = $_POST["myData"];
    $newJsonString = json_encode($datos);
    header('Content-Type: application/json');

    $array = json_decode($newJsonString, true);
    //actualizamos el archivo del estudiante

    $filename = '../js/'.$array['materia'].'.json';
    $valor = false;
    if($array['state'] == "false"){
        $valor = false;
    }else{
        $valor = true;
    }
    $archivo = file_get_contents('../js/'.$array['code'].'.json');
    $archivoDecodificado = json_decode($archivo, true);
    foreach ($archivoDecodificado as $key => $entry) {
        if ($entry['codigo_materia'] == $array['materia']) {
            $archivoDecodificado[$key]['estado'] = $valor;
        }
    }
    $json = json_encode($archivoDecodificado, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents('../js/'.$array['code'].'.json',$json);
    
}
?>