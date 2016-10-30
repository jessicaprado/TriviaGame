$(document).ready(function() {
var answers = {
	one: "Number 4 Privet Drive!",
	two: "Dobby",
};
//time variables
var second = 20;
var counter = setInterval(timer, 1000);
//questions variables
var correct = 0;
var incorrect = 0; 


$(".buttons").on("click", function(){
 	var userGuess = $(this);
	var checkGuess = userGuess.data("value");

	if (checkGuess == true) {
		correct++;
		$(".content").html("<p>You are correct!</p>"); 
    } else if (checkGuess == false) {
    	incorrect++
        $(".content").html("<p>Sorry! The correct answer was " + answers.one + "!</p>"); 
    };	
    });


function timer () {
	second -=1
	if (second == 0){
		clearInterval(counter);
	}
//display timer on HTML
$("#timer").html("Time Left: " + second + " seconds");
};//timer function

}); //END OF SCRIPT. DO NOT TOUCH