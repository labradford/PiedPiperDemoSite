
//animate loading gif
$(window).load(function() {
	$("#preloader").fadeOut(2000);
});	
		

$(document).ready(function() {

	//Navigation Animation
	$(".nav a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 300, function(){

           // when done, add hash to url
           // (default click behaviour)
           //window.location.hash = this.hash;
         });

    });
	
				//scroll to top button
				function backToTop (){
				//ID of back to top button
				var chaser = $('#chaser');

				//variable to total height of window
				var windowHeight = $(window).height();

				//function that will run when window scrolls
				$(window).scroll(function(){
					//if statement to see if scrollTop is >= Window/2
				if ($(window).scrollTop() >= windowHeight / 2){
					chaser.fadeIn();						
				} else {
					chaser.hide();
				};
				//scrolls back to top when button is clicked
				chaser.on('click', function(){
					$('html, body').stop(true,false).animate({scrollTop:'0px'},800);
				});

			});

			};

			backToTop();

	

	//NEWSLETTER SUBSCRIBE FORM
	//Get the form
	var form = $('#ajax-contact');

	//Get messages div
	var formMessage = $('#form-message');

	//Setup an event listener on the form
	$(form).submit(function(e){
		
		//stop browser from submitting form
		e.preventDefault();
		//serialize the data
		var formData = $(form).serialize();
		//Submit form using ajax
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response){
			//remove error class and add a success class to messages div
			$(formMessage).removeClass('error');
			$(formMessage).addClass('success');
			//Set message on page
			$(formMessage).text(response);
			//Clear input fields
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		}).fail(function(data){
			//remove success class and add a fail class to messages div
			$(formMessage).removeClass('success');
			$(formMessage).addClass('error');
			if (data!== ''){
				//Set message on page
				$(formMessage).text(data);
			} else {
				$(formMessage).text('Oops! Something went wrong! Try again.');
			}	
		});
	});

	//IMAGE HOVER EFFECT

	$(function(){
		$('#score').adipoli({
		'startEffect' : 'overlay',
		'hoverEffect' : 'foldLeft'
		});
		$('#russ').adipoli({
		'startEffect' : 'overlay',
		'hoverEffect' : 'foldLeft'
		});
		$('#nest').adipoli({
		'startEffect' : 'overlay',
		'hoverEffect' : 'foldLeft'
			});	
		//$('#meet').adipoli({
		//'startEffect' : 'overlay',
		//'hoverEffect' : 'sliceDown'
		//	});	
	 });

	

    	//IMAGE GALLERY
	document.getElementById('links').onclick = function (event) {
	event = event || window.event;
	var target = event.target || event.srcElement,
	link = target.src ? target.parentNode : target,
	options = {index: link, event: event},
	links = this.getElementsByTagName('a');
	blueimp.Gallery(links, options);
	};

	//NEXT FUNCTION

});
//end document.ready function	