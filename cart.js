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
        $select.remove();
    });   
    
    // prettify checkboxes
    $('input:checkbox').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%'
    });

    
    $('label[for="shop_order[delivery_option_id]"]').each(function() { 
      var delivery = $(this).text();
      if ( $(this).text().indexOf("GLS") != -1 ){
        var names = delivery.split('-');
        $(this).html(names[0] + '<span>' + names[1] + '</span>');
      } 
      if ( delivery.indexOf("Odbiór osobisty") != -1 ){           
      } 
      if ( delivery.indexOf("Poczta Polska") != -1 ){            
      } 
    });  
    //$('label[for="shop_order[delivery_option_id]"]:nth-last-of-type(2)').html('<strong>Kurier GLS</strong><br><span>na terenie Polski (14 zł)</span>');
    //$('label[for="shop_order[delivery_option_id]"]:last-of-type').html('<strong>Odbiór osobisty</strong><br><span>ul. Ruczaj 89, Warszawa (0 zł)</span>');

    var $payu = $('#payment_kind_selector input[value=platnosci_pl]').parent().next();

    $payu.addClass('payment-gateway-payu');
    $payu.html('<img class="payu" alt="PayU"><br>Online / karta płatnicza'); 

    var $paypal = $('#payment_kind_selector input[value=paypal]').parent().next();

    $paypal.addClass('payment-gateway-paypal');
    $paypal.html('<img class="paypal" alt="PayU">');     

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
    
    
});


