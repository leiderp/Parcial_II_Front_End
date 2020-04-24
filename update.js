function update(){
    console.log("le di");
    var useremail = document.getElementById("useremail2").value;
    var name = document.getElementById("name2").value;
    var docuType = document.getElementById("Dtype2").value;
    var idDoc = document.getElementById("IDdoc2").value;
    var address = document.getElementById("address2").value;
    var id = document.getElementById("hid").value;


    db = firebase.database();
    var query = db.ref("users");
    
    try {
        var imag = document.getElementById("inputGroupFile02").files[0];
        var storageRef = firebase.storage().ref();

        var mountainsRef = storageRef.child('images/'+imag.name).put(imag);
        mountainsRef.on('state_changed', function(snapshot){
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        
        }, function(error) {
            window.alert(error.message)
            // Handle unsuccessful uploads
        }, function() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            mountainsRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log(downloadURL);
                query.orderByChild("iddocument").equalTo(id).on("value", function(snapshot) {
                    snapshot.forEach(function(data) {

                        console.log(data.val().email);

                        console.log(data.val().uid);

                        firebase.auth().signInWithEmailAndPassword(data.val().email, data.val().password).then(function(){

                            var user = firebase.auth().currentUser;

                            console.log(data.val().email);

                            console.log(useremail);

            
                            user.updateEmail(useremail).then(function() {

                                db.ref("users/" + data.val().uid).update({
                                    "name": name,
                                    "iddocument": idDoc,
                                    "documenttype": docuType,
                                    "email": useremail,
                                    "imageURL" : downloadURL,
                                    "address": address,
                                });
                                // Update successful.
                            }).catch(function(error) {
                                // An error happened.
                            });
                              
                              
            
            
                        }).catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // ...
                            window.alert("error: "+errorMessage);
                        }); 
                    });
                });
            }); 
        });
    }
    catch(error) {

        query.orderByChild("iddocument").equalTo(id).on("value", function(snapshot) {
            snapshot.forEach(function(data) {
                firebase.auth().signInWithEmailAndPassword(data.val().email, data.val().password).then(function(){

                    var user = firebase.auth().currentUser;

                    console.log(data.val().email);

                    console.log(useremail);

    
                    user.updateEmail(useremail).then(function() {

                        db.ref("users/" + data.val().uid).update({
                            "name": name,
                            "iddocument": idDoc,
                            "documenttype": docuType,
                            "email": useremail,
                            "address": address,
                        });
                        // Update successful.
                    }).catch(function(error) {
                        // An error happened.
                    });
                      
                      
    
    
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    window.alert("error: "+errorMessage);
                });
            });
        });
    }
}