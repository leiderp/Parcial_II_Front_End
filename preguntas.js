function registrarEncuesta(){
    //Preguntas
    var pregunta = "";
    var check = false;
    var opcioncorrect = "";
    var opcion1="";
    var opcion2="";
    for (var i = 1; i < 6; i++) {
        pregunta = document.getElementById("textarea"+i).value;
        opcion1 = document.getElementById("label"+i+"1").textContent;
        opcion2 = document.getElementById("label"+i+"2").textContent;
        check = document.getElementById("radio"+i+"1").checked;
        var valorAns = document.getElementById("score"+i).value;
        if(check==true){
            opcioncorrect=document.getElementById("radio"+i+"1").value;
        }else{
            opcioncorrect=document.getElementById("radio"+i+"2").value;
        }
     }

    alert(opcion1+""+opcion2+""+valorAns);
}
