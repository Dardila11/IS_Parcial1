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
                
                break;
                case 2:
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
                break;
                case 3:
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
                break;
                case 4:
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
                break;
                case 5:
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
                break;
                case 6:
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
                break;
                
            }
            
            console.log(datos_materia[2]);
            var id = 0;
            
            
            
        }      
    });
}