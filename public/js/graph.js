function graphResults(idUs){
    var may = -999999;
    var datos=[];
    uuid = localStorage.uid;
var us = db.ref("users");
var query = db.ref("results");
us.orderByChild("iddocument").equalTo(idUs).on("value",function(snapshot) {
    snapshot.forEach(function(data) {
        query.orderByChild("uiduser").equalTo(data.val().uid).on("value", function(snapshot2) {
        snapshot2.forEach(function(data2){
            if (may<parseInt(data2.val().total)) {
                may=parseInt(data2.val().total);
            }
            datos.push(parseInt(data2.val().valor));
            
        });
        showgraph(datos,may);
        });
        
    });
    
});

}
function showgraph(datos,may){
    var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Score/Question",
    data: datos,
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var dataSecond = {
    label: "Score Total",
    data: [may, may, may, may, may],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

var speedData = {
  labels: ["Pregunta_1", "Pregunta_2", "Pregunta_3", "Pregunta_4", "Pregunta_5"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

}

