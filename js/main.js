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
	
	//DECLARE VARS
	var pueblo = '';
	var fbid = '';
	var fbname = '';
	var fbemail = '';
	var fbgender = '';
	var fbhometown = '';
	var fblocation = '';

    $('.vote_candidata_thumb').on('click', function (){
<<<<<<< HEAD
		
    	pueblo = $(this).children('.pueblo').val();
    	console.log(pueblo);
		
		// ---------------------------------------------------------------------------------------------------------------------------------------------------------

        // listen for and handle auth.statusChange events
        FB.Event.subscribe('auth.statusChange', function (response) {
			
		if(response.status == 'connected') {	
			
            if (response.authResponse) {
                // user has auth'd your app and is logged into Facebook
                FB.api('/me', function (me) {
                    if (me.name) {

                        fbid = me.id;
                        fbname = me.name;
                        fbemail = me.email;
                        fbgender = me.gender;
						if (me.hometown) {
							fbhometown = me.hometown.name;
						}
						if (me.location) {
							fblocation = me.location.name;
						}

                        //document.getElementById('auth-displayname').innerHTML = fbname;
                        //document.getElementById('auth-email').innerHTML = fbemail;
                        //document.getElementById('auth-id').innerHTML = fbid;
                        //document.getElementById('auth-gender').innerHTML = fbgender;
                        //document.getElementById('auth-hometown').innerHTML = fbhometown;
                        //document.getElementById('auth-location').innerHTML = fblocation;
						
						//document.getElementById('modalHead2').innerHTML = 'Listo! Tu voto fue enviado exitosamente.';
						//document.getElementById('modalP2').innerHTML = 'Gracias por participar en la selección de<br />Miss Primera Hora de MUPR 2014';
						
						document.getElementById('modalHead2').innerHTML = 'Confirmar voto por Miss ' + pueblo;
						document.getElementById('modalP2').innerHTML = '';

                    }
                })
                document.getElementById('auth-loggedout').style.display = 'none';
                document.getElementById('auth-loggedin').style.display = 'block';
				//document.getElementById('modalHead2').innerHTML = 'Confirmar voto por Miss ' + pueblo;
            } else {
                // user has not auth'd your app, or is not logged into Facebook
                document.getElementById('auth-loggedout').style.display = 'block';
                document.getElementById('auth-loggedin').style.display = 'none';
				document.getElementById('modalHead2').innerHTML = 'Hubo un error';
				document.getElementById('modalP2').innerHTML = 'Error: necesitas autorizar<br />este app para poder votar';
            }
			
		}
			
        });

        $("#auth-logoutlink").click(function () { FB.logout(function () { window.location.reload(); }); });
		$("#resultslink").click(function () { window.location.replace("resultados.html"); });

		
		// ---------------------------------------------------------------------------------------------------------------------------------------------------------
		
=======
    	var pueblo = $(this).children('.pueblo').val();
    	
    	$('.registro_votar h2').html('Reg&iacute;strate antes de votar');
		$('.registro_votar p').html('Para realizar tu voto necesitas autenticarte con Facebook');
		$('.fb_connect').show();

>>>>>>> 0a819ad75857b7148c534aa090ba749f3af26e26
    	$('.overlay').css('opacity', 0);
    	$('.registro_votar').css('opacity', 0);
    	
    	var dialogTop = ($(window).height() - $('.registro_votar').height() ) / 2 + $(window).scrollTop();
		var dialogLeft = ($(window).width() - $('.registro_votar').width()) / 2 + $(window).scrollLeft(); 

		
		$('.overlay').show();
		$('.registro_votar').css({top:dialogTop, left:dialogLeft}).show();

		$('.overlay').fadeTo('slow', 0.9);
		$('.registro_votar').fadeTo('slow', 1);
		
		
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				document.getElementById('modalHead2').innerHTML = 'Confirmar voto por Miss ' + pueblo;
				document.getElementById('modalP2').innerHTML = '';
			}
		});

    });

