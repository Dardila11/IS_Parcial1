<?php
include 'php/materia.php';


$materias = array();
$materias[0] = new Materia(101,"Calculo I",1,4);
$materias[1] = new Materia(102,"Introduccion a la Informatica",1,3);
$materias[2] = new Materia(103,"Lab. Introduccion a la Informatica",1,1);
$materias[3] = new Materia(104,"Calculo II",2,3);
$materias[4] = new Materia(105,"Programacion Orientada a Objetos",2,3);
$materias[5] = new Materia(106,"Mecanica",2,1);
$materias[6] = new Materia(107,"Calculo III",3,4);
$materias[7] = new Materia(108,"Estructuras de Datos I",3,3);
$materias[8] = new Materia(109,"Lab de Estructuras de Datos I",3,1);
$materias[9] = new Materia(110,"Bases de Datos I",4,3);
$materias[10] = new Materia(111,"Lab de Bases de Datos I",4,1);
$materias[11] = new Materia(112,"Estructura de Datos II",4,3);
$materias[12] = new Materia(113,"Lab. de Estructuras de Datos II",4,1);
$materias[13] = new Materia(114,"Ingeniería de Software I",5,3);
$materias[14] = new Materia(115,"Lab. de Ingeniería de Software I",5,1);
$materias[15] = new Materia(116,"Teoría de la Computación",5,3);
$materias[16] = new Materia(117,"Arquitectura Computacional",5,4);
$materias[17] = new Materia(118,"Ingeniería de Software II",6,3);
$materias[18] = new Materia(119,"Lab. de Ingeniería de Software II",6,1);
$materias[19] = new Materia(120,"Sistemas Operativos",6,3); 
$materias[20] = new Materia(121,"Lab. Sistemas Operativos",6,1); 

$materias_json = json_encode($materias, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
$fp = fopen('js/materias.json','w');
fwrite($fp,$materias_json);
fclose($fp);
?>

