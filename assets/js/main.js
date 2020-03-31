$(document).ready(function(){

	
	$("#mobile-header-action .burger .menu-button i").click(function(){
		var check_if_open = $(this).parent().hasClass("active");
		
		if(check_if_open == true){
			$(this).removeClass("fa-window-close").addClass("fa-bars");
			$(this).parent().removeClass("active");
			$("#mobile-header-menu").slideUp();
		}else{
			$(this).addClass("fa-window-close").removeClass("fa-bars");
			$(this).parent().addClass("active");
			$("#mobile-header-menu").slideDown();
		}
	});
	
	
	
});



$(window).on('resize scroll', function() {
			
	if($("#your-element").isInViewport()) {
		//do smth	
	}

});

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	
	return elementBottom > viewportTop && elementTop < viewportBottom;
};


function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}


function validatePhone(phone){
	/*
	XXXX-XXX-XXX
	XXXX.XXX.XXX
	XXXX XXX XXX 
	*/
	if(phone.match(/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)){
		return true;
	}else{
		return false;
	}
}
