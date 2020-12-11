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
	
	
	$("#ckb1").change(function(){
		
		if($(this).prop('checked') === true){
			$(".buton-inscrie").prop('disabled', false);
		}else{
			$(".buton-inscrie").prop('disabled', true);
		}
		
	});
	
	$(".buton-inscrie").click(function(){
		//var inputs = $("#formular").serialize();
		
		
		var enabled_state_message = $(this).data("enabled-state");
		var disabled_state_message = $(this).data("disabled-state");
		
		
		
		
		
		//if($(this).hasClass("active")){
		//	return false;	
		//}
		
		
		var input_name = $("#input_nume").val();
		var input_prename = $("#input_prenume").val();
		var input_telefon = $("#input_telefon").val();
		var input_email = $("#input_email").val();
		var input_mesaj = $("#input_mesaj").val();
		
		
		
		var error_message = "Completați tot formularul:\n\n";
		var count_error = 0;
		
		

		if(input_name == ''){
			error_message += "- Introduceți nume\n";
			count_error++;
		}
		
		if(input_prename == ''){
			error_message += "- Introduceți prenume\n";
			count_error++;
		}
		
		
		if(input_email == ''){
			error_message += "- Introduceți adresă email\n";
			count_error++;
		}else{
			if(!validateEmail(input_email)){
				error_message += "- Introduceți adresă email validă!\n";
				count_error++;
			}
		}
		
		
	
		
		if(input_telefon == ''){
			error_message += "- Introduceți telefon\n";
			count_error++;
		}else{
			if(!validatePhone(input_telefon)){
				error_message += "- Introduceți nr. telefon valid (E.x: 07xxxxxxxx)\n";
				count_error++;
			}
		}
		
		if(input_mesaj == ''){
			error_message += "- Introduceți mesaj\n";
			count_error++;
		}
		
		
		

		if($("#ckb1").prop('checked') !== true){
			error_message += "- Trebuie să fiți de acord cu politica de confidențialitate\n";
			count_error++;
		}
		
		
		
		if(count_error > 0){
			alert(error_message);
		}else{
			
			
			var form_data = new FormData();
			form_data.append('nume', input_name);
			form_data.append('prenume', input_prename);
			
			form_data.append('telefon', input_telefon);
			form_data.append('email', input_email);
			form_data.append('mesaj', input_mesaj);
			
			
		
		
			$(this).prop('disabled', true).text(disabled_state_message);
			
			var button = $(this);
					
						
			

			$.ajax({
				url: landing_page_path+'/trimite.php',
				type: "POST",
				data: form_data,
				dataType: 'json',
				//dataType: 'html',
				contentType: false, 
				processData: false,
				success: function (data) {
					

					if(data.type == 'error'){	
						alert(data.message);
						
						
						button.prop('disabled', false).text(enabled_state_message);
						
					}else{
						
						
						
						$("#container-formular").slideUp('normal',function(){
							
						    $("html,body").animate({
						        scrollTop: $("#formular").offset().top
						    }, 500,function(){
							    
							    $("#success").fadeIn();
							    
						    });
							
						});
					}
				}
			
			});

			
		}
		
		
		
	
	});
	
	
});



$(window).on('resize scroll', function() {
			
/*
	if($("#your-element").isInViewport()) {
		//do smth	
	}
*/

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


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

