<!DOCTYPE html>

<!--Store example TESTING-->

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact</title>
    <!-- Bootstrap -->
    <link href="bootstrap-4.4.1.css" rel="stylesheet">
	 <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2N7JDS3NS"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y2N7JDS3NS');
</script>
  

  </head>
  <body>
    
<!--END MENU	  -->
	  

	  
<!--TESTING PHP EMAIL SEND-->
<?php
// (A) PROCESS STATUS
$error = "";

// (B) VERIFY CAPTCHA
$secret = "6Le82EwiAAAAAH4DNYU_1E1MDPDkWsV8Zx8zrykh"; // CHANGE THIS TO YOUR OWN!
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST["g-recaptcha-response"];
$verify = json_decode(file_get_contents($url));
if (!$verify->success) { $error = "Invalid captcha"; }

// (C) SEND MAIL
if ($error=="") {
  $mailTo = "info@bodemai.nl"; // ! CHANGE THIS TO YOUR OWN !
  $mailSubject = "Testing cart options email";
  $mailBody = "";
  foreach ($_POST as $k=>$v) { 
    if ($k!="g-recaptcha-response") { $mailBody .= "$k: $v\r\n"; }
  }
  if (!@mail($mailTo, $mailSubject, $mailBody)) { $error = "Failed to send mail"; }
}
?>	  
	  


	  
	  
<!--#Content	  -->
 <div class="container my-5">
<!--		      <hr class="my-5">-->
      <div class="row">
<h3>Hartelijk dank voor uw bericht. We zullen u zo snel mogelijk contacteren!</h3> 	  
</div>	
</div>	

	  
	  
	  
	  
<!--		DIENSTEN v2 -->	
<section>
	<div class="container my-5">
		      <hr class="my-5">
<!--	First four image row-->
	<div class="card-deck">
          <div class="card">
              <a class="text-dark" href="quickscan.html"><img class="card-img-top" src="images/bodemai_quickscan_square26.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Quickscan</h4>
                <p class="card-text">Een quickscan geeft u snel inzicht in de kwaliteit van de bodem</p>
                
              </div>
			</a>
            </div>

          <div class="card">
              <a class="text-dark" href="historischonderzoek.html"><img class="card-img-top" src="images/bodemai_historisch_square25.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Historisch bodemonderzoek (NEN 5725)</h4>
                <p class="card-text">Een historisch onderzoek gaat na of bodemverontreiniging aanwezig is</p>
              </div>
				  </a>
            </div>


          <div class="card">
              <a class="text-dark" href="Verkennendbodemonderzoek.html"><img class="card-img-top" src="images/bodemai_square3.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Verkennend bodemonderzoek (NEN5740)</h4>
                <p class="card-text">Een verkennend onderzoek (schone grond verklaring), stelt vast of op een bepaalde locatie vervuiling aanwezig met boring</p>
              </div>
				  </a>
            </div>

		 <div class="card">
              <a class="text-dark" href="Huis_kopen_met_vervuilde_grond.html"><img class="card-img-top" src="images/bodemai_huiskopen_square24.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Huis kopen met vervuilde grond</h4>
                <p class="card-text">Een schone grond verklaring is nodig bij het kopen van een huis of stuk grond. Daarnaast heeft u een onderzoeksplicht</p>
              </div>
				  </a>
            </div>

		
        </div>
<!--		END image row-->
<!--	Second four image row-->
	<div class="card-deck">
          <div class="card">
              <a class="text-dark" href="Milieukundig bodemonderzoek.html"><img class="card-img-top" src="images/bodemai_square14.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Milieukundig bodemonderzoek</h4>
                <p class="card-text">Plan opstellen waarin wordt beschreven hoeveel boringen er gedaan moeten worden en op welke plekken</p>
                
              </div>
			</a>
          </div>

          <div class="card">
              <a class="text-dark" href="partijkeuringen.html"><img class="card-img-top" src="images/bodemai_square22.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Partijkeuringen (AP04)</h4>
                <p class="card-text">Onderzoekt naar de kwaliteit en toepassings-mogelijkheden van grond, welke vervoerd dient te worden na bijvoorbeeld graafwerkzaamheden</p>
              </div>
				  </a>
            </div>


          <div class="card">
              <a class="text-dark" href="asbestonderzoek.html"><img class="card-img-top" src="images/bodemai_square23.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Asbestonderzoek in grond (NEN5707) en in puin (NEN5897)</h4>
                <p class="card-text">Onderzoek bij puinhoudend grond met een inspectie en en monsterneming door een deskundige</p>
              </div>
				  </a>
            </div>

		 <div class="card">
              <a class="text-dark" href="nulsituatie_eindsituatie_bodemonderzoek.html"><img class="card-img-top" src="images/bodemai_square1.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Nulsituatie of eindsituatie bodemonderzoek</h4>
                <p class="card-text">Onderzoek bij de oprichitng, verandering of beëindiging van een inrichting of bij de beëindiging van het opslaan van  chemicaliën en van vloeibare brandstof</p>
              </div>
				  </a>
            </div>

		
        </div>
