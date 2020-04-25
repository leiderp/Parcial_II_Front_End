function resolvEncuesta(){

    
    uuid = localStorage.uid;
    var us = db.ref("users/" + uuid);

    us.on("value", function(snapshot2) {
        console.log(snapshot2.val().done);
        if(snapshot2.val().done == "false"){

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
                writeq(pregunta, opcion1, opcion2, opcioncorrect, valorAns);
            }

            db.ref("users/" + uuid).update({
                "done": "true",
            });
         
        }else{
            alert("the survey has already been created");
        }

    });
    //Preguntas
    
}


function writeq(pregunta, op1, op2, rc, val){

    useruid = localStorage.uid;

    var us = db.ref("users/" + useruid);
    var key = generateHexString(20);


    firebase.database().ref("questions/" + key).set({
        "question": pregunta,
        "option1": op1,
        "option2": op2,
        "answer": rc,
        "questionkey": key,
        "value": val,
        "uid": useruid,
    }).then(function(){
                
    });

}


function generateHexString(length) {
    var ret = "";
    while (ret.length < length) {
      ret += Math.random().toString(16).substring(2);
    }
    return ret.substring(0,length);
}




