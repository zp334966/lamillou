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
          $(this)[0].nextSibling.remove();
          $(this)[0].nextSibling.remove();
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


function loginBox () {
  if ( $( "#login_box" ).length ) { 
    $('.login_bottom label[for="Login"]').text('E-mail');
  }
};
loginBox (); 

function showOrders() {
  if ( $( '#order_last_step #order_number_block.panel .shipping_information_title' ).length ){
    $('#order_last_step').addClass("order-show");
    $('.order-show .shipping_information_title').each(function() {      
          if ( $(this).text().indexOf("Status: oczek. na płatność") != -1 ){
            $(this).text("Status: Oczekuje na płatność");  
	    $(this).prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/pending_ico.svg'/>" );
          } 
    }); 
  };
};
showOrders();

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
  if ($( '#show_my_cart' ).length ) {  
    $(document).ready(function () {
      $( ".shopping-cart img" ).each(function() {
       if (! IsImageOk(this)) {
        this.src = "https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/placeholder.svg";
       };
      });
    });
  }
};
showMyCart();


function showOrderProductsBlock() {
  if ($( '#show_order_products_block' ).length ) {  
    $(document).ready(function () {
      $( "#show_order_products_block img" ).each(function() {
       if (! IsImageOk(this)) {
        this.src = "https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/placeholder.svg";
       };
      });
    });
  }		
};
showOrderProductsBlock();


function orderLastStep () {
  if ( $( "#order_last_step #shop_order_payment" ).length ) {
    $( "#order_last_step #shop_order_payment div.totals_summary div.table-row:nth-child(3)" ).addClass("sum"); 
    $('#shop_order_payment .totals_summary .table-row p').each(function() {      
          if ($(this).text() === "Wartość zamówienia:" ){
            $(this).text("RAZEM");              
          }  
          if ($(this).text() === "Cena wysyłki:" ){
            $(this).text("DOSTAWA");              
          } 
          if ($(this).text() === "Razem:" ){
            $(this).text("SUMA");              
          } 
    });  
  };  
  if ( $( "#order_last_step" ).length ) {
    $( "#order_last_step #form1 .buttons.panel .continue_with_order" ).clone().attr('id', 'button-with-price').insertAfter("#order_number_block") ;
    $( "#button-with-price" ).addClass("btn btn-lam btn-lam-blue");
    var price = $( "#order_last_step #shop_order_payment .totals_summary .sum p.nowrap strong" ).html();
    var withPrice = "ZAMAWIAM ZA " + price;
    $(document).ready(function(){ $( "#button-with-price" ).text(withPrice); });
    $( '#shop_order_addresses' ).detach().insertAfter( "#show_order_products_block" );
    $( '#shop_order_addresses' ).after("<div id='shop_order_delivery'></div>");
    $( '#shop_order_delivery' ).after("<div id='shop_order_payment_type'></div>");
    $( "#order_last_step #shop_order_payment .row div.col-xs-6:nth-child(1)" ).clone().appendTo("#shop_order_delivery");
    $( "#order_last_step #shop_order_payment .row div.col-xs-6:nth-child(2)" ).clone().appendTo("#shop_order_payment_type");
    $( "#shop_order_delivery div" ).removeClass("col-xs-6 col-sm-4 col-md-6 col-lg-4");
    $( "#shop_order_payment_type div" ).removeClass("col-xs-6 col-sm-4 col-md-6 col-lg-4");
    $('#order_last_step #show_order_products_block .item .money div.price.nowrap').each(function() {      
	     $(this).hide();
    });
    $('#order_last_step #show_order_products_block .item .money div.product_price_total').each(function() {      
	     var total = $(this).find("span").clone();
       $(this).html(total);
    }); 
    if  (! $( ".order-show" ).length ) {
      hideInHeader();
    }
    if (! $( "#order_number_block .shipping_information_title" ).length ) {  
      $( "#shop_order_payment" ).after("<div id='shop_order_payment_info'><p>" + 
        "Masz prawo do odstąpienia od umowy w terminie 14 dni. Koszty zwrotu zamówienia ponosi zamawiający.<br/>" +
        "<a href='/regulamin'>Przeczytaj więcej</a></p>" + 
        "<p>Złożenie zamówienia wiąże się z obowiązkiem zapłaty.</p></div>");
    }  
  };
  $('#order_last_step h4').each(function() {      
          if ($(this).text() === "Zamówione artykuły" ){
            $(this).text("TWOJE ZAMÓWIENIE");              
          }  
          if ($(this).text() === "Adres dostawy" ){
            $(this).text("DANE ADRESOWE");              
          } 
          if ( $(this).text().indexOf("Dostawa") != -1 ){
            $(this).text("SPOSÓB DOSTAWY");              
          } 
          if ( $(this).text().indexOf("Płatność") != -1 ){
            $(this).text("SPOSÓB PŁATNOŚCI");              
          } 
  });    
};
orderLastStep();


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