<!--		END image row-->
<!--	Third four image row-->
	<div class="card-deck">
		<div class="card">
              <a class="text-dark" href="asfaltonderzoek.html"><img class="card-img-top" src="images/bodemai_square27.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Asfaltonderzoek</h4>
                <p class="card-text">Onderzoek naar PAK in asfalt voor mogelijkheden tot het afvoeren en/of hergebruiken van asfalt</p>
              </div>
			</a>
            </div>

          <div class="card">
              <a class="text-dark" href="tankonderzoek.html"><img class="card-img-top" src="images/bodemai_square17.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Tank onderzoek (NEN5740/BOOT)</h4>
                <p class="card-text">Onderzoek naar ondergrondse opslagtank op uw perceel voordat ze verwijdert kunnen worden</p>
              </div>
				  </a>
            </div>

          <div class="card">
              <a class="text-dark" href="naderonderzoek.html"><img class="card-img-top" src="images/bodemai_square19.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Nader bodemonderzoek (NTA 5755)</h4>
                <p class="card-text">Nader onderzoek kan de ernst en omvang van de aangetoonde verontreinigingen bepalen en advies geven over eventuele bodem sanering</p>
              </div>
				  </a>
            </div>

		 <div class="card">
              <a class="text-dark" href="pfasgrond.html"><img class="card-img-top" src="images/bodemai_square13.jpg"
                   alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">PFAS Grond</h4>
                <p class="card-text">Partijen onderzoeken op PFAS en advies over de veranderende regelgeving</p>
              </div>
				  </a>
            </div>
		
        </div>
<!--		END image row-->
	</div>
</section>
<!--		/DIENSTEN  -->	
	

<!--	Vraag informatie aan-->
<!--    <section>-->
      <div class="container my-5 text-dark ">
<!--		        <hr class="my-5">-->
        <div class="row">
          <div class="col-12 text-center">
            <h1>Wat kunnen we voor u betekenen?</h1>
            <p>Ontvang vrijblijvend informatie over onze diensten</p>
			  <a href="offerte.html" class="btn btn-outline-orange" role="button">Vraag nu informatie aan</a>
			  
          </div>
        </div>
		  	<hr class="my-5">
      </div>
<!--    </section>-->
	
	
<!--	FOOTER-->

<footer class="pt-4 my-md-5 border-top bg-dark">



	
    <div class="section">
      <div class="container-fluid
">
        <div class="row">

<!-- Footer bedrijfsinfo -->			
          <div class="col-md-3 col-12 text-light text-center">
<!--            <h3 >BodemAI</h3>-->
            <div class="">
			  <img style="margin-left:-10px;height: 60px;" src="images/logo_bodemai_logo_white3.png">
			</div>
			 <br>


          </div>			
			
<!--Footer Wie zijn we?			-->
          <div class="col-md-3 col-12 text-light">
<!--            <h3 class="text-center">Wie zijn we?</h3>-->
            			<div class="text-orange icon icon_phone footer_contact-icon icon_phone">
			  <img style="margin-right:15px;display:inline-block;height: 20px; width: 20px;" src="images/icon-email.svg">
              <a class="text-orange" href="mailto:info@bodemai.nl">Email: info@bodemai.nl</a><br>
			</div>
			<div class="text-orange icon icon_phone footer_contact-icon icon_phone">
			  <img style="margin-right:15px;display:inline-block;" src="images/icon-phone.svg">
			  <a class="text-orange" href="tel:+06 42 000 000"><span class="icon icon_phone footer_contact-icon icon.icon_phone"></span>Tel: 06 42 000 000</a>
				</div>
			  			 <br>
			  <ul class="list-unstyled text-small">
						<li class="text-muted"><a style="color:#fd7e14;" href="contact.php">CONTACT</a></li>
				        </ul>
			</div>
			
			
