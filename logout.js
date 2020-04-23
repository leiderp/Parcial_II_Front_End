function logout(){
    firebase.auth().signOut().then(function() {
        location.href = "index.html";
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}