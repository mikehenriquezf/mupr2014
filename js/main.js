$(document).ready(function (){

	// Slider
	if ($('#slider-area').length) {
	$('#slider-area')
	.after('<div id="nav">') 
	.cycle({ 
		fx:     'fade', 
		speed:  1000,
		pause: 1, 
		timeout: 3000,
		next:   '#next',
		prev:   '#prev',
		pager: '#nav' 
	});
	}


	// $(window).scroll(function (){
	// 	if($('.sticky').css('width') > '1000px'){
	// 		$('.title-area .name').removeClass('esconde');
	// 	}else{
	// 		$('.title-area .name').addClass('esconde');
	// 	}
	// });

	$('.subir').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
		
});