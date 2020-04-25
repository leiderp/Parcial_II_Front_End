var tbody = document.getElementById("tbody");


db = firebase.database();
var us = db.ref("users/" + localStorage.uid);
us.on("value", function(snapshot) {
    var query = db.ref("users");
    
    query.orderByChild("companyname").equalTo(snapshot.val().companyname).on("value", function(snapshot) {
        tbody.innerHTML = "";
        snapshot.forEach(function(data) {
            if(data.val().usertype == "operator"){
                var sel = data.val().status;
                if(sel == "Enable"){
                    var nosel = "Disable";
                }else{
                    var nosel = "Enable";
                }
                
                agregarf(data.val().name, data.val().iddocument, data.val().email,data.val().address, sel , nosel);
            }
        });
    });
});



function agregarf(name, id, email, dir, sel, nosel){
   // <select name="statusOp" class="custom-select check-b" onchange="getDataOnChange()">\
    let html = `<tr>\
                    <td class="numero">${id}</td>\
                    <td>${name}</td>\
                    <td>${email}</td>\
                    <td>${dir}</td>\
                    <td>\
                        <select name="statusOp" id="statusOp" class="custom-select check-b">\
                            <option  value="1" id="selected" >${sel}</option>\
                            <option value="2" id="selected2">${nosel}</option>\
                        </select>\
                    </td>\
                    <td>\
                      <button value="bUpdate" id="bUpdate" title="bUpdate" class="btn btn-primary" data-toggle="modal" data-target="#modalPoll-2"><i class="fas fa-user-edit" aria-hidden="true"></i></button>&nbsp;\
                      <button value="bDelete" id="bDelete" title="bDelete" class="btn btn-danger"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>&nbsp;\
                      <input type="button" id="bGraph" value="Result-Surv" class="btn login_btn" data-toggle="modal" data-target="#exampleModalScrollable">&nbsp;\
                    </td>\
                </tr>`;
    tbody.innerHTML += html;
}