$( ".form_accept_checks" ).each(function() {
  var f = $(this).html();
  var f2 = f.replace("</label>", "</label><span>");
  var f3 = f2.replace("</a>.", "</a>.</span>");
  $( this ).html(f3);
}); 

function userProfile() {
  if ( $( '.panel_header.clearfix.cms_user_main' ).length ){
    $('.panel_header.clearfix.cms_user_main').hide();
  };	
  if ( $( '.cms_user_profile' ).length ){
    $('.cms_user_profile .cms_user_photo' ).hide();
    $('.cms_user_profile .cms_user_details h4' ).hide();
    $('.cms_user_profile div.cms_user_details p:nth-child(2)' ).hide();
    $('.cms_user_profile div.cms_user_details p:nth-child(3)' ).hide();
    var email = $('.cms_user_profile div.cms_user_details p:nth-child(3) strong' ).html();
    $('.cms_user_profile div.cms_user_details' ).prepend( "<h6>" + email + "</h6>" );
    $('.cms_user_profile div.cms_user_details' ).prepend( "<h5>TWOJE KONTO</h5>" );
    $('.cms_user_profile div.cms_user_details' ).prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/myprofile_ico.svg'/>" );

    $('.cms_user_profile .cms_user_details .btn-group a' ).removeClass("btn btn-default"); 
    $('.cms_user_profile .cms_user_details .btn-group a:nth-child(1)' ).addClass("edit-profile");   
    $('.cms_user_profile .cms_user_details .btn-group a:nth-child(2)' ).addClass("edit-address"); 
    $('.cms_user_profile .cms_user_details .btn-group a').each(function() {      
          if ( $(this).text().indexOf("Edycja profilu") != -1 ){
            $(this).text("Twój Profil");              
          } 
          if ( $(this).text().indexOf("Edycja adresów") != -1 ){
            $(this).text("Twój Adres");              
          } 
    });  
    $('.cms_user_profile .cms_user_details .btn-group .edit-profile').prepend( "<img class='icon' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/profile_ico.svg'/>" );  
    $('.cms_user_profile .cms_user_details .btn-group .edit-address').prepend( "<img class='icon' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/edit_adress_ico.svg'/>" );
    $('.cms_user_profile .cms_user_details .btn-group .edit-profile').append( "<img class='arrow' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/arrow_right.svg'/>" );  
    $('.cms_user_profile .cms_user_details .btn-group .edit-address').append( "<img class='arrow' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/arrow_right.svg'/>" );	  
    $("<div class='logout'></div>" ).appendTo(".cms_user_profile"); 
    $('.cms_user_profile .cms_user_details .btn-group a:nth-child(3)' ).detach().appendTo(".logout");
    $('.cms_user_profile .logout' ).prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/logout_ico.svg'/>" );
    $('.cms_user_profile .logout a').each(function() {      
          if ( $(this).text().indexOf("Wyloguj") != -1 ){
            $(this).text("Wyloguj się");              
          } 
    }); 
    $('.cms_user_profile h5').each(function() {      
          if ( $(this).text().indexOf("Zamówienia w sklepie") != -1 ){
            $(this).text("ZAMÓWIENIA");              
          } 
    }); 
    $('.cms_user_profile .btn.btn-default').each(function() {      
          if ( $(this).text().indexOf("Zobacz wszystkie") != -1 ){
            $(this).text("ZAŁADUJ WIĘCEJ"); 
	    $(this).removeClass('btn-default').addClass('btn-lam btn-lam-blue');
          } 
    });
  };
  if ( $( '.order_list.order_history' ).length ){
    $('.order_list.order_history .list-group-item .waiting_for_payment').each(function() {      
          if ( $(this).text().indexOf("Oczek. na płatność") != -1 ){
            $(this).text("Oczekuje na płatność");   
            $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/pending_ico.svg'/>" );
          } 
    });
    $('.order_list.order_history i.fa.fa-shopping-cart').each(function() {      
          $(this).hide();              
    });
    $('.order_list.order_history .list-group-item').each(function() {      
          var d = $(this).find("div").html();
          $(this).find("div").hide(); 
          $(this).prepend("<div class='status'>" + d + "</div>");
         
    });    
  };  
};
userProfile();

