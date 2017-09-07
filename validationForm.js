var mapForm = { 
  'Firma': 'Podaj nazwę formy', 
  'Nazwisko i imię': 'Podaj nazwisko i imię', 
  'E-mail': 'Podaj e-mail',
  'Telefon' : 'Podaj telefon',
  'Wiadomość' 'Wpisz wiadomość':
                };



$('.lavina_form label').each(function() { 
  var parentInput = $(this).next();
  var maybeError = $(this).next().next();
  if (maybeError.length) {
    parentInput.addClass('field_with_errors');
    var error = mapForm[ $(this).text() ]; 
    parentInput.append("<div class='validation-error'>" + error + "</div>");
  } else {
    parentInput.removeClass('field_with_errors');
    parentInput.eq(1).remove();
  }
});
