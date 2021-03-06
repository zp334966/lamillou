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
        /*
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
        */
    	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
		console.log("ie");
		var $element = $('.cms_register .cms_buttons input');
		$element.nextAll().remove();
		$('.cms_register .cms_buttons input').parent().each(function() {
			var p = $(this).html(); 
			p = p.replace("lub", "");
			$(this).html(p);
		});
	}
	else {
		console.log("not ie");
		$('.cms_register .cms_buttons input').each(function() {      
		  $(this)[0].nextSibling.remove();
		  $(this)[0].nextSibling.remove();
		});
	}
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
          $('.login_bottom .cms_buttons').before("<div class='forgot'><a class='forgot' href='/user/forgot_password'>Forgotten password?</a></div>");
          $(this).remove();
        });

        $('.login_bottom .sign-up').each(function() {      
          $(this).html("<a href='/signup' class='btn btn-lam btn-lam-dark-blue'>Register</a><div class='note'></div>");    
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
        $('.login_bottom .cms_buttons').after("<p class='separate-buttons'>OR</p>");   
        $('#registration_link').each(function() {      
          if ($(this).text() === "Zarejestruj się" ){
            $(this).text("Register");   
          }     
        }); 
	//w htmlu jest 15px important
	$("#login_box input[type=submit].submit").attr('style', 'margin-top: 30px !important');
    });
  }    
  return;
};
loginBottom ();


function restorePassword () {
  if ( $( ".restore_password" ).length ) { 
    $(document).ready(function(){
        $('.restore_password label').each(function() {      
          if ($(this).text() === "Enter e-mail account or login" ){
            $(this).text("Email");   
          }  
        });
        $('.restore_password input.submit.btn').attr("value", "Recover password");
	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
		console.log("ie");
		var $element = $('.restore_password input.submit.btn');
		$element.nextAll().remove();
		$('.restore_password input.submit.btn').parent().each(function() {
			var p = $(this).html(); 
			p = p.replace("lub", "");
			$(this).html(p);
		});
	}
	else {
		$('.restore_password input.submit.btn')[0].nextSibling.remove();
        	$('.restore_password input.submit.btn')[0].nextSibling.remove();
	}
        $('.restore_password input.submit.btn').after("<p class='cancel'>Or <a href='/login'>cancel.</a></p>");
        $('.restore_password .header h2').after("<p class='help'>Please enter the email address you used to create your account.</p>");     
    });
  }    
  return;
};
restorePassword ();


function loginBox () {
  if ( $( "#login_box" ).length ) { 
    $('.login_bottom label[for="Login"]').text('Email');
  }
};
loginBox (); 

function showOrders() {
  if ( $( '#order_last_step #order_number_block.panel .shipping_information_title' ).length ){
    $('#order_last_step').addClass("order-show");
    $('.order-show .shipping_information_title').each(function() {      
          if ( $(this).text().indexOf("Waiting for payment") != -1 ){
	    $(this).prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysy%C5%82ki/oczekiwanie_ico.svg'/>" );
          } 
    }); 
  };
};
showOrders();

function emptyCartElements() {
    $('#show_my_cart .extra-products').hide();
    $('.page').attr("id","empty-cart");
    $( '#empty-cart .page-heading.center h3' ).after("<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Koszyk/koszyk.svg'/>");
    $( '#empty-cart .page-heading img' ).after("<h5>Your cart is empty.</h5>" + extraProducts(false));  
    //$('#empty-cart br').remove();
    $("#empty-cart br").each(function() {
	    if(!$(this).parents('div.extra-products').length) {
		    $(this).remove(); 
	    } 
    });
};
function emptyCart() {
  var b = $( '.page-heading h3' ).text();
  if (b === 'Your cart is empty') {
    emptyCartElements();   
    $('#empty-cart .page-heading h3:first' ).text('Your cart');
    $('#empty-cart .page-heading .btn').attr('style','display:none !important');
    $('#empty-cart .container').attr("id","show_my_cart");
  }
};
$(document).ready(function(){
  $('.delete.cart_product_remove_button').on( "click", function() {
    console.log('usuniecie');
    window.setTimeout(function(){
      if ( !$( '#show_my_cart .real-item' ).length ) { 
        emptyCartElements();
        $('#empty-cart #cart-totals').hide();  
        $('#show_my_cart a.btn').hide(); 
        console.log('nie ma');
       } else {
        console.log('jest');
       }
    }, 600);
  });
});


function showMyCart () {
  if ($( '#cart-totals' ).length ) {  
    $( document ).ready(function() {
      $( ' #cart-totals .btn' ).detach().insertAfter( "#cart-totals" );
	$( ' #show_my_cart .btn' ).each(function() {
		if($(this).text() == "Przejdź do kasy") {
			$(this).text("Zamawiam");
		}
		if($(this).text() == "Continue shopping") {
			$(this).hide();
		}
	});
      //$( '#show_my_cart .btn' ).first().text("Zamawiam");
    });
  } /*
  if ($( '#show_my_cart' ).length ) {  
    $(document).ready(function () { 
      $( ".shopping-cart img" ).each(function() {
       if (! IsImageOk(this)) {
        this.src = "https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/placeholder.svg";
       };
      });
    });
  } */
};
showMyCart();

