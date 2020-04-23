firebase.auth().onAuthStateChanged(function(user) {

    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;
    var name = document.getElementById("name").value;
    var docuType = document.getElementById("Dtype").value;
    var idDoc = document.getElementById("IDdoc").value;
    var company = document.getElementById("company").value;
    var imag = document.getElementById("inputGroupFile01").files[0];
    console.log(document.getElementById("Dtype"));
     
    
    if (user) {

        uid = firebase.auth().currentUser.uid;

        var storageRef = firebase.storage().ref();

         // Create a reference to 'mountains.jpg'
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
                firebase.database().ref("users/" + uid).set({
                    "name": name,
                    "iddocument": idDoc,
                    "documenttype": docuType,
                    "email": useremail,
                    "imageURL" : downloadURL,
                    "companyname": company,
                    "password": userpassword,
                    "uid": uid,
                    "usertype": "company"
                }).then(function(){
                    location.href = "operators.html";
                });

            }); 
        });


        

        
        

        

        
      // User is signed in.
        // var user = firebase.auth.currentUser;
    } else {
      // User is signed out.
      // ...
    }
});

function registro(){
    console.log("le di");
    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;

    firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).then(function(){
        login();
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+errorMessage);
        // ...
    });


}

function login(){
    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("error: "+errorMessage);
    }); 
}


function locate(){
    location.href = "operators.html";
}

function uploadimg(imag){

    


        // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('images/'+imag.name).put(imag);

    // mountainsRef.on('state_changed',
    // function(snapshot){

    // }, function(error){
    //     window.alert(error.message);
    // },function(){
    //     var URLimag = mountainsRef.snapshot.downloadURL;
    //     return URLimag;
    // });


    mountainsRef.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        mountainsRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          imge = downloadURL;
          console.log('cccccccccccc', imge);
        });
      });
      

    // Create a reference to 'images/mountains.jpg'
   // var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // While the file names are the same, the references point to different files
    //mountainsRef.name === mountainImagesRef.name            // true
    //mountainsRef.fullPath === mountainImagesRef.fullPath    // false
}
