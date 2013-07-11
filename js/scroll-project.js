$(document).ready(function(){
	
	$('#nav-work').bind('click', function(e){
		
		e.preventDefault();
		
		var scrollPosition = $('#work').offset().top;
		
		$('html, body').animate({
			scrollTop: scrollPosition
		}, 1000 );
		
	});
	
	$('#nav-about').bind('click', function(e){
		
		e.preventDefault();
		
		var scrollPosition = $('#about').offset().top;
		
		$('html, body').animate({
			scrollTop: scrollPosition
		}, 1000 );
		
	});
	
});


