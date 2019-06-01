function buscaMaterias(){
    // clona elementos
    
    /*var el = document.querySelector('.materias');
    var clone = el.cloneNode(false);
    clone.id = "materia_101"; 
    
    var materia = document.createElement("p");
    var m =  document.createTextNode("Calculo");
    materia.appendChild(m);
    materia.id = "materia";
    
    var credito = document.createElement("p");
    var c = document.createTextNode("3");
    credito.appendChild(c);
    credito.id = "creditos";   
    
    clone.appendChild(materia);
    clone.appendChild(credito);
    document.getElementById("semestre_1").appendChild(clone); */
    
    jQuery.getJSON("js/materias.json", function(data){
        var semestre;
        for (let i = 0; i < data.length; i++) {
            var materias = data[i];
            var datos_materia = Object.values(materias)
            console.log(materias)
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
}

function organizaMaterias(datos_materia){
    var el = document.querySelector('.materias');
    var clone = el.cloneNode(false);
    clone.id = "materia_"+datos_materia[0]; 
    
    var materia = document.createElement("p");
    var m =  document.createTextNode(datos_materia[1]);
    materia.appendChild(m);
    materia.id = "materia";
    
    var credito = document.createElement("p");
    var c = document.createTextNode(datos_materia[3]);
    credito.appendChild(c);
    credito.id = "creditos"; 
    
    clone.appendChild(materia);
    clone.appendChild(credito);
    document.getElementById("semestre_"+datos_materia[2]).appendChild(clone);
    
}