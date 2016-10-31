$(document).ready(function() {
//time variables
var second = 20;
var counter = setInterval(timer, 1000);
//questions variables
var currentQuestion = 0;
var correct = 0;
var incorrect = 0; 
var endOfQuiz = false;
var selection = [];

var quizQuestion1 = {
	question: "Where does Harry live?",
	options: ["Number 5 Privet Drive", "Number 4 Privet Drive", "Number 7 Privet Drive", "Number 3 Privet Drive"],
	trueOrFalse: [false, true, false, false],
	answer: "Number 4 Privet Drive"
}; 

var quizQuestion2 = {
	question: "How many points is a Snitch worth?",
	options: ["100", "450", "150", "300"],
	trueOrFalse: [false, false, true, false],
	answer: "150"
}

var quiz = [quizQuestion1, quizQuestion2];

function reset () {
	var currentQuestion = 0;
	var correct = 0;
	var incorrect = 0; 
	var endOfQuiz = false;
}; //reset end

function displayQuestion() {
	var question = quiz[currentQuestion].question;
	var questionPlacement = $(".question").html(question);
	
	//puts questions into text.
	$(questionPlacement).html(question);

	//loop to display questions on HTML

	for (var i = 0; i < 4; i++) {

	var guess = $("<button>");	
	
	guess.addClass("btn btn-primary selection");
	guess.attr({
		"data-options": quizQuestion1.trueOrFalse[i]	
	});
	guess.text(quiz[currentQuestion].options[i]);
	$(".options").append(guess);	
	};
}; //displayQuestion end

function clear() {
	$(".question").empty();
	$(".options").empty();
	$(".question").empty();

}

function nextQuestion () {
	currentQuestion++;
	displayQuestion();
}
//Calling out displayQuestion function
	displayQuestion();
	
// Start game
$("button").on("click", function(){
	var userGuess = $(this);
	var checkGuess = userGuess.data("options");	

	if (checkGuess === true) {
		correct++
	
	$("<p>Correct!</p>").appendTo(".result");
	$(".selection").hide();
	setTimeout(function(){
		nextQuestion();		
		}  , 5000 );
	} else {
	incorrect++;
	$(".question").hide();
	$(".options").hide();
	$("<p>Nope! The correct answer was " + rightAnswer + "</p>").appendTo(".result");
	}
	


			
	
	
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