firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db = firebase.database();

        var query = db.ref("users");

        query.orderByChild("companyname").equalTo("UNINORTE").on("value", function(snapshot) {
            snapshot.forEach(function(data) {
                console.log("The " + data.key + " dinosaur's score is " + data.val().name);
            });
        });
        
    } else {
      // User is signed out.
      // ...
    }
});

function agregarf(name, id, email, dir){
    let html = '<th scope="row" class="text-black">1</th>\
                <td>${}</td>\
                <td>José Lopez</td>\
                <td>José@GMAIL.COM</td>\
                <td>cl 3, cr 32</td>\
                <td>\
                    <select class="custom-select check-b">\
                        <option  value="1">Enable</option>\
                        <option value="2">Disable</option>\
                    </select>\
                </td>\
                <td>\
                  <button value="bUpdate" title="bUpdate" class="btn btn-primary"><i class="fas fa-user-edit" aria-hidden="true"></i></button>&nbsp;\
                  <button value="bDelete" title="bDelete" class="btn btn-danger"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>\
                </td>';
}