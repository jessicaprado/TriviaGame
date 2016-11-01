$(document).ready(function() {
var second = 20;
var counter = setInterval(timer, 1000);
//questions variables
var correct = 0;
var incorrect = 0; 
unanswered = 0;
var endOfQuiz = false;
var index = 0;

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
	};

var quizQuestion3 = {
	question: "What is the Diadem of Ravenclaw ?",
	options: ["An earring", "A necklace", "A ring", "A tiara"],
	trueOrFalse: [false, false, false, true],
	answer: "A tiara"
	};

var quiz = [quizQuestion1, quizQuestion2, quizQuestion3];

function reset () {
	clear();
	var index = 0;
	var correct = 0;
	var incorrect = 0; 
	var endOfQuiz = false;
	displayQuestion();
	}; //reset end

function displayQuestion() {
	timer();
	if(endOfQuiz === false) {
	var questionhtml = quiz[index].question;
	var questionPlacement = $(".question").html(questionhtml);
	
	//puts questions into text.
	$(questionPlacement).html(questionhtml);

	//loop to display questions on HTML
	for (var i = 0; i < 4; i++) {
		var guess = $("<button>");	
		guess.addClass("btn btn-primary selection");
		guess.attr({
			"data-options": quiz[index].trueOrFalse[i]	
			});
		guess.text(quiz[index].options[i]);
		$(".options").append(guess);	
		};

	check();
	}}; //displayQuestion end

function check (){
	$("button").on("click", function(){	
	stopTimer();
	var userGuess = $(this);
	var checkGuess = userGuess.data("options");	

	if ((checkGuess === true) && (endOfQuiz === false)) {
		right();
	} else if((checkGuess === false) && (endOfQuiz === false)) {	
		wrong();			
	} 
 	});
	};

function right() {
	correct++
	$(".result").show();	
	$("<p id='correct'>Correct!</p>").appendTo(".result");
	$(".selection").hide();
	$(".question").hide();
	index++;
	setTimeout(nextQuestion, 5000);		
	}

function wrong() {
	var rightAnswer = quiz[index].answer;
	incorrect++;	
	$(".result").show();
	$("<p id='nope'>Nope! The correct answer was " + rightAnswer + "</p>").appendTo(".result");	
	$(".selection").hide();
	$(".question").hide();
	index++;
	setTimeout(nextQuestion, 3000);	
	}

function clear() {
	$(".question").empty();
	$(".options").empty();
	$(".selection").empty();
	$(".question").show();
	$(".options").show();
	$(".selection").show();
	$(".result").empty();
	}

function nextQuestion () {	
	if (index > (quiz.length - 1)) {
	endOfQuiz = true;
	setTimeout(displayScore, 3000);
	} else if (endOfQuiz === false) {
	clear()	
	resetTimer();
	displayQuestion();
	$(".result").hide();
	}};

function displayScore() {
	stopTimer()
	$("#nope").hide();
	$("#correct").hide();
	$(".result").show();	
	$("<p>Final Score</p><p>Correct: " + correct + "<p>Incorrect: " + incorrect + "</p><p>Unanswered:" + unanswered + "</p>").appendTo(".result");
	$("<button class = 'reset'> Reset </button>").appendTo(".result");
	$(".reset").on("click", function() {
		reset();
	});
	}	
// Start game
displayQuestion();


function timer () {
	second -=1
	if (second == 0){
		clearInterval(counter);
		unanswered++;
		wrong();

	}
//display timer on HTML
$("#timer").html("Time Left: " + second + " seconds");
};//timer function


function resetTimer() {
	second = 20;	
	counter = setInterval(timer, 1000);
	//display timer on HTML
	$("#timer").html("Time Left: " + second + " seconds");
}

function stopTimer() {
	clearInterval(counter);
	}






}); //END OF SCRIPT. DO NOT TOUCH