var mapForm = { 
  'Firma': 'Podaj nazwę firmy', 
  'Nazwisko i imię': 'Podaj nazwisko i imię', 
  'E-mail': 'Podaj e-mail',
  'Telefon' : 'Podaj telefon',
  'Wiadomość' : 'Wpisz wiadomość',
  'Temat' : 'Wybierz temat',
  'Wiadomość lub pytanie' : 'Wpisz wiadomość lub pytanie'
                };

var intervalCheckErrors = null;

function checkErrors() { 
  $('.lavina_form label').each(function() { 
    var parentInput = $(this).next();
    var maybeError = $(this).next().next();
    if ( maybeError.length ) {
      if (! parentInput.hasClass('field_with_errors') ) {
        parentInput.addClass('field_with_errors');
        var error = mapForm[ $(this).text() ]; 
        parentInput.append("<div class='validation-error'>" + error + "</div>");
      }
    } else {
      parentInput.removeClass('field_with_errors');
      parentInput.find('.validation-error').remove();
    }
  });
  if ( !$('.lavina_form label').length ) {
      clearInterval(intervalCheckErrors); 
  }
};

$(document).on('ready',function(){
  $('.lavina_form input.button[type="submit"]').on('click', function() {
    if (intervalCheckErrors == null) {
      intervalCheckErrors = setInterval(checkErrors,100);
    }
  });;      
});

