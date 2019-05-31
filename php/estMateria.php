<?php
class estMateria{
    public $codigo_materia = 0;
    public $estado = false;
    
    public function __construct($codigo_materia, $estado){
        $this->codigo_materia = $codigo_materia;
        $this->estado = $estado;
    }
    public function getCodigo_materia(){
        return $this->codigo_materia;
    }
    
    public function setCodigo_materia($codigo_materia){
        $this->codigo_materia = $codigo_materia;
        return $this;
    }
    
    public function getEstado(){
        return $this->estado;
    }
    
    public function setEstado($estado){
        $this->estado = $estado;
        return $this;
    }
    
}
?>