console.log("hello world!"); //Just making sure it's linked appropriately.
$(document).ready(function(){
	var unanswered = 10; //number of unanswered questions at beginning.
	var correct = 0; // number of correctly answered question at beginning.
	var incorrect = 0; //number of incorrect at beginning.
	var count = 60, timer = setInterval(function() {
		$(".counter").html(count--);
		if (count < 1) {
			clearInterval(timer);
		}
	}, 1000);


});
