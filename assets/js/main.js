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
