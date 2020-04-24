
db = firebase.database();
var us = db.ref("users/" + localStorage.uid);
var storage = firebase.storage();
us.on("value", function(snapshot) {
    var httpsReference = storage.refFromURL(snapshot.val().imageURL);
    httpsReference.getDownloadURL().then(function(url) {
        console.log(url);
        var img = document.getElementById('imgcom');
        img.src = url;
      }).catch(function(error) {
         console.log(error.message);
    });
    
      
});