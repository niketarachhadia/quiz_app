$(document).ready(function(){
	var queIndex = 0;
	var correctCount = 0;
	var inCorrectCount = 0;
	$(".start-quiz-button").click(function(){
		$(".quiz-page").show();
		$(".start-page").hide();
		displayQuestion(queIndex);
	});

	$(".next-button").click(function(){
		queIndex += 1;
		displayQuestion(queIndex);
	});

	var quiz = Object.create(Quiz);

	$("input").change(function(event) {
		var selectedValue = $("input:checked").val();
		console.log(selectedValue);
  	});
	
	var displayQuestion = function(index){
		var currentQuestionNo = index + 1;
		$(".current-question-no").text(currentQuestionNo);
		$(".question").text(quiz[index].question);

	 	var options = quiz[index].choices;
	 	$(".radio-toolbar").empty();
	 	$.each(options,function(key,value){
			$(".radio-toolbar").append('<input type="radio" name="radio" value = '+ value +'>'+ value +'<br><br>');
		});

		$("input").click(function() {
		var selectedValue = $("input:checked").val();
		console.log(selectedValue);
		var answer = quiz[index].correct_answer;
			if(selectedValue === answer){
				$(".feedback-message").text("Correct Answer!!");
				 correctCount++;
				$(".correct").text(correctCount);
				$(".in-correct").text(inCorrectCount);
			}else{
				$(".feedback-message").text("Oops..Incorrect Answer!");
				inCorrectCount++;
				$(".in-correct").text(inCorrectCount);
				$(".correct").text(correctCount);
			}

		});
		
	};
});
