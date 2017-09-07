


$('.lavina_form .formErrorSiteor').each(function() { 
  var error;
  var label = $(this).prev().prev().text();
  if ( label.indexOf("Firma") != -1 ){
    error = 'Podaj nazwę firmy';
  }
  $(this).prev().addClass('field_with_errors');
  $(this).prev().first().after("<div class='validation-error'>" + error + "</div>");
});