/*
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
*/

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
    var withPrice = "BUY FOR " + price;
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
      $( ".buttons.panel" ).after("<div id='shop_order_payment_info'><p>" + 
        "You can return goods within 30 days.<br/>" +
        "<a href='/regulations'>Read more</a></p>" + 
        "<p>You are liable to pay for your purchase.</p></div>");
    }  
  };
  $('#order_last_step h4').each(function() {      
          if ($(this).text() === "Zamówione artykuły" ){
            $(this).text("YOUR ORDER");              
          }  
          if ($(this).text() === "Adres dostawy" ){
            $(this).text("SHIPPING");              
          } 
          if ( $(this).text().indexOf("Dostawa") != -1 ){
            $(this).text("DELIVERY");              
          } 
          if ( $(this).text().indexOf("Płatność") != -1 ){
            $(this).text("PAYMENT");              
          } 
  });    
};
orderLastStep();


if ($( '.page-heading h3' ).length ){
  $(document).ready(emptyCart);
  $("html").ajaxStop(emptyCart);
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
    $('.cms_user_profile div.cms_user_details' ).prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/myprofile_ico.svg'/>" );

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
    $('.cms_user_profile .cms_user_details .btn-group .edit-profile').prepend( "<img class='icon' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/profile_ico.svg'/>" );  
    $('.cms_user_profile .cms_user_details .btn-group .edit-address').prepend( "<img class='icon' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/edit_adress_ico.svg'/>" );
    $('.cms_user_profile .cms_user_details .btn-group .edit-profile').append( "<img class='arrow' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/arrow_right.svg'/>" );  
    $('.cms_user_profile .cms_user_details .btn-group .edit-address').append( "<img class='arrow' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/arrow_right.svg'/>" );	  
    $("<div class='logout'></div>" ).appendTo(".cms_user_profile"); 
    $('.cms_user_profile .cms_user_details .btn-group a:nth-child(3)' ).detach().appendTo(".logout");
    $('.cms_user_profile .logout' ).prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/logout_ico.svg'/>" );
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
    $('.order_list.order_history .list-group-item div span').each(function() {      
          if ( $(this).text().indexOf("Waiting for payment") != -1 ){ 
            $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysyłki/oczekiwanie_ico.svg'/>" );
          } 
	  else if ( $(this).text().indexOf("Canceled") != -1 ){
	    $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysyłki/wycofane_ico.svg'/>" );
          }
	  else if ( $(this).text().indexOf("In realization") != -1 ){
	    $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysyłki/kompletowane_ico.svg'/>" );
	  }
	  else if ( $(this).text().indexOf("Payed") != -1 ){
	    $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysyłki/oplacone_ico.svg'/>" );
          }
	  else if ( $(this).text().indexOf("Partial") != -1 ){
	    $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysyłki/rezerwacje_ico.svg'/>" );
          }
	  else if ( $(this).text().indexOf("Ordered") != -1 ){
	    $(this).parent().prepend( "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Statusy%20wysyłki/zamo_wione.svg'/>" );
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
       "<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/myprofile_ico.svg'/>" +
       "<img class='arrow' src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/VISLA/Profil/arrow_left.svg'/><h5>TWOJE KONTO</h5>" +
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
            p = p.replace("46 1930 1419 2300 0347 6837 0005", "<h3 class='dark-blue'>46 1930 1419 2300 0347 6837 0005</h3>");
            p = p.replace("W tytule przelewu prosimy o podanie numeru zamówienia.", "<h3><br>W tytule przelewu prosimy o podanie numeru zamówienia.</h3>");
            $(this).html(p); 
          } 
    });    
	  
    var order = $('#thank_you_for_ordering .buttons a').attr('href');
    $('#thank_you_for_ordering .buttons .continue_shopping').hide();
    $('#thank_you_for_ordering .buttons').append("<div id='order-number'></div>");
    $('#thank_you_for_ordering .buttons').append("<div id='summary'></div>");
    $('#thank_you_for_ordering #order-number').load(order + ' #order_number_block h2');  
    $('#thank_you_for_ordering #summary').load(order + ' #shop_order_payment', function() {
    	$('#shop_order_payment .row h4').each(function () {
		if ($(this).text().indexOf("Total") != -1) {
		    $(this).text('Summary');
		}
	});
	$('#shop_order_payment .row .totals_summary p').each(function () {
		if ($(this).text().indexOf("Wartość zamówienia") != -1) {
		    $(this).text('SUBTOTAL:');
		}
	});
    }); 
    $( ".buttons.panel" ).after("<div id='shop_order_payment_info'><p>" + 
        "You can return goods within 30 days.<br/>" +
        "<a href='/regulations'>Read more</a></p>" + 
        "<p>You are liable to pay for your purchase.</p></div>");   
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
    var p = $("#promocode_box").html();
    p = $("#promocode_box").html().replace(":", "");
    $("#promocode_box").html(p);
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
	$('#extra_info_gratis').hide();
	$('#registration_link').prop("href", "/signup");
});


$( "[for=shop_order_edit_shipping_address]" ).click(function() {
    $("#shop_order_show_shipping_address").hide();
    $("#shop_order_edit_shipping_address_form").slideDown(500)    
});
