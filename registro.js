firebase.auth().onAuthStateChanged(function(user) {

    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;

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