<!-- Footer: Links -->
		<div class="col-md-3 col-12 text-light">
          <h5 class="text-uppercase">BodemOnderzoek</h5>

          <ul class="text-small text-orange">
			
			<li class="text-muted"><a class="text-orange" href="quickscan.html">Quickscan Bodem</a></li>
			<li class="text-muted"><a class="text-orange" href="historischonderzoek.html">Historisch bodemonderzoek (NEN 5725)</a></li>
			<li class="text-muted"><a class="text-orange" href="Verkennendbodemonderzoek.html">Schoon Grond Verklaring (NEN5740)</a></li>
			<li class="text-muted"><a class="text-orange" href="Verkennendbodemonderzoek.html">Verkennend bodemonderzoek (NEN5740)</a></li>
			<li class="text-muted"><a class="text-orange" href="Huis_kopen_met_vervuilde_grond.html">Huis kopen met vervuilde grond</a></li>
			<li class="text-muted"><a class="text-orange" href="Milieukundig bodemonderzoek.html">Milieukundig bodemonderzoek</a></li>  
			<li class="text-muted"><a class="text-orange" href="partijkeuringen.html">Partijkeuringen (AP04)</a></li>
			<li class="text-muted"><a class="text-orange" href="asbestonderzoek.html">Asbestonderzoek in grond (NEN5707) en in puin (NEN5897)</a></li>
			<li class="text-muted"><a class="text-orange" href="nulsituatie_eindsituatie_bodemonderzoek.html">Nulsituatie of eindsituatie bodemonderzoek</a></li>
			<li class="text-muted"><a class="text-orange" href="asfaltonderzoek.html">Asfaltonderzoek</a></li>
			<li class="text-muted"><a class="text-orange" href="tankonderzoek.html">Tank onderzoek (NEN5740/BOOT)</a></li> 
			<li class="text-muted"><a class="text-orange" href="actualisatieonderzoek.html">Actualisatie bodemonderzoek</a></li> 
			<li class="text-muted"><a class="text-orange" href="naderonderzoek.html">Nader bodemonderzoek (NTA 5755)</a></li>  
			<li class="text-muted"><a class="text-orange" href="pfasgrond.html">PFAS Grond</a></li>
			<li class="text-muted"><a class="text-orange" href="secondopinion.html">Second opinion</a></li> 
			  
			  
			  
        </ul>
		</div>
			
			
		<div class="col-md-3 col-12 text-light">
          <h5 class="text-uppercase">BodemAI</h5>

          <ul class="text-small text-orange">
			
			<li class="text-muted"><a class="text-orange" href="offerte.html">Offerte Bodemonderzoek</a></li>
		  <li class="text-muted"><a class="text-orange" href="werkenbij.html">Werken Bij</a></li>
			  <li class="text-muted"><a class="text-orange" href="overons.html">Over Ons</a></li>
		  <li class="text-muted"><a class="text-orange" href="contact.php">Contact</a>
          </li>  
			
        </ul>
		</div>
          
        </div>
      </div>
    </div>
    <hr>
		
<!--	COOKIES FOOTER		-->
<!--
		<section>
      		<div class="container">

			 <ul class="list-group list-group-horizontal">
				  <li class="list-group-item-light flex-fill"><a href="" class="text-dark">DISCLAIMER</a></li>
				  <li class="list-group-item-light flex-fill"><a href="" class="text-dark">PRIVACY STATEMENT</a></li>
				  <li class="list-group-item-light flex-fill"><a href="#!" class="text-dark">COOKIEBELEID</a></li>
				  <li class="list-group-item-light flex-fill"><a href="#!" class="text-dark">CONTACT</a></li>
			</ul>
			</div>
		</section>
-->

		<!--	COOKIES FOOTER     -->		
		<section>
 <div class="container" style="border-radius: 0;">
        <div class="row">
          <div class="col-sm-12 col-md-8 text-light">
            <p>Copyright 2022 © BodemAI. All rights reserved.</p>
          </div>
  
			<div class="col-sm-12 col-md-4 text-small">
			 <ul class="list-group list-group-horizontal list-group-flush" style="font-size: .675rem;">
<!--		     <ul class="list-group list-group-horizontal footer-links">-->
				  <li class="list-group-item flex-fill bg-transparent"><a href="disclaimer.html" class="text-light">DISCLAIMER</a></li>
				  <li class="list-group-item flex-fill bg-transparent"><a href="privacy.html" class="text-light">PRIVACY STATEMENT</a></li>
				  <li class="list-group-item flex-fill bg-transparent"><a href="cookies.html" class="text-light">COOKIEBELEID</a></li>
				 
			</ul>
			</div>
	 
	       </div>
      </div>
		</section>
		
			
	
<!--    <footer class="text-center"    small-12 medium-8 columns column-grid no-side-padding>-->
<!--		small-12 medium-4 columns column-grid no-side-padding-->
     
    </footer>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="jquery-3.4.1.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="popper.min.js"></script>
    <script src="bootstrap-4.4.1.js"></script>
	<script src="/js/slick.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>



	
  </body>
</html>
