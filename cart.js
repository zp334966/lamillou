function add(word1, word2) {
    if (word1.match(/[a-z]/i)) {
        return word1 + "|" + word2;
    } else return word2;
};    

function prettyProduct(element) {
    var categories = ["KOCYK","PODUSIA","ZESTAW","OTULACZ","BLANKET","KOC","WINGS","BAG","PILLOW","KOMPLET","POŚCIEL","ORGANIZER","OCHRANIACZ",
                      "POZYTYWKA","HORN","PRZEŚCIERADŁO","PACK","TORBA","PASEK","PRZEWIJAK","SASZETKA","KOLEKCJA","ŚPIWOREK","PAD","COVER","KURA","COMBO",
                      "THERMO", "GRZECHOTKA","PLECAK","MAT","KAPELUSZ", "CHUSTKA"];

    var full_name = $(element).html();       
    var names = full_name.split('-');
    var i = 0;
    var title = "";
    var subtitle = "";

    while (names.length > i) {
        if (names[i].match(/[a-z]/i)) {
            if ( categories.some(function(v) {return names[i].includes(v);})) {
                subtitle = add (subtitle, names[i]);
            } else {
                if (!(title.match(/[a-z]/i))) {
                    title = names[i];
                } else {
                    subtitle = add (subtitle, names[i]);
                }
            }
        }
        i++;
    }
    title = title.toLowerCase();
    $(element).html('<div class="title">' + title + '</div>' + '<div class="subtitle">' + subtitle + '</div>');          
}

/*************************  *************************/
function onShowOrder() {
    
    // move quantity info
    $('div.item .table-cell.desc').each(function() {        
        var qty = $(this).find('p.cart_product_quantity_form').text().replace(/([^0-9]*)([0-9]+)([^0-9]*)/g, "$2");
        var $title = $('h4 a .title', $(this));
        $title.text(qty + 'x ' + $title.text());
    });
    
    // remove space before comma in ship adr.    
    var $ship_adr = $('#order_last_step p.item');
    //$ship_adr.html($ship_adr.html().replace(/\s+\,/g, ','));    
}

function showCheckoutProgress()
{
    if (window.location.href.indexOf("/app/shop/order/login_or_register") > -1) {
        $('#order-steps').hide();
        return;
    } else if (window.location.href.indexOf("/app/shop/orders/show_order") > -1) {
        var $address_active = '';
        var $summary_active = 'active';
        onShowOrder();        
    } else {
        var $address_active = 'active';
        var $summary_active = '';     
    }
    $('#order-steps').html('<div class="step-address '+$address_active+'"><a href="javascript:history.back()">1. Adres</a></div>\
                            <div class="step-summary '+$summary_active+'">2. Podsumowanie</div>');   
}

function updateRadioPayment() {
    $('select#shop_order_payment_kind option').each(function() { 
        var v = $(this).val();
        var test = $('#form1 #payment_kind_selector input[value="' + v + '"]').parent();
        if ($(this).css('display') == 'none') {
            test.hide();
            test.next().hide();
            test.next().next().hide();
            if (test.hasClass('checked')) {
              test.removeClass('checked');
              $('#form1 #payment_kind_selector input[value="manual_transfer"]').next().trigger( "click" );
            }
        } else {
            test.show();
            test.next().show();
            test.next().next().show();
        }        
    });      
}

function updateSelectDelivery() 
{
    var deliveryId = $('#form1 #shop_order_delivery_form .iradio_minimal-blue.checked input').val();
    var deliveryIdSel = $('select#shop_order_delivery_option_id').find(":selected").val();
    if (deliveryId != deliveryIdSel || $('#form1 #shop_order_delivery_form').attr('updated') != 'true' ) {
        $('select#shop_order_delivery_option_id').val(deliveryId).change();
        updateRadioPayment();
        $('#form1 #shop_order_delivery_form').attr('updated', 'true');
        console.log('deliveryId: ' + deliveryId);  
    }
    if ( $('#form1 #payment_kind_selector input:checked').val() != 
        $('#form1 #payment_kind_selector .iradio_minimal-blue.checked input').val() ) {
        console.log('realne zaznaczenie: ' + $('#form1 #payment_kind_selector input:checked').val() ); 
        var p = $('#form1 #payment_kind_selector .iradio_minimal-blue.checked input').val();
        $('#form1 #payment_kind_selector input[value="' + p + '"]').next().trigger( "click" );
    }
};  

function checkDeliveryAndPaymentInResume() {
  if ( $('#order_last_step #shop_order_payment').length ) {
    var delivery = $('#shop_order_payment .row-eq-height .item p:eq(0)').text();
    var payment = $('#shop_order_payment .row-eq-height .item:eq(1) p:eq(0)').text();
    console.log(delivery); console.log(payment);
    if (delivery.indexOf('Kurier GLS') != -1 && payment.indexOf('Płatność przy odbiorze') != -1) {
      window.history.back();
    }
  }
};

