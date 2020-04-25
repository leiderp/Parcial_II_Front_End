function responder(){
    var tbody = document.getElementById("scrol");
    console.log("reaccionon");
    uuid = localStorage.uid;
    var us = db.ref("users/" + uuid);
    var query = db.ref("questions");
    var vale = 0;
    
    db.ref("users/"+uuid).update({
        "ask" : false,
    }).then(function() {
        tbody.innerHTML = "";
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
    
    us.on("value", function(snapshot2) {
        var rr = 1;
        var total = 0;
        query.orderByChild("uid").equalTo(snapshot2.val().uidcompany).on("value", function(snapshot) {
            snapshot.forEach(function(data) {
                console.log(rr);
                rr++;
                var pregunta = "";
                var check = false;
                var opcioncorrect = "";
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
                        key = generateHexString(20);
                        total=total+parseInt(data.val().value);
                        if(data.val().answer == opcioncorrect){
                            var valQ = data.val().value;
                            vale = vale+valQ;
                        }else{
                            var valQ = 0;
                        }
                    
                        firebase.database().ref("results/" + key).set({
                            "total": total,
                            "pregunta": pregunta,
                            "uiduser": uuid,
                            "valor": valQ,
                        }).then(function(){
                                    
                        });
                    }
                }
            });
        
        });
    
    
    });


}

function generateHexString(length) {
    var ret = "";
    while (ret.length < length) {
      ret += Math.random().toString(16).substring(2);
    }
    return ret.substring(0,length);
}