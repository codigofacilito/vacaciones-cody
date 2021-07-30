$(document).ready(function(){
	$('.venobox').venobox({
		border     : '10px',
	  	numeratio  : true,
	  	infinigall : true,
	  	titleBackground: '#333',
	  	closeBackground: '#333',
	  	titleColor: '#fff',
	  	spinColor: '#fff',
	  	spinner: 'three-bounce',
	  	numerationPosition: 'bottom'
	}); 
});

$(function() {
	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 70) {
	        $(".bg-oscuro").addClass("active-navbar");
	    } else {
	        $(".bg-oscuro").removeClass("active-navbar");
	    }
	});
});

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});
