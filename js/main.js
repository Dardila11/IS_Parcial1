function getInfo(){
    var codigo = document.getElementById("codigo").value;
    $("#res").load("php/getMaterias.php?codigo="+codigo);
    getAllMaterias(codigo);
}

function getAllMaterias(codigo){
    /* TODO: verificar que no haya nuevas materias agregadas. actualiza el json */
    var idMaterias = [];
    
    jQuery.getJSON("js/materias.json", function(data){
        var counter = 1;
        for (let i = 0; i < data.length; i++) {
            var materias = data[i]
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
    var id = event.target.id;
    id = id.substring(8, 11);
    alert(id);
}
