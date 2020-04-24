


















function writeq(pregunta, op1, op2, rc, val){

    useruid = localStorage.uid;

    var key = generateHexString(20);

    firebase.database().ref("questions/" + useruid).set({
        "question": pregunta,
        "option1": op1,vl,
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

function getques(){

    useruid = localStorage.uid;

    db = firebase.database();
    var qs = db.ref("questions/" + useruid);

    var query = db.ref("questions");
    
    query.orderByChild("uid").equalTo(useruid).on("value", function(snapshot) {
        // tbody.innerHTML = "";
        snapshot.forEach(function(data) {
            questiosHTML(data.val().question, data.val().option1, data.val().option2)
        });
    });

}

function questiosHTML(pregunta, op1, op2){
    let html2 = `<div class="flex-wrap">\
                    <h3>${pregunta}</h3>\
                    <ul class="votacion index">\
                        <li><input name="valor" type="radio"><span>${op1}</span></li>\
                        <li><input name="valor" type="radio"><span>${op2}</span></li
                    </ul>\
                </div>`;
}