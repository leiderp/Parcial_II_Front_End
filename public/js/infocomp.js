
db = firebase.database();
var us = db.ref("users/" + localStorage.uid);
var storage = firebase.storage();
us.on("value", function(snapshot) {
    var httpsReference = storage.refFromURL(snapshot.val().imageURL);
    httpsReference.getDownloadURL().then(function(url) {
        var img = document.getElementById('imgcom');
        img.src = url;
    }).catch(function(error) {
        console.log(error.message);
    });
    $("#usname").text(snapshot.val().name);
    $("#iddo").text(snapshot.val().iddocument);
    $("#emailus").text(snapshot.val().email);
    $("#comname").text(snapshot.val().companyname);
    $("#phoneus").text(snapshot.val().phone);
});