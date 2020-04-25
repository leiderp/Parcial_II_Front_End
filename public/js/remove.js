function remove(idd){

    var query = db.ref("users");

    query.orderByChild("iddocument").equalTo(idd).on("value", function(snapshot) {
        snapshot.forEach(function(data) {


            var adaRef = firebase.database().ref('users/' + data.val().uid);
            adaRef.remove().then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
              console.log("Remove failed: " + error.message)
            });




            firebase.auth().signInWithEmailAndPassword(data.val().email, data.val().password).then(function(){
                console.log(data.val().email);
                console.log(useremail); 

                var user = firebase.auth().currentUser;

                if (user) {
                    
                    user.delete().then(function() {
            
                    }).catch(function(error) {
                        window.alert("error: "+errorMessage);
                    });
                  // User is signed in.
                } else {
                  // No user is signed in.
                }


                
            
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                window.alert("error: "+errorMessage);
            }); 
            
            return true;
        });
    });

    // db = firebase.database();
    // var query = db.ref("users");

    // query.orderByChild("iddocument").equalTo(idd).on("value", function(snapshot) {
    //     snapshot.forEach(function(data) {
    //         console.log(data.val().email);
    //         console.log(data.val().uid);
    //         firebase.auth().signInWithEmailAndPassword(data.val().email, data.val().password).then(function(){
    //             // var user = firebase.auth().currentUser;
    //             console.log(data.val().email);
    //             console.log(useremail);

    //             db.ref("users/" + data.val().uid).remove();

    //         }).catch(function(error) {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // ...
    //             window.alert("error: "+errorMessage);
    //         }); 
    //     });
    // });
}
    // mountainsRef.on('state_changed', function(snapshot){
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    
    // }, function(error) {
    //     window.alert(error.message)
    //     // Handle unsuccessful uploads
    // }, function() {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     mountainsRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //         console.log(downloadURL);
    //         query.orderByChild("iddocument").equalTo(id).on("value", function(snapshot) {
    //             snapshot.forEach(function(data) {
    //                 console.log(data.val().email);
    //                 console.log(data.val().uid);
    //                 firebase.auth().signInWithEmailAndPassword(data.val().email, data.val().password).then(function(){
    //                     var user = firebase.auth().currentUser;
    //                     console.log(data.val().email);
    //                     console.log(useremail);
        
    //                     user.updateEmail(useremail).then(function() {
    //                         db.ref("users/" + data.val().uid).update({
    //                             "name": name,
    //                             "iddocument": idDoc,
    //                             "documenttype": docuType,
    //                             "email": useremail,
    //                             "imageURL" : downloadURL,
    //                             "address": address,
    //                         });
    //                         // Update successful.
    //                     }).catch(function(error) {
    //                         // An error happened.
    //                     });
                          
                          
        
        
    //                 }).catch(function(error) {
    //                     // Handle Errors here.
    //                     var errorCode = error.code;
    //                     var errorMessage = error.message;
    //                     // ...
    //                     window.alert("error: "+errorMessage);
    //                 }); 
    //             });
    //         });
    //     }); 
    // });

    

        // query.orderByChild("iddocument").equalTo(id).on("value", function(snapshot) {
        //     snapshot.forEach(function(data) {
        //         firebase.auth().signInWithEmailAndPassword(data.val().email, data.val().password).then(function(){

        //             var user = firebase.auth().currentUser;

        //             console.log(data.val().email);

        //             console.log(useremail);

    
        //             user.updateEmail(useremail).then(function() {

        //                 db.ref("users/" + data.val().uid).update({
        //                     "name": name,
        //                     "iddocument": idDoc,
        //                     "documenttype": docuType,
        //                     "email": useremail,
        //                     "address": address,
        //                 });
        //                 // Update successful.
        //             }).catch(function(error) {
        //                 // An error happened.
        //             });
                      
                      
    
    
        //         }).catch(function(error) {
        //             // Handle Errors here.
        //             var errorCode = error.code;
        //             var errorMessage = error.message;
        //             // ...
        //             window.alert("error: "+errorMessage);
        //         });
        //     });
        // });
    



// $('#maintb tbody').on('click','#bDelete',function(){
//     event.preventDefault();
//     event.stopPropagation();
//     console.log("se disparo delete");
//     db = firebase.database();
//     var query = db.ref("users");
//     var currow = $(this).closest('tr');
//     query.orderByChild("iddocument").equalTo(currow.find('td:eq(0)').text()).on("value", function(snapshot) {
//         snapshot.forEach(function(data) {

//             console.log(data.val().email);
//             console.log(data.val().password);

//             login(data.val().email, data.val().password);

//             firebase.auth().onAuthStateChanged(function(user) {
//                 if (user) {

//                     console.log("se disparo delete");

//                     user.delete().then(function() {
//                         db.ref("users/" + data.val().uid).remove();
                
//                     }).catch(function(error) {
//                         window.alert("error: "+errorMessage);
//                     });
//                   // User is signed in.
//                 } else {
//                   // No user is signed in.
//                 }
//             });

//             return true;

//         });
//     });
//     console.log("termino delete");
// });


// function login(useremail,userpassword){
//     firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//       window.alert("error: "+errorMessage);
//     }); 
// }
