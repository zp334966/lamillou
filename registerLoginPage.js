/**** Funkcje zmieniajace pliki html ***/

function cmsRegister () {
  if ( $( ".cms_register" ).length ) { 
    $(document).ready(function(){
        $('form#new_user.new_user #user_login').parent().hide();
        $('.field_with_errors label[for="user_login"]').parent().hide();
        $('form#new_user.new_user').submit(function() { 
           var email = $('form#new_user.new_user #user_email').val();
          $('form#new_user.new_user #user_login').val(email);
        });        
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
          $(this)[0].nextSibling.attr('style','display:none !important');
          $(this)[0].nextSibling.attr('style','display:none !important');
        });     
    });
  }    
  return;
};
cmsRegister ();


function loginBottom () {
  if ( $( ".login_bottom" ).length ) { 
    $(document).ready(function(){
        $('.login_bottom input').each(function() {      
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
        $('#registration_link').each(function() {      
          if ($(this).text() === "Zarejestruj się" ){
            $(this).text("Stwórz konto");   
          }     
        }); 
    });
  }    
  return;
};
loginBottom ();


function restorePassword () {
  if ( $( ".restore_password" ).length ) { 
    $(document).ready(function(){
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
    });
  }    
  return;
};
restorePassword ();

function thankForOrder () {
  if ( $( "#thank_you_for_ordering" ).length ) { 
    $('#thank_you_for_ordering').children()[0].remove();
    $('#thank_you_for_ordering h2').text("DZIĘKUJEMY,");
    $('#thank_you_for_ordering h2').after("<h4>Twoja zamówienie zostało przyjęte.<br/>Potwierdzenie zamówienia zostanie wysłane na podany numer telefonu.</h4>");
    $('#thank_you_for_ordering h4')[1].remove();
    $('#thank_you_for_ordering h4').after("<h4><br/>Prosimy o wpłatę na podane konto:<br/></h4><h2 class='dark-blue'>PRZELEW KRAJOWY</h2><h3><b class='dark-blue'>Numer rachunku</b></h3><h3 class='dark-blue'>30 1930 1419 2300 0347 6837 0002</h3><h2 class='dark-blue'>PRZELEW ZAGRANICZNY W EURO</h2><h3><b class='dark-blue'>Numer rachunku</b></h3><h3 class='dark-blue'>46 1930 1419 2300 0347 6837 0005</h3><br/><h4>W tytule przelewu prosimy o podanie numeru zamówienia.</h4><br/>");
    $('#thank_you_for_ordering p').remove();
    $('#thank_you_for_ordering .buttons a').css('display', 'none');
    var order = $('#thank_you_for_ordering .buttons a').attr('href');
    $('#thank_you_for_ordering .buttons').append("<div id='order-number'></div>");
    $('#thank_you_for_ordering .buttons').append("<div id='summary'></div>");
    $('#thank_you_for_ordering #order-number').load(order + ' #order_number_block h2');  
    $('#thank_you_for_ordering #summary').load(order + ' #shop_order_payment');  
  }
  return;
};
thankForOrder ();

function loginBox () {
  if ( $( "#login_box" ).length ) { 
    $('.login_bottom label[for="Login"]').text('E-mail');
  }
};
loginBox (); 

function emptyCart() {
  var b = $( '.page-heading h3' ).text();
  if (b === 'Koszyk jest pusty') {
    $('.page').attr("id","empty-cart");
    $( '#empty-cart .page-heading h3' ).text('TWOJE ZAMÓWIENIE');
    $( '#empty-cart .page-heading h3' ).after("<img src='https://cdn.rawgit.com/zp334966/lamillou/f45ff1bf/assets/koszyk.svg'/>");
    $( '#empty-cart .page-heading img' ).after("<h5>W Twoim koszyku nie ma jeszcze żadnych produktów.</h5>");  
    $('#empty-cart .page-heading .btn').attr('style','display:none !important');
    $('#empty-cart br').remove();
    $('#empty-cart .page-heading h2').hide();
  }
};

function showMyCart () {
  if ($( '#cart-totals' ).length ) {  
    $( document ).ready(function() {
      $( ' #cart-totals .btn' ).detach().insertAfter( "#cart-totals" );
      $( ' #show_my_cart .btn' ).text("Zamawiam");
    });
  }     
};
showMyCart();


if ($( '.page-heading h3' ).length ){
  $(document).ready(emptyCart);
  $("html").ajaxStop(emptyCart);
};

if ($( '#order-steps' ).length ){
  $( document ).ready(function() {
    if ($("#order-steps").css("display") != "none" ) {
      $(".page").css("border-top", "1px solid #D0D9E5");
    }
  });   
};


function hideInHeader() {
  $("#nav-toggle").hide();
  $(".search-trigger").hide();
  $("#res-cart").hide();
};  
if ($( '#shop_order_form' ).length ){
  hideInHeader();
}; 

$( ".form_accept_checks" ).each(function() {
  var f = $(this).html();
  var f2 = f.replace("</label>", "</label><span>");
  var f3 = f2.replace("</a>.", "</a>.</span>");
  $( this ).html(f3);
});
$( document ).ready(function() {
  if ($( '.field_with_errors .icheckbox_minimal-blue' ).length ) {
    $( '.field_with_errors .icheckbox_minimal-blue' ).addClass("obligatory");
  } 
});


$( "[for=shop_order_edit_shipping_address]" ).click(function() {
    $("#shop_order_show_shipping_address").hide();
    $("#shop_order_edit_shipping_address_form").slideDown(500)    
}); 

