var tbody = document.getElementById("scrol");

useruid = localStorage.uid;


var db = firebase.database();

var query = db.ref("questions");

var us = db.ref("users/" + useruid);

us.on("value", function(snapshot) {

    query.orderByChild("uid").equalTo(snapshot.val().uidcompany).on("value", function(snapshot) {
        tbody.innerHTML = "";
        snapshot.forEach(function(data) {
            questiosHTML(data.val().question, data.val().option1, data.val().option2)
        });
    });

    // if(snapshot.val().usertype == "operator"){
    //   localStorage.uid = firebase.auth().currentUser.uid;
    //   location.href = "questions.html";
    // }else{
    //   localStorage.uid = firebase.auth().currentUser.uid;
    //   location.href = "operators.html"
    // }
})


function questiosHTML(pregunta, op1, op2){
    let html2 = `<div class="flex-wrap">\
                    <h3>${pregunta}</h3>\
                    <ul class="votacion index">\
                        <li><input name="valor" type="radio"><span>${op1}</span></li>\
                        <li><input name="valor" type="radio"><span>${op2}</span></li
                        tbody         </ul>\
                </div>`;
    tbody.innerHTML += html2;
}