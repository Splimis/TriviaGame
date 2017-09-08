//hides the questions before the start button is pressed

$('#populus').hide();

//start button reveals the quiz questions and starts timer

$('#start').on('click', function() {
	$('#populus').show();

	$(this).hide();

			var count = 60;
			var counter = setInterval(timer, 1000);

		function timer() {
			count--;
			if (count < 1) {
				clearInterval(counter);
				$('#invis').css('visibility', 'visible');
				$('#result').html("You have run out of time.");
			}
			$('#timer').text(count + ' seconds');
		}
});

//done button reveals the results of your answers.

$('#Done').on('click', function() {

	// questions variables assigned value according to radio value
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0

	// counts correct answers
	if (question1 === 'a3') {
		correct ++;
	}
	if (question2 === 'a5') {
		correct ++;
	}
	if (question3 === 'a7') {
		correct ++;
	}
	if (question4 === 'a10') {
		correct ++;
	}
	// result sheet and stop timer
		$('#invis').css('visibility', 'visible');
		$('#result').html("You got " + correct + " correct.");
		$('#timer').hide();
	});