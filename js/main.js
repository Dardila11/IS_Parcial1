function getInfo(){
    var codigo = document.getElementById("codigo").value;
    $(".res").load("php/getMaterias.php?codigo="+codigo);
}