$(document).ready(function() {
//time variables
var second = 20;
var counter = setInterval(timer, 1000);
//questions variables
var currentQuestion = 0;
var correct = 0;
var incorrect = 0; 
var endOfQuiz = false;
var selection

var quizQuestions = [{
	question: "Where does Harry live?",
	options: ["Number 5 Privet Drive", "Number 4 Privet Drive", "Number 7 Privet Drive", "Number 3 Privet Drive"],
	answer: 1
}, {
	question: "How many points is a Snitch worth?",
	options: ["100", "450", "150", "300"],
	answer: 2
}]

function reset () {
	var currentQuestion = 0;
	var correct = 0;
	var incorrect = 0; 
	var endOfQuiz = false;
}; //reset end

function displayQuestion() {
	var question = quizQuestions[currentQuestion].question;
	var choices = quizQuestions[currentQuestion].options.length;
	var questionPlacement = $(".quiz").find(".question");
	var choicePlacement = $(".quiz").find(".options")
	//puts questions into text.
	$(questionPlacement).html(question);

	//loop to display questions on HTML
	for (i = 0; i < choices; i++) {
	selection = quizQuestions[currentQuestion].options[i];
	$("<p><button class='buttons' value='" + i + "'>" + selection + "</button>").appendTo(choicePlacement);	
	}
	console.log(i)
}; //displayQuestion end


	displayQuestion();
	console.log(selection)


$(".buttons").on("click", function(){
	userGuess = $(this);
	var checkGuess = userGuess.data("value")
	console.log(checkGuess);
	
 	//var userGuess = $(this.selection);	
	//var checkGuess = userGuess.data("value");
	//console.log(userGuess)

	//if (checkGuess == true) {
		//correct++;
		//$(".content").html("<p>You are correct!</p>"); 
   // } else if (checkGuess == false) {
   // 	incorrect++
  //      $(".content").html("<p>Sorry! The correct answer was " + answers.one + "!</p>"); 
  //  };	
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