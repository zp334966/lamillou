$(document).ready(function(){
    $('.cms_register .cms_buttons input').each(function() {      
      if ($(this).val() === "Zarejestruj się" ){
        $(this).val("Stwórz konto");   
      }     
    }); 
    $('.cms_register h3').each(function() {      
      if ($(this).text() === "Rejestracja" ){
        $(this).text("Stwórz konto");              
      }     
    });  
    $('.cms_register .cms_buttons input').each(function() {      
      $(this)[0].nextSibling.remove();
      $(this)[0].nextSibling.remove();
    }); 
            
    $('.login_bottom .cms_buttons input').each(function() {      
      if ($(this).val() === "Zaloguj" ){
        $(this).val("Zaloguj się");   
      }     
    }); 
    
    $('.login_bottom .forgot').each(function() {      
      $('.login_bottom .cms_buttons').before("<div class='forgot'><a class='forgot' href='/user/forgot_password'>Zapomniałeś hasła?</a></div>");
      $(this).remove();
    });
      
    $('.login_bottom .sign-up').each(function() {      
      $(this).html("<a href='/signup' class='btn btn-lam btn-lam-dark-blue'>Stwórz konto</a><div class='note'></div>");    
    });   
    
    $(function(){
      $('#login').focus();
    });

    $('.login_bottom .form-group label').each(function() {      
      $(this).removeClass( "sr-only" ).addClass( "form-label" );
    });

    $('.login_bottom .form-group input').each(function() {      
      $(this).attr("placeholder", "");
    });
    $('.login_bottom .cms_buttons').after("<p class='separate-buttons'>LUB</p>");
    
    $('.restore_password label').each(function() {      
      if ($(this).text() === "Podaj e-mail lub login" ){
        $(this).text("Email");   
      }  
    });
    $('.restore_password input.submit.btn').attr("value", "Prześlij");
    $('.restore_password input.submit.btn')[0].nextSibling.remove();
    $('.restore_password input.submit.btn')[0].nextSibling.remove();
    $('.restore_password input.submit.btn').after("<p class='cancel'>Lub kliknij <a href='/login'>anuluj.</a></p>");
    $('.restore_password .header h2').after("<p class='help'>Podaj adres e-mail użyty podczas zakładania konta.</p>");  
    
    //thank you for ordering
    $('#thank_you_for_ordering').children()[0].remove();
    $('#thank_you_for_ordering h2').text("DZIĘKUJEMY,");
    $('#thank_you_for_ordering h2').after("<h4>Twoja zamówienie zostało przyjęte.<br/>Potwierdzenie zamówienia zostanie wysłane na podany numer telefonu.</h4>");
    $('#thank_you_for_ordering h4')[1].remove();
    $('#thank_you_for_ordering h4').after("<h4><br/>Prosimy o wpłatę na podane konto:<br/></h4><h2 class='dark-blue'>PRZELEW KRAJOWY</h2><h3><b class='dark-blue'>Numer rachunku</b></h3><h3 class='dark-blue'>30 1930 1419 2300 0347 6837 0002</h3><h2 class='dark-blue'>PRZELEW ZAGRANICZNY W EURO</h2><h3><b class='dark-blue'>Numer rachunku</b></h3><h3 class='dark-blue'>46 1930 1419 2300 0347 6837 0005</h3><br/><h4>W tytule przelewu prosimy o podanie numeru zamówienia.</h4><br/>");
  

});



         
