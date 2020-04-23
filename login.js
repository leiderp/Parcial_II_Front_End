firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      db = firebase.database();
        var us = db.ref("users/" + user.uid);

        us.on("value", function(snapshot) {
          if(snapshot.val().usertype == "operator"){
            location.href = "questions.html";
          }else{
            location.href = "operators.html"
          }
        })

        
      // User is signed in.
        // var user = firebase.auth.currentUser;
    } else {
      // User is signed out.
      // ...
    }
});

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