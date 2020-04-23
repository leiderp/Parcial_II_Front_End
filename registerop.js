function registroop(){
    console.log("le di");
    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;
    var name = document.getElementById("name").value;
    var docuType = document.getElementById("Dtype").value;
    var idDoc = document.getElementById("IDdoc").value;
    var address = document.getElementById("address").value;
    var imag = document.getElementById("inputGroupFile01").files[0];

    firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).then(function(){
        // login();
        var storageRef = firebase.storage().ref();
        

        var user = firebase.auth().currentUser;

        db = firebase.database();
        var us = db.ref("users/" + localStorage.uid);
        // snapshot.val().companyname)
        us.on("value", function(snapshot) {
            var mountainsRef = storageRef.child('images/'+imag.name).put(imag);


            mountainsRef.on('state_changed', function(snapshot){
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            
            }, function(error) {
                // Handle unsuccessful uploads
            }, function() {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                mountainsRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log(downloadURL);
                    firebase.database().ref("users/" + user.uid).set({
                        "name": name,
                        "iddocument": idDoc,
                        "documenttype": docuType,
                        "email": useremail,
                        "imageURL" : downloadURL,
                        "address": address,
                        "companyname": snapshot.val().companyname,
                        "password": userpassword,
                        "uid": user.uid,
                        "usertype": "operator"
                    }).then(function(){
                        // location.href = "operators.html";
                    });

                }); 
            });
        });

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+errorMessage);
        // ...
    });
}