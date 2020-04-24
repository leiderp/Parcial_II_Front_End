function changeState(iddoc,state){
    db=firebase.database();
    var query=db.ref("users");
    query.orderByChild("iddocument").equalTo(iddoc).on("value",function(snapshot){
        snapshot.forEach(function(data){
            db.ref("users/"+data.val().uid).update({
                "status" :state
            });
            return true;
        });
    });

}