<<<<<<< HEAD
	$("#postButton").click(function(){  
		
		document.getElementById('postButton').innerHTML = 'Procesando... por favor espere';
		document.getElementById('postResponse').innerHTML = 'Procesando... por favor espere';
		
		//DEBUG ALERT/LOG
		//alert('user clicked on post div.\n\nfbid: ' + fbid + '\nfbname: ' + fbname + '\nfbemail: ' + fbemail + '\nvoteFor: ' + pueblo);
		console.log('event: user clicked on post div.\n\nfbid: ' + fbid + '\nfbname: ' + fbname + '\nfbemail: ' + fbemail + '\nvoteFor: ' + pueblo);
		
		var formData = 'n='  + fbname + '&e=' + fbemail + '&fbid=' + fbid + '&g=' + fbgender + '&ht=' + fbhometown + '&loc=' + fblocation + '&v=' + pueblo + '&submit=true'; //Name value Pair
		console.log(formData);

		/*
		$.post("http://localhost:65229/submitVote.aspx", formData, function (data, textStatus, jqXHR) {
				//data - response from server
				//alert(textStatus + ': ' + data);
				console.log(textStatus + ': ' + data);
			}).fail(function (jqXHR, textStatus, errorThrown) {
				alert(textStatus);
				console.log(textStatus);
		});
		*/
		
		$.post("submitVote.php", formData, function (data, textStatus, jqXHR) {
			
				//data - response from server
				//alert(textStatus + ': ' + data);
				console.log('success|textStatus: '+textStatus + '|data: ' + data);
				
				if (data==1) {
					
					document.getElementById('postResponse').style.display = 'block';
                	document.getElementById('postButton').style.display = 'none';
					
					document.getElementById('closeLink').style.display = 'none';
					document.getElementById('auth-logoutlink').style.display = 'block';
					
					document.getElementById('modalHead2').innerHTML = '&iexcl;Confirmado!';
					document.getElementById('postResponse').innerHTML = 'Su voto fue confirmado. Gracias por participar.';
					
				} else if (data==0) {
					
					document.getElementById('postResponse').style.display = 'block';
                	document.getElementById('postButton').style.display = 'none';
					
					document.getElementById('closeLink').style.display = 'block';
					document.getElementById('auth-logoutlink').style.display = 'none';
					
					document.getElementById('modalHead2').innerHTML = '&iexcl;Este voto no es elegible!';
					document.getElementById('postResponse').innerHTML = 'Su voto no fue añadido. Solo se<br />acepta una participación por usuario.';
					
				}
				
				
			}).fail(function (jqXHR, textStatus, errorThrown) {
				
				//alert(textStatus);
				console.log('fail|textStatus: '+textStatus);
				document.getElementById('postResponse').style.display = 'block';
               	document.getElementById('postButton').style.display = 'none';
				document.getElementById('modalHead2').innerHTML = '&iexcl;Hubo un error!';
				document.getElementById('postResponse').innerHTML = 'Hubo un problema enviando su voto ... el voto no fue añadido. Por favor trate nuevamente.';
				
		});
		
		
		

		
	});
=======
    $('.registro_votar img').on('click', function(){
    	FB.login(function(response) {
	        if (response.authResponse) {
	            console.log('Authenticated!');
	            checkUser();

	        } else {
	            console.log('User cancelled login or did not fully authorize.');
	        }
	    });


    });

	function checkUser() {

		$('.fb_connect').hide();
		$('.loading').show();

		FB.api('/me', function(response) {
			var fbid, name, email, gender, hometown, location;

			fbid = response.id; //fbid
			name = response.name; //n
			email = response.email; //e
			gender = response.gender; //g
			hometown = response.hometown.name; //ht
			location = response.location.name; //loc

			$.ajax({
				type: "GET",
				url: "db_handler.php",
				data: "fbid="+fbid+"&n="+name+"&e="+email+"&g="+gender+"&ht="+hometown+"&loc="+location,
				success: function(status){
					// console.log("fbid="+fbid+"&n="+name+"&e="+email+"&g="+gender+"&ht="+hometown+"&loc="+location);
					if(status == 1){
						document.cookie= "vote_status=voted";
						$('.registro_votar').fadeTo('fast', 0, function(){
							$('.overlay').fadeTo('slow', 0, function (){
								$('.registro_votar').hide();
								$('.overlay').hide();

								// Show results
								$('.textLight').html('Resultado de votaciones').css({'margin-left':'290px'});
								$('#vote_candidatas').fadeTo('slow', 0, function(){
									$('#vote_candidatas').hide();
									$('#results_candidatas').show().css('opacity', 0);
									$('#results_candidatas').fadeTo('slow', 1);	
								});
								
							});
						});
					}else{
						document.cookie= "vote_status=voted";

						$('.loading').fadeTo('slow', 0, function(){
							$('.loading').hide();
						});
						$('.registro_votar h2').html('Lo sentimos...');
						$('.registro_votar p').html('Ya usted excedió la cantidad de votos permitidos.');
					}	
				}
			});
		});
	}

>>>>>>> 0a819ad75857b7148c534aa090ba749f3af26e26

    $('.registro_votar a').on('click', function(){
    	voted_status = getCookie("vote_status");

    	if(voted_status == 'voted'){
    		$('.textLight').html('Resultado de votaciones').css({'margin-left':'290px'});
    		$('#vote_candidatas').hide();
    		$('#results_candidatas').show();
    	}

    	// CERRAR MODAL
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




