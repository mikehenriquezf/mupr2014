$(document).ready(function (){

	// Slider
	if ($('#slider-area').length) {
		$('#slider-area').after('<div id="nav">') .cycle({ 
			fx:     'fade', 
			speed:  1000,
			pause: 1, 
			timeout: 3000,
			next:   '#next',
			prev:   '#prev',
			pager: '#nav' 
		});
	}


	size_li = $("#thumbs li").size();
    x=12;
    $('#thumbs li:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+6 <= size_li) ? x+6 : size_li;
        $('#thumbs li:lt('+x+')').show();
    });

    $('.vote_candidata_thumb').on('click', function (){
    	var pueblo = $(this).children('.pueblo').val();
    	console.log(pueblo);
    	$('.overlay').css('opacity', 0);
    	$('.registro_votar').css('opacity', 0);
    	
    	var dialogTop = ($(window).height() - $('.registro_votar').height() ) / 2 + $(window).scrollTop();
		var dialogLeft = ($(window).width() - $('.registro_votar').width()) / 2 + $(window).scrollLeft(); 

		
		$('.overlay').show();
		$('.registro_votar').css({top:dialogTop, left:dialogLeft}).show();

		$('.overlay').fadeTo('slow', 0.9);
		$('.registro_votar').fadeTo('slow', 1);

    });

    $('.registro_votar a').on('click', function(){
    	
		$('.registro_votar').fadeTo('fast', 0, function(){
			$('.overlay').fadeTo('slow', 0, function (){
				$('.registro_votar').hide();
				$('.overlay').hide();
			});

		});
    });

    $(window).resize(function(){
    	var dialogTop = ($(window).height() - $('.registro_votar').height() ) / 2 + $(window).scrollTop();
		var dialogLeft = ($(window).width() - $('.registro_votar').width()) / 2 + $(window).scrollLeft(); 

		$('.registro_votar').css({top:dialogTop, left:dialogLeft});

    });


	$(window).scroll(function (){
		if($('.sticky').css('width') > '1000px'){
			$('.name').html('<img src="img/logo_small_sticky_menu.png">');
			$('.sticky').addClass('navShadow');
		}else{
			$('.name').html('');
			$('.sticky').removeClass('navShadow');
		}

		var dialogTop = ($(window).height() - $('.registro_votar').height() ) / 2 + $(window).scrollTop();
		var dialogLeft = ($(window).width() - $('.registro_votar').width()) / 2 + $(window).scrollLeft(); 

		$('.registro_votar').css({top:dialogTop, left:dialogLeft});

	});

	$('.subir').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
		
});