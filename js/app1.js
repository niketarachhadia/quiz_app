$(document).ready(function(){
	var queIndex;
	var correctCount = 0;
	var inCorrectCount = 0;
	var quiz;
	$(".start-quiz-button").click(function(){
		correctCount = 0;
		inCorrectCount = 0;
		queIndex = 0;
		$(".correct").text(correctCount);
		$(".in-correct").text(inCorrectCount);
		quiz = Object.create(Quiz);
		$(".quiz-page").show();
		$(".start-page").hide();
		displayQuizQue(queIndex);
	});
	 $(".next-button").click(function(){
	 	loadNext();
	});
	$(".try-again-button").click(function(){
		$(".result-page").hide();
		$(".start-page").show();
	});
	var loadNext = function(){
		$(".feedback-message").text("");
		selectedValue = "";
		queIndex ++;
		if(queIndex < 10){
			displayQuizQue(queIndex);
		}else{
			$(".quiz-page").hide();
			$(".result-page").show(function() {
				$(".final-correct").text(correctCount);
			});
		}
	};

	var displayQuizQue = function(queIndex){
		
		var options = quiz[queIndex].choices;
		var currentQuestionNo = queIndex + 1;
		var question = quiz[queIndex].question;
		var answer = quiz[queIndex].correct_answer;

		setQuestion(question);
		setRadioChoice(options,answer);
		
		setCurrentQuestionNumber(currentQuestionNo);
		
	};

	var setCurrentQuestionNumber = function(currentQuestionNo){
		$(".current-question-no").text(currentQuestionNo);
	};

	var setQuestion = function(question){
		$(".question").text(question);
	};

	var setRadioChoice = function(options,answer){
		$(".radio-toolbar").empty();
		$.each(options,function(key,value){
			$(".radio-toolbar").append('<input type="radio" name="radio" value = '+ value +'>'+ value +'<br><br>');
		});
		$("input").click(function() {
			var selectedValue = $("input:checked").val();
			if(selectedValue === answer){
				
				correctCount++;
				$(".correct").text(correctCount);
				$(".in-correct").text(inCorrectCount);
				
			}else{
				$(".feedback-message").text("Oops..Incorrect Answer! The correct answer is :"+answer);
				inCorrectCount++;
				$(".in-correct").text(inCorrectCount);
				$(".correct").text(correctCount);
				}
		});
		
	};
});
