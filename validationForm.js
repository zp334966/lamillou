var mapForm = { 
  'Firma': 'Podaj nazwę firmy', 
  'Imię i nazwisko': 'Podaj imię i nazwisko', 
  'Imię': 'Podaj imię',
  'E-mail': 'Podaj e-mail',
  'Telefon' : 'Podaj telefon',
  'Wiadomość' : 'Wpisz wiadomość',
  'Temat' : 'Wybierz temat',
  'Wiadomość lub pytanie' : 'Wpisz wiadomość lub pytanie'
};

var mapFormENG = { 
  'Company' : 'Enter a company',
  'Name' : 'Enter a first name and a last name',
  'First and last name' : 'Enter a first name and a last name',
  'Topic' : 'Select a topic',
  'E-mail': 'Enter a e-mail',
  'Telephone' : 'Enter a telephone number',
  'Message' : 'Enter a message'
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
    if (intervalCheckErrors) {
      intervalCheckErrors = setInterval(checkErrors,100);
    }
  });;  
  
  
});

$(window).load(function(){
  $("#before-loading").css("display", "none");
  $("#lavina_form_2160").css("display", "block");
  $("#lavina_form_10244").css("display", "block");
});
