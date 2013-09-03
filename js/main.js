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


	$(window).scroll(function (){
		if($('.sticky').css('width') > '1000px'){
			$('.name').html('<img src="img/logo_small_sticky_menu.png">');
			$('.sticky').addClass('navShadow');
		}else{
			$('.name').html('');
			$('.sticky').removeClass('navShadow');
		}

	});

	$('.subir').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
		
});