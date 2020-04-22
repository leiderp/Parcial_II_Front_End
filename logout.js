function logout(){
    firebase.auth().signOut().then(function() {
        location.href = "register.html";
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}