function editProfile() {
  if ( $( '.cms_edit_profile #user_avatar' ).length ){
    $( '.cms_edit_profile label[for="user_avatar"]' ).hide();
    $( '.cms_edit_profile #user_avatar' ).hide();  
    $( '.cms_edit_profile label[for="user_login"]' ).hide();
    $( '.cms_edit_profile #user_login' ).hide(); 
    $( '.cms_edit_profile label[for="user_date_of_birth"]' ).hide();
    $( '.cms_edit_profile #user_date_of_birth' ).hide(); 
    $( '.cms_edit_profile label[for="user_city"]' ).hide();
    $( '.cms_edit_profile #user_city' ).hide(); 
    $( '.cms_edit_profile .forum_options.btn' ).hide();
    $( '.cms_edit_profile #user_last_name' ).parent().detach().prependTo(".cms_edit_profile .edit_user .row:eq(1)"); 
    $( '.cms_edit_profile #user_first_name' ).parent().detach().prependTo(".cms_edit_profile .edit_user .row:eq(1)");
    $( '.cms_edit_profile .form_accept_checks [for="shop_order_personal_data_clause"]').parent().hide();
	  /*
    $( '.cms_edit_profile .form_accept_checks [for="shop_order_personal_data_clause"]').each(function() {      
      if ( $(this).next().text().indexOf("przetwarzanie moich danych osobowych") != -1 ){
        $(this).next().text("Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Ustawą z dnia 29.08.1997 r.");              
      } 
    });  */
    $( '.cms_edit_profile h3').each(function() {      
     if ( $(this).text().indexOf("Edycja profilu") != -1 ){
       $(this).text("Twój profil");              
     } 
    });   
  };
  if ( $( '.cms_edit_profile #address' ).length ){
    $( '.cms_edit_profile .form_accept_checks').each(function() {      
       $(this).hide();
    });   
    $( '.cms_edit_profile h3').each(function() {      
       if ( $(this).text().indexOf("Edycja profilu") != -1 ){
         $(this).text("Twój adres");              
       } 
    }); 
    $( '.cms_edit_profile .new_form h4').hide();  
    $( '.cms_edit_profile .label_inline label').each(function() {      
       if ( $(this).text().indexOf("Chcę fakturę VAT") != -1 ){
         $(this).text("Adres faktury VAT");              
       } 
    }); 
    setInterval(function(){
      if ( $(".label_inline .icheckbox_minimal-blue").hasClass('checked') ){
       $("#billing_address").show();
      } else {
        $("#billing_address").hide();     
      }
    }, 1);
  };   
  if ( $( '.cms_edit_profile' ).length ){
    $( '.cms_edit_profile .form_accept_checks [for="shop_order_marketing_clause"]').parent().hide();
    var back = $( '.cms_edit_profile .cms_buttons a' ).attr("href");
    var email;
    if ( $( '#user_shipping_addresses_attributes_0_email' ).length ){
      email = $( '#user_shipping_addresses_attributes_0_email').val();
    };
    if ( $( '#user_email' ).length ){
      email = $( '#user_email').val();
    };
    $( '.cms_edit_profile').prepend("<a class='cms_user_details' href='" + back + "' >" + 
       "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/myprofile_ico.svg'/>" +
       "<img class='arrow' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/arrow_left.svg'/><h5>TWOJE KONTO</h5>" +
       "<h6>" + email + "</h6></a>");
    $( '.cms_edit_profile .cms_buttons a').hide(); 
    $($( '.cms_edit_profile .cms_buttons input')[0].nextSibling).remove();
  };	
};
editProfile();

