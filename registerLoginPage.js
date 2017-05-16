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
          


});



         
