var tbody = document.getElementById("scrol");

useruid = localStorage.uid;


var db = firebase.database();

var query = db.ref("questions");

var us = db.ref("users/" + useruid);

us.on("value", function(snapshot) {

    console.log(snapshot.val().ask);

    if(snapshot.val().ask == true){
        query.orderByChild("uid").equalTo(snapshot.val().uidcompany).on("value", function(snapshot) {
            tbody.innerHTML = "";
            i = 1;
            snapshot.forEach(function(data) { 
                questiosHTML(data.val().question, data.val().option1, data.val().option2,i);
                i++;
            });
        });
    }else{
        
        var btn = document.getElementById("btn-send");
        btn.style.display = 'none';
        
    }

    

    // if(snapshot.val().usertype == "operator"){
    //   localStorage.uid = firebase.auth().currentUser.uid;
    //   location.href = "questions.html";
    // }else{
    //   localStorage.uid = firebase.auth().currentUser.uid;
    //   location.href = "operators.html"
    // }
})


function questiosHTML(pregunta, op1, op2, i){
    let html2 = `<div class="flex-wrap">\
                    <h3 id="pregunta${i}">${pregunta}</h3>\
                    <ul class="votacion index">\
                        <li><input name="valor${i}" id="radio${i}1" value="option1" type="radio"><span>${op1}</span></li>\
                        <li><input name="valor${i}" id="radio${i}2" value="option2" type="radio"><span>${op2}</span></li
                    </ul>\
                </div>`;
    tbody.innerHTML += html2;
}