function thankForOrder () {
  if ( $( "#thank_you_for_ordering" ).length ) { 
    $('#thank_you_for_ordering h2').each(function() {      
          if ($(this).text() === "" ){
            $(this).hide();            
          }     
          if ( $(this).text().indexOf("Dziękujemy") != -1 ){
            $(this).text("DZIĘKUJEMY,");  
            $(this).after("<h4>Twoja zamówienie zostało przyjęte.<br/>Potwierdzenie zamówienia zostanie wysłane na podany numer telefonu.</h4>");
          } 
    });     
    $('#thank_you_for_ordering p').each(function() {       
          if ( $(this).text().indexOf("Szczegółowe informacje") != -1 ){
            $(this).hide();  
          } 
    });  
    $('#thank_you_for_ordering h4').each(function() {       
          if ( $(this).text().indexOf("PRZELEWY KRAJOWE") != -1 ){
            var p = $(this).html(); 
            p = p.replace(/\<br>/g, '');
            p = p.replace("PRZELEWY KRAJOWE", "<h2 class='dark-blue'>PRZELEW KRAJOWY</h2>");
            p = p.replace("nr rachunku:", "<h3><b class='dark-blue'>Numer rachunku</b></h3>");
            p = p.replace("30 1930 1419 2300 0347 6837 0002", "<h3 class='dark-blue'>30 1930 1419 2300 0347 6837 0002</h3>");
            p = p.replace("PRZELEWY ZAGRANICZNE W EURO", "<h2 class='dark-blue'>PRZELEW ZAGRANICZNY W EURO</h2>");
            p = p.replace("nr rachunku:", "<h3><b class='dark-blue'>Numer rachunku</b></h3>");    
            p = p.replace("46 1930 1419 2300 0347 6837 0005", "<h3 class='dark-blue'>46 1930 1419 2300 0347 6837 0005</h3><br/>");
            $(this).html(p); 
          } 
    });     
    var order = $('#thank_you_for_ordering .buttons a').attr('href');
    $('#thank_you_for_ordering .buttons .continue_shopping').hide();
    $('#thank_you_for_ordering .buttons').append("<div id='order-number'></div>");
    $('#thank_you_for_ordering .buttons').append("<div id='summary'></div>");
    $('#thank_you_for_ordering #order-number').load(order + ' #order_number_block h2');  
    $('#thank_you_for_ordering #summary').load(order + ' #shop_order_payment'); 
	  
    $( "#shop_order_payment" ).after("<div id='shop_order_payment_info'><p>" + 
        "Masz prawo do odstąpienia od umowy w terminie 14 dni. Koszty zwrotu zamówienia ponosi zamawiający.<br/>" +
        "<a href='/regulamin'>Przeczytaj więcej</a></p>" + 
        "<p>Złożenie zamówienia wiąże się z obowiązkiem zapłaty.</p></div>");     
  }
  return;
};
thankForOrder ();

function shopOrderForm () {
  if ( $( "#shop_order_form" ).length ) {
     $("#shop_order_delivery_form").on("click", "label", function(){
       var $position = $('#shop_order_delivery_form label').index($(this)); 
       $("#shop_order_delivery_form div").eq($position-1).find("ins").trigger( "click" );
     });
    $("#shop_order_delivery_form").on("mouseenter", "label", function(){
      var $position = $('#shop_order_delivery_form label').index($(this)); 
      $("#shop_order_delivery_form div").eq($position-1).find("ins").trigger( "mouseenter" );
    });
    $("#shop_order_delivery_form").on("mouseleave", "label", function(){
      var $position = $('#shop_order_delivery_form label').index($(this)); 
      $("#shop_order_delivery_form div").eq($position-1).find("ins").trigger( "mouseleave" );
    });
    $("#payment_kind_selector").on("click", "label", function(){
       var $position = $('#payment_kind_selector label').index($(this));
       $("#payment_kind_selector div").eq($position).find("ins").trigger( "click" );
    });    
    $("#payment_kind_selector").on("mouseenter", "label", function(){
       var $position = $('#payment_kind_selector label').index($(this));
       $("#payment_kind_selector div").eq($position).find("ins").trigger( "mouseenter" );
    }); 
    $("#payment_kind_selector").on("mouseleave", "label", function(){
       var $position = $('#payment_kind_selector label').index($(this));
       $("#payment_kind_selector div").eq($position).find("ins").trigger( "mouseleave" );
    });   	  
  }
};
shopOrderForm ();


function hideInHeader() {
  $("#nav-toggle").hide();
  $(".search-trigger").hide();
  $("#res-cart").hide();
};  
if ($( '#shop_order_form' ).length ){
  hideInHeader();
}; 


/** Placeholder **/
function IsImageOk(img) {
    if (!img.complete) {
        return false;
    }
    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
        return false;
    }
    return true;
};
/*********************/

$( document ).ready(function() {
  if ($( '.field_with_errors .icheckbox_minimal-blue' ).length ) {
    $( '.field_with_errors .icheckbox_minimal-blue' ).addClass("obligatory");
  } 
});


$( "[for=shop_order_edit_shipping_address]" ).click(function() {
    $("#shop_order_show_shipping_address").hide();
    $("#shop_order_edit_shipping_address_form").slideDown(500)    
}); 


