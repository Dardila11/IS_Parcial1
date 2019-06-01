function infoMaterias(){
    var codigo = document.getElementById("codigo").value;
    $(".txt_codigo").load("php/getMaterias.php?codigo="+codigo);
    stateButton(true);
    buscaMaterias(codigo);
}

function stateButton(state){
    if(state == true){
        $('#btn_consultar').prop('disabled', true);
        $('#btn_consultar').css('background', 'gray');
        // activar botton realizar nueva busqueda
    }
}

function buscaMaterias(codigo){
    jQuery.getJSON("js/materias.json", function(data){
        var semestre;
        for (let i = 0; i < data.length; i++) {
            var materias = data[i];
            var datos_materia = Object.values(materias)
            //console.log(materias)
            semestre = datos_materia[2];
            switch(semestre){
                case 1:
                    organizaMaterias(datos_materia);
                break;
                case 2:
                    organizaMaterias(datos_materia);
                break;
                case 3:
                    organizaMaterias(datos_materia);
                break;
                case 4:
                    organizaMaterias(datos_materia);
                break;
                case 5:
                    organizaMaterias(datos_materia);
                break;
                case 6:
                    organizaMaterias(datos_materia);
                break;
                
            }
        }  
        // borramos el primer div con id 'aclonar'
        var elem = document.getElementById("aclonar");
        elem.parentNode.removeChild(elem);   
    });

    jQuery.getJSON("js/"+codigo+".json", function(estadoMateria){
        for (let i = 0; i < estadoMateria.length; i++) {
            var estado = estadoMateria[i];
            var info_estado = Object.entries(estado);
            var idMat = 0;
            for(const [key,value] of info_estado){
                if(key == "codigo_materia"){
                    idMat = value;
                }
                if(key == "estado"){
                    if(value == true){
                        document.getElementById("materia_"+idMat).style.backgroundColor = 'gray';  
                    }
                }
            }
        }
    });
}

function organizaMaterias(datos_materia){
    var el = document.querySelector('.materias');
    var clone = el.cloneNode(false);
    clone.id = "materia_"+datos_materia[0];
    clone.addEventListener('click', cambiaEstado); 

    var materia = document.createElement("p");
    var m =  document.createTextNode(datos_materia[1]);
    materia.appendChild(m);
    materia.id = "materia_"+datos_materia[0];
    
    var credito = document.createElement("p");
    var c = document.createTextNode(datos_materia[3]);
    credito.appendChild(c);
    credito.id = "creditos"; 
    
    clone.appendChild(materia);
    clone.appendChild(credito);
    document.getElementById("semestre_"+datos_materia[2]).appendChild(clone);
    
}

function cambiaEstado(){
    var idMateria = event.target.id;
    idMateria = idMateria.substring(8, 11);
    var codigo = document.getElementById("codigo").value;
    console.log(codigo);
    console.log(idMateria); 
    if(this.style.backgroundColor == 'gray'){
        this.style.backgroundColor = '#43A047';
        /* actualizamos el servidor */
        estado = false;
        console.log(estado)
    }else{
        this.style.backgroundColor = 'gray';
        estado = true; 
        console.log(estado)
    }
    var datos = {materia: idMateria, code: codigo, state: estado};
    //var datosJson = JSON.stringify(datos);
    //console.log(datosJson);
    
    // enviamos la actualizacion al servidor
    $.ajax({
        type: "POST",   
        //contentType: "application/json; charset=utf-8",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "php/updateMaterias.php",
        //data: "{'codigoMateria':'" + idMateria+ "', 'codigoEstudiante':'" + codigo+ "', 'estado':'" + estado+ "'}",
        data: {myData:datos},
        success: function (result) {
             console.log(result);
        }
   });
}