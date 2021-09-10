$(document).ready(function() {
	$('#pagepiling').pagepiling();
	$(".navbar").hide()
	$(".footer").hide()
});

$(".hpb").hover(function () {
		// over
	$(".section2").css("background-color" , 'rgba(0,0,0,0.5)');
	}, function () {
		$(".section1").css("transition(0.4)")
	}
);