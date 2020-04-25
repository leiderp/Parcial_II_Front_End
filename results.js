uuid = localStorage.uid;
var us = db.ref("users/" + uuid);
var query = db.ref("questions");

us.on("value", function(snapshot2) {
    query.orderByChild("uid").equalTo(snapshot.val().uidcompany).on("value", function(snapshot) {
        snapshot.forEach(function(data) {
            var pregunta = "";
            var check = false;
            var opcioncorrect = "";
            var total = 0;
            var tocalCorrects = 0;
            for (var i = 1; i < 6; i++) {
                pregunta = document.getElementById("pregunta"+i).textContent;
                check = document.getElementById("radio"+i+"1").checked;
                //var valorAns = document.getElementById("score"+i).value;
                if(check==true){
                    opcioncorrect=document.getElementById("radio"+i+"1").value;
                }else{
                    opcioncorrect=document.getElementById("radio"+i+"2").value;
                }

                if(data.val().question == pregunta){
                    total=total+data.val().value;
                    if(data.val().answer == opcioncorrect){
                        var valQ=data.val().value;
                        vale = vale+valQ;
                    }

                }
            }
        });

    });


});