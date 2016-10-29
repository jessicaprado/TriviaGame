$(document).ready(function() {

//time variables
var second = 20;
var counter = setInterval(timer, 1000);

function timer () {
	second -=1
	if (second == 0){
		clearInterval(counter);
	}
//display timer on HTML
$("#timer").html("Time Left: " + second + " seconds");

}


}); //END OF SCRIPT. DO NOT TOUCH