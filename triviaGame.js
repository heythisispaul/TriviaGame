console.log("hello world!"); //Just making sure it's linked appropriately.
$(document).ready(function(){
	var unanswered = 10; //number of unanswered questions at beginning.
	var correct = 0; // number of correctly answered question at beginning.
	var incorrect = 0; //number of incorrect at beginning.
	var count = 60 // starting time

	var timer = setInterval(function() {
		$(".counter").html(count-- + " seconds remaining."); //displays value of count which is being decremented at each interval.
		if (count === 0) {
			clearInterval(timer); // If the count goes below 1 it stops counting.
			// alert("Game over!\nNumber correct: " + correct + "\nNumber incorrect: " + incorrect + "\nNumber unanswered: " + unanswered);
		}
	}, 1000);


	//I can probably just reuse this callback function for all 10 questions by passing in an ID for "question1."
	$(".question1").on("click", function() { //when something in question 1 is pressed
		unanswered--; //decrease number of unanswered questions.
		$(".question1").prop('disabled', true); //adds disabled property to all this question's buttons.
		if($(".question1").val("true")) { //If the button had a value of true - add to correct.
			correct++;
			console.log(correct);
		} else { //This currently does nothing for some reason.
			incorrect++;
			console.log(incorrect);
		}
	})

});
