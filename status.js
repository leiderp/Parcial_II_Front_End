// console.log("paso");
// // var slc = document.
// // console.log(slc);

// // db = firebase.database();
// // db.ref("users/" + uid);
// // us.on("value", function(snapshot) { 
// // });
$("#maintb tbody").on('click', '#selected', function(){
    console.log("bdhebdhbeh");
    var currow = $(this).closet('tr');
    var col = currow.find('td:eq(5)').text();
    console.log(col);

});
