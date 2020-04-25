function removeques(idd){

    var query = db.ref("users");
    var query2 = db.ref("results");

    query.orderByChild("iddocument").equalTo(idd).on("value", function(snapshot) {
        snapshot.forEach(function(data) {
            query2.orderByChild("uiduser").equalTo(data.val().uid).on("value", function(snapshot) {
                snapshot.forEach(function(data2) {
                    var adaRef = firebase.database().ref('results/' + data2.val().uiduser);
                    adaRef.remove().then(function() {
                        console.log("Remove succeeded.")
                    })
                    .catch(function(error) {
                        console.log("Remove failed: " + error.message)
                    });
                });
                ;
            });

        })
    });

}