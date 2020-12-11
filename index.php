<?
$landing_page_path = 'https://casarusu.ro/landing-craciun';	
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Title of the document</title>
	
	<meta name="viewport" content= "width=device-width, initial-scale=1.0">
	
	<link rel="stylesheet"  href="<?=$landing_page_path?>/assets/css/flexboxgrid.min.css" type="text/css" media="all" /> 
	<link rel="stylesheet"  href="<?=$landing_page_path?>/assets/css/normalize.css" type="text/css" media="all" /> 
	<link rel="stylesheet"  href="<?=$landing_page_path?>/style.css" type="text/css" media="all" />
	<link rel="stylesheet"  href="<?=$landing_page_path?>/responsive.css" type="text/css" media="all" />
	
	<script src="https://kit.fontawesome.com/79a08b9526.js" crossorigin="anonymous"></script>
	
</head>

<body>
	
	
	<!-- MOBILE MENU START -->
	<div class="hide-desktop">
		
		<div id="mobile-header-action">
			
			<div class="wrapper">
				<div class="logo text-left">
					your logo here
				</div><div class="burger text-right">
					
					<div class="menu-button">
						<i class="fas fa-bars"></i>
					</div>
					
				</div>
				
			</div>
			
		</div>
		<div id="mobile-header-menu" class="hide" style="border: 1px solid;">
			<div class="wrapper">
				
				your menu links here
				
			</div>
		</div>
	
	</div>
	<!-- MOBILE MENU  END -->
	
			
			
	
	

	<section id="formular">
		<div class="container-fluid">
			<div class="wrapper">
				
				
				<div id="success" style="display: none;">
					<div class="row center-xs">
						<div class="col-lg-12">
							<div class="title text-center">
								Mulțumim 
							</div>
						</div>
					</div>				
					
					
					<div class="row center-xs">
						<div class="col-lg-6">
							<div class="descriere">
								Cererea dvs. a fost înregistrată  
							</div>
						</div>
					</div>
				</div>
				
				<div id="container-formular">
					
					
					
					<div class="row center-xs">
						
						<div class="col-xs-12 col-sm-12 col-lg-7 text-left">
							
							
				
				
								<div class="formular_body">
									
									
									<div class="row">
										<div class="col-xs-12 col-sm-6">
											
											<div class="group-input">
												<div class="label">
													Nume
												</div><div class="input">
													<input type="text" placeholder="" class="input" id="input_nume">
												</div>
											</div>
											
										</div>
										<div class="col-xs-12 col-sm-6		">
												
											<div class="group-input">
												<div class="label">
													Prenume
												</div><div class="input">
													<input type="text" placeholder="" class="input" id="input_prenume">
												</div>
											</div>
											
										</div>
									</div>
									
									
									<div class="row">
										<div class="col-xs-12 col-sm-6">
											
											<div class="group-input">
												<div class="label">
													E-mail
												</div><div class="input">
													<input type="text" placeholder="" class="input" id="input_email">
												</div>
											</div>
											
										</div>
										<div class="col-xs-12 col-sm-6">
												
											<div class="group-input">
												<div class="label">
													Număr de telefon
												</div><div class="input">
													<input type="text" placeholder="07xxxxxxxx" class="input" id="input_telefon">
												</div>
											</div>
											
										</div>
									</div>
									
									
									<div class="row center-xs">
										<div class="col-xs-12">
											
											<div class="group-input">
												<div class="label">
													Mesaj
												</div><div class="input">
													<textarea rows="4" id="input_mesaj"></textarea>
												</div>
											</div>
											
										</div>
									</div>
									
									
									<div class="row center-xs">
										<div class="col-xs-12 col-sm-9 col-lg-8">
											
											<div class="group-input">
												<label class="input ckb">
													Am citit și sunt de acord cu <a href="	" target="_blank">politica de confidențialitate</a>.
													<input type="checkbox" name="" id="ckb1"> 
													<span class="checkmark"></span>
												</label>
											</div>
											
										</div>
									</div>
									
									
									
									
									
										
									
									
									
								
									<div style="margin-top: 20px;">
									
										<button class="buton-inscrie" disabled="" data-enabled-state="TRIMITE" data-disabled-state="ASTEPTATI">TRIMITE</button>
										
									</div>
									
									
									
									
								</div>
								
						
							
							
							
							
						</div>
					</div>
				
				
				</div>
					
			</div>
		</div>
	</section>
		
	
	
	<script>
		var landing_page_path = '<?=$landing_page_path;?>';	
	</script>
	<script src="<?=$landing_page_path?>/assets/js/jquery.min.js"></script>
	<script src="<?=$landing_page_path?>/assets/js/main.js"></script>
	
</body>
</html> 
