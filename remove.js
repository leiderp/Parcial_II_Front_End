$('#maintb tbody').on('click','#bDelete',function(){
    event.preventDefault();
    event.stopPropagation();
    console.log("se disparo delete");
    db = firebase.database();
    var query = db.ref("users");
    var currow = $(this).closest('tr');
    query.orderByChild("iddocument").equalTo(currow.find('td:eq(0)').text()).on("value", function(snapshot) {
        snapshot.forEach(function(data) {

            console.log(data.val().email);
            console.log(data.val().password);

            login(data.val().email, data.val().password);

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {

                    console.log("se disparo delete");

                    user.delete().then(function() {
                        db.ref("users/" + data.val().uid).remove();
                
                    }).catch(function(error) {
                        window.alert("error: "+errorMessage);
                    });
                  // User is signed in.
                } else {
                  // No user is signed in.
                }
            });

            return true;

        });
    });
    console.log("termino delete");
});


function login(useremail,userpassword){
    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("error: "+errorMessage);
    }); 
}
