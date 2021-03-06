function stateButton(state){
    if(state == true){
        $('#info_data').show();
        $('#btn_consultar').prop('disabled', true);
        $('#btn_consultar').css('background', 'gray');
        $('#btn_nuevaBusqueda').show();
        $('.guia').show();
    }
    else{
        $('#btn_nuevaBusqueda').hide();
        $('#info_data').hide();
        $('.guia').hide();
        $('.estCodigo').hide();
    }
}
$(document).ready(function(){
    $("#btn_nuevaBusqueda").click(function(event){
        location = location;
    });
});

$(document).ready(function(){
    $("#btn_consultar").click(function(event){
        var codigo = document.getElementById("codigo").value;
        if(validacion(codigo)){
            $('.estCodigo').show();
            $(".txt_codigo").load("php/getMaterias.php?codigo="+codigo);
            stateButton(true);
            $('#info_data').show();
            buscaMaterias(codigo);
        }else{
            alert("digita tu codigo, recuerda que debe ser un numero");
        }
    });
});

function validacion(codigo){
    var valido = true;
    if(codigo == "" || isNaN(codigo)){
        valido = false;
    }
    return valido;
}



window.onload = function load(){    
    stateButton(false);
}

function buscaMaterias(codigo){

    function getMaterias(){
        $(document).ready(function(){
        jQuery.getJSON("js/materias.json", function(data){
            for (let i = 0; i < data.length; i++) {
                var materias = data[i];
                var datos_materia = Object.values(materias)
                //semestre = datos_materia[2];
                organizaMaterias(datos_materia);
            }  
            // borramos el primer div con id 'aclonar' 
            var elem = document.getElementById("aclonar");
            elem.parentNode.removeChild(elem);   
        });
        
    }); 
    } 
    
    function getEstados(){
        $(document).ready(function(){
            jQuery.getJSON("js/"+codigo+".json", function(estadoMateria){
                for (let i = 0; i < estadoMateria.length; i++) {
                    var estado = estadoMateria[i];
                    info_estado = Object.values(estado);
    
                    if(info_estado[1] == true){
                        console.log(info_estado[1]);
                        document.getElementById("materia_"+info_estado[0]).style.backgroundColor = 'gray';
                    }
                }
            });
        }); 
    } 
    
    $.when(getMaterias()).then(getEstados());
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

    var star = document.querySelector('.star_aclonar');
    var cloneStar = star.cloneNode(true);
    
    clone.appendChild(materia);
    clone.appendChild(credito);
    clone.appendChild(cloneStar);
    document.getElementById("semestre_"+datos_materia[2]).appendChild(clone);
    
}

function cambiaEstado(){
    var idMateria = event.target.id;
    idMateria = idMateria.substring(8, 11);
    var codigo = document.getElementById("codigo").value;
    if(this.style.backgroundColor == 'gray'){
        this.style.backgroundColor = '#43A047';
        estado = false;
    }else{
        this.style.backgroundColor = 'gray';
        estado = true; 
    }
    var datos = {materia: idMateria, code: codigo, state: estado};
    /* enviamos la actualizacion al servidor */
    $.ajax({
        type: "POST",   
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "php/updateMaterias.php",
        data: {myData:datos},
        complete: function (result) {
            var snd = new Audio("../snd/ding.mp3"); 
            snd.play();
        },
    });
}