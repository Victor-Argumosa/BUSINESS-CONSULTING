$(document).ready(funtion(){
	
		$('.fa-bars').click(funtion() {
			$(this).toggleClass ('fa-times);
			$('.navbar').toggleClass('nav-toggle')
		})
		
	$(window).on('scroll load', funtion() {
		
		$('.fa-bars').removeClass('fa-times');
		$('.navbar').romoveClass('nav-toggle');
		
		$('section')..each(funtion() {
			var id = $(this).attr('id')
			var height = $(this).height();
			var offset = $(this).offset().top -200;
			var top = $(window).scrollTop();
			if(top>= offset && top < offset + height)
				$('.navbar ul li a').removeClass('active')
			$('.nav').find('[href="#'+id+'"]').addClass('active');
			
		});
		
	});
	

});


			
			