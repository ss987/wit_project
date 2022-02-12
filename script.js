//STICKY NAVBAR
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//GRAPH
var xValues = [".","HTML", "CSS", "JavaScript", "Python", "Ms-Office","."];
var yValues = [0,85, 75, 65, 80, 80,100];
var barColors = ["black","red", "green","white","orange","brown","black"];

new Chart("myChart", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  }
  
});

