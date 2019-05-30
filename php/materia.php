<?php
    class Materia {
       public $codigo = 0;
       public $nombre;
       public $semestre = 0;
       public $creditos = 0;
       
       public function __construct($codigo, $nombre, $semestre, $creditos){
           $this->codigo = $codigo;
           $this->nombre = $nombre;
           $this->semestre = $semestre;
           $this->creditos = $creditos;
       }

       public function getCodigo(){
        return $this->codigo;
    }
    
    public function setCodigo($codigo){
        $this->codigo = $codigo;
        return $this;
    }
    
    public function getNombre(){
        return $this->nombre;
    }
    
    public function setNombre($nombre){
        $this->nombre = $nombre;
        return $this;
    }
    public function getSemestre(){
        return $this->semestre;
    }
    
    public function setSemestre($semestre){
        $this->semestre = $semestre;
        return $this;
    }
    public function getCreditos(){
        return $this->creditos;
    }
    
    public function setCreditos($creditos){
        $this->creditos = $creditos;
        return $this;
    }

    



    }
?>