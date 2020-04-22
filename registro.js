firebase.auth().onAuthStateChanged(function(user) {

    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;
    var name = document.getElementById("name").value;
    var docuType = document.getElementById("Dtype").value;
    var idDoc = document.getElementById("IDdoc").value;
    var company = document.getElementById("company").value;
    var imge=uploadimg();
     
    
    if (user) {
        uid = firebase.auth().currentUser.uid;

        llenarbd(uid,useremail,userpassword);
        // let p1 = new Promise((resolve, reject)=> llenarbd(uid,useremail,userpassword));

        // let p2 = new Promise((resolve, reject)=> locate());

        
        

        

        
      // User is signed in.
        // var user = firebase.auth.currentUser;
    } else {
      // User is signed out.
      // ...
    }
});

function registro(){
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

function llenarbd(uid, email, password){
    firebase.database().ref("users/" + uid).set({
        "email": email,
        "password": password,
        "uid": uid,
    }).then(function(){
        location.href = "operators.html";
    });
}

function locate(){
    location.href = "operators.html";
}
function uploadimg(){
    var imag =document.getElementById("inputGroupFile01").files[0];

        // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('images/'+imag.name).put(imag);

    mountainsRef.on('state_changed',
    function(snapshot){

    }, function(error){
        alert(error);
    },function(){
        var URLimag = mountainsRef.snapshot.downloadURL;
        return URLimag;
    });

    // Create a reference to 'images/mountains.jpg'
   // var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // While the file names are the same, the references point to different files
    //mountainsRef.name === mountainImagesRef.name            // true
    //mountainsRef.fullPath === mountainImagesRef.fullPath    // false
}
