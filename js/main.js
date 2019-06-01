function getInfo(){
    var codigo = document.getElementById("codigo").value;
    $(".estCodigo").load("php/getMaterias.php?codigo="+codigo);
    getAllMaterias(codigo);
}

function getAllMaterias(codigo){
    var idMaterias = [];
    
    jQuery.getJSON("js/materias.json", function(data){
        var counter = 1;
        for (let i = 0; i < data.length; i++) {
            var materias = data[i]
            //console.log(materias)
            var datos_materia = Object.entries(materias)
            var id = 0;
            for(const [key,value] of datos_materia){
                if(key == "codigo"){
                    id = value;
                }
                if(key == "nombre"){
                    var element = document.createElement("div")
                    element.innerHTML = value
                    element.id = "materia_"+id;
                    element.onclick = enviaDatos;
                    counter += 1;
                    document.querySelector('body').appendChild(element)
                }
            }    
        }      
    });
    /* pintamos las materias ya vistas por el estudiante */
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
                        var elem = document.getElementById("materia_"+idMat);
                        elem.style.color = 'purple';
                    }
                }
            }
        }
    });
}

function enviaDatos(){
    /* obtiene id de la materia */

    var idMateria = event.target.id;
    idMateria = idMateria.substring(8, 11);
    /* obtiene el id del estudiante */
    var idEstudiante = document.getElementById("codigo").value;
    var estado = false;
    
    /* si el color del elemento es morado: el estado = true */
    var elem = document.getElementById("#"+event.target.id);
    
    if(this.style.color == 'purple'){
        this.style.color = 'black';
        /* actualizamos el servidor */
        estado = false;
        console.log(estado)
    }else{
        this.style.color = 'purple';
        estado = true; 
        console.log(estado)
    }
    var myData = {'idEst': idEstudiante,'idMat': idMateria,'state': estado};
    var myDataString = JSON.stringify(myData);
    console.log(myDataString);

    $.ajax({
        //contentType: "application/json", // php://input
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType : "POST",
        method: "GET",
        url: "php/updateMaterias.php",
        data: myDataString,
        success: function(response) {
            alert(response);
        }
    });
    
}