$( document ).ready(function() {   

    $('#cart-totals .cart-totals').html('<div class="row cart-totals-label">PODSUMOWANIE</div>' + $('#cart-totals .cart-totals').html());

    $('.product_price_total').each(function() {
        $(this).html($(this).html().replace("Razem: ", "RAZEM:<br/>"));
    });
        
    $('.shopping-cart h4 a').each(function() { prettyProduct($(this)); });
    $('#show_order_products_block h4 a').each(function() { prettyProduct($(this)); });


    $('.cart_product_remove_button').each(function() {        
        $(this).text("Usuń");
    });
    
    if (window.location.href.indexOf("/app/shop/order/login_or_register") > -1) {
        $('#login_box h2:first a').text('Zamów bez zakładania konta');        
        $('<a class="btn just_order" href="/app/shop/order/new_order?without_registration=true">Zamawiam</a>').insertAfter($('#login_box h2:first a'));
        
        $('<h3>ZALOGUJ SIĘ</h3>').insertBefore($('#login_box h2:nth-of-type(2)'));
        
        $('#login_box p.small:first').hide();
        $('label[for="Login___np._adres_e-mail_"]').text('Email');
        $('a.forgot').each(function() {
            $(this).insertBefore($(this).parent().find('input[type=submit]'));
            $(this).text('Zapomniałeś hasła?')
        });
        $('a#registration_link').addClass("btn");
        
        $('<p class="login-or-register">LUB</p>').insertBefore($('.login_info'));
    }
        
    showCheckoutProgress();
    
    if (window.location.href.indexOf("/signup") > -1) {
        $('#new_user label[for="user_password"]').text('Hasło (min. 6 znaków)');
    }
    if (window.location.href.indexOf("/user/create") > -1) {
        $('#new_user label[for="user_password"]').text('Hasło (min. 6 znaków)');
    }
    
    
    $('#shop_order_email_confirmation').parent().hide();
    $('#shop_order_form #form1').submit(function() {       
        $('#shop_order_email_confirmation').val($('#shop_order_email').val());
    });
        
    var $pwd_confirmation_block = $('#user_password_confirmation').parent()
    if ($pwd_confirmation_block.hasClass('field_with_errors')) {
        $pwd_confirmation_block.parent().hide();
    } else
        $pwd_confirmation_block.hide();
        
    $('form#new_user').submit(function() {       
        $('#user_password_confirmation').val($('#user_password').val());
    });    
    
    //convert select to radio  
    $('#shop_order_form #form1 select').each(function(i, select){
        var $select = $(select);
        $select.find('option').each(function(j, option){
            var $option = $(option);            
            var $radio = $('<input type="radio" />');            
            $radio.attr('name', $select.attr('name')).attr('value', $option.val());
            if ($option.attr('selected')) $radio.attr('checked', 'checked');
            $select.before($radio);
            $select.before(
                $("<label />").attr('for', $select.attr('name')).text($option.text())
            );            
            $select.before("<br/>");
            $radio.iCheck({
                checkboxClass: 'icheckbox_minimal-blue',
                radioClass: 'iradio_minimal-blue',
                increaseArea: '20%'
            });            
        });
        //$select.remove();
        $select.css( "visibility", "hidden" ).css("position", "absolute").css("z-index", "-1000");
        var s = $select.detach();
        $("form#form1.new_shop_order").before(s);
        
    });   
    
    // prettify checkboxes
    $('input:checkbox').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%'
    });

    
    $('label[for="shop_order[delivery_option_id]"]').each(function() { 
      var delivery = $(this).text();
      var names;
      if ( $(this).text().indexOf("GLS") != -1 ){
        names = delivery.split('-');
      } 
      if ( delivery.indexOf("Odbiór osobisty") != -1 ){   
        var preIndex = delivery.indexOf("(");
        names = [ delivery.substring(0, preIndex), delivery.substring(preIndex) ];
        names[1] = names[1].replace("(", "").replace(")","");
      } 
      if ( delivery.indexOf("Poczta Polska") != -1 ){  
        names = delivery.split('-');
      } 
      $(this).html(names[0] + '</br><span>' + names[1] + '</span>');
    });  
    
    var $payu = $('#payment_kind_selector input[value=platnosci_pl]').parent().next();

    $payu.addClass('payment-gateway-payu');
    $payu.html('<img class="payu" alt="PayU"><br>Online / karta płatnicza'); 

    var $paypal = $('#payment_kind_selector input[value=paypal]').parent().next();

    $paypal.addClass('payment-gateway-paypal');
    $paypal.html('<img class="paypal" alt="PayU">');     

    var $przelewy24 = $('#payment_kind_selector input[value=przelewy24]').parent().next();
    
    $przelewy24.html('<img class="przelewy24" alt="Przelewy24" src="https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/ikonki%20-%20zakupy/logo-przelewy-24.svg"/>');
    
    
    $('input[name="shop_order[personal_data_clause]"]').each(function() {
        $(this).prop('value', 1); 
    });
    $('input[name="user[user_settings_attributes][0][personal_data_clause]"]').each(function() {
        $(this).prop('value', 1); 
    });    
    
    $('.form_accept_checks a:first-of-type').prop('outerHTML',
                                                  'Akceptuję <a href="/regulamin">Regulamin</a> i <a href="/regulamin#polityka-prywatności">Politykę Prywatności</a>.');
    $('a.continue_with_order').text('Zamawiam');
    
    $('.page').show();
    
    checkDeliveryAndPaymentInResume();
    if ($( '#shop_order_delivery_form' ).length ){
        var intervalUpdateSelectDelivery = setInterval(updateSelectDelivery, 100);
    }
});
