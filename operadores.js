var tbody = document.getElementById("tbody");


db = firebase.database();
var us = db.ref("users/" + localStorage.uid);
us.on("value", function(snapshot) {
    var query = db.ref("users");
    
    query.orderByChild("companyname").equalTo(snapshot.val().companyname).on("value", function(snapshot) {
        tbody.innerHTML = "";
        snapshot.forEach(function(data) {
            if(data.val().usertype == "operator"){
                agregarf(data.val().name, data.val().iddocument, data.val().email,data.val().address);
            }
        });
    });
});



function agregarf(name, id, email, dir){
                    
    let html = `<tr>\
                    <th scope="row" class="text-black">1</th>\
                    <td>${id}</td>\
                    <td>${name}</td>\
                    <td>${email}</td>\
                    <td>${dir}</td>\
                    <td>\
                        <select class="custom-select check-b">\
                            <option  value="1">Enable</option>\
                            <option value="2">Disable</option>\
                        </select>\
                    </td>\
                    <td>\
                      <button value="bUpdate" title="bUpdate" class="btn btn-primary"><i class="fas fa-user-edit" aria-hidden="true"></i></button>&nbsp;\
                      <button value="bDelete" title="bDelete" class="btn btn-danger"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>\
                    </td>\
                </tr>`;
    tbody.innerHTML += html;
}