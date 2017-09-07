


$('.lavina_form label').each(function() { 
  var parentInput = $(this).next();
  var maybeError = $(this).next().next();
  if (maybeError.length) {
    parentInput.addClass('field_with_errors');
    var error; //obliczyc
    parentInput.append("<div class='validation-error'>" + error + "</div>");
  } else {
    parentInput.removeClass('field_with_errors');
    parentInput.eq(1).remove();
  }
});
