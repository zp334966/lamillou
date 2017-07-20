var fieldsMap = [
				{'Imię':'shop_order_first_name',
				'Nazwisko':'shop_order_last_name',
				'Ulica i nr domu':'shop_order_street',
				'Kod pocztowy':'shop_order_postcode',
				'Miejscowość':'shop_order_city',
				'Email':'shop_order_email',
				'E-mail' : 'user[password]',
				'Potwierdzenia email':'shop_order_email_confirmation',				
				'Telefon':'shop_order_phone',
				'Nazwa':'shop_order_invoice_company_or_name',
				'Miasto':'shop_order_invoice_city',	

				'First name':'shop_order_first_name',
				'Last name':'shop_order_last_name',
				'Address':'shop_order_street',
				'Zip code':'shop_order_postcode',
				'City':'shop_order_city',
				'Email':'shop_order_email',
				'Phone':'shop_order_phone',
				
				'Email confirmation':'shop_order_email_confirmation',
				'Company or name':'shop_order_invoice_company_or_name',
								
},{
	'Ulica i nr domu':'shop_order_invoice_street',
	'Kod pocztowy':'shop_order_invoice_postcode',

	'Address':'shop_order_invoice_street',
	'Zip code':'shop_order_invoice_postcode',
	'City':'shop_order_invoice_city',	

	'Login':'user_login',
	'E-mail':'user_email',
	'Hasło':'user_password',
	'Powtórzenie hasła':'user_password_confirmation'

}]
;

var messagesCorrections = {
	'Imię nie może być puste':'Podaj imię',
	'Nazwisko nie może być puste':'Podaj nazwisko',
	'Ulica i nr domu nie może być puste':'Podaj adres',
	'Ulica i nr domu jest nieprawidłowe':'Adres powinien składać się przynajmniej z nazwy oraz numeru',
	'Kod pocztowy nie może być puste':'Podaj kod pocztowy, np. 00-341',

	'Miejscowość nie może być puste':'Podaj nazwę miejscowości',

	'Email nie może być puste':'Podaj email',
	'Email jest nieprawidłowe':'Podaj prawidłowy email, np. jan@example.com',

	'Telefon nie może być puste':'Podaj telefon',

	'Nazwa nie może być puste':'Podaj nazwę',
	'Miasto nie może być puste':'Podaj miasto',		


	"Imię can't be blank":'Podaj imię',
	"Nazwisko can't be blank":'Podaj nazwisko',
	"Ulica i nr domu can't be blank":'Podaj adres',
	"Ulica i nr domu is invalid":'Adres powinien składać się przynajmniej z nazwy oraz numeru',
	"Kod pocztowy can't be blank":'Podaj kod pocztowy, np. 00-341',

	"Miejscowość can't be blank":'Podaj nazwę miejscowości',
 
	"Email can't be blank":'Podaj email',
	"Email is invalid":'Podaj prawidłowy email, np. jan@example.com',

	"Telefon can't be blank":'Podaj telefon',

	"Nazwa can't be blank":'Podaj nazwę',
	"Miasto can't be blank":'Podaj miasto',	

	// REJESTRACJA
	"Login nie może być puste":'Podaj login',
	"Login zostało już zajęte":"Taki login już istnieje - wybierz inny",
	"Login pole jest za krótkie (minimalnie ilość znaków: 2)":'Login jest za krótki – musi posiadać min. 2 znaki',		
	"Login should use only letters, numbers, spaces, and .-_@ please.":'Login może się składać tylko z liter, cyfr, spacji oraz znaków  . - _ @',
	"E-mail pole jest za krótkie (minimalnie ilość znaków: 4)":'Email jest za krótki – musi posiadać min. 4 znaki',
	"E-mail should look like an email address":'Podaj prawidłowy email, np. jan@example.com',
	"E-mail nie może być puste":"Podaj email",
	"Hasło pole jest za krótkie (minimalnie ilość znaków: 8)":'Hasło jest za krótkie – musi składać się z min. 8 znaków.',
	"Powtórzenie hasła nie zgadza się z potwierdzeniem":'Hasła nie pasują. Spróbuj ponownie.',
	"Powtórzenie hasła pole jest za krótkie (minimalnie ilość znaków: 8)":'Hasło jest za krótkie – musi składać się z min. 8 znaków.',

	"Hasło is too short (minimum is 8 characters)":'Hasło jest za krótkie – musi składać się z min. 8 znaków.'

};



var errorExplanationsToFieldIds = {};
var fieldsWithErrors = {};

function showValidationInline(text,afterEl){
	var textCorrection = messagesCorrections[text];
	if (textCorrection != undefined){
		text = textCorrection;
	}
	afterEl.append('<div class="validation-error">'+text+'</div>');
}

function getMainLabelId(label){
	for (var key in fieldsMap[0]){
		if (label.startsWith(key)){
			return fieldsMap[0][key];
		}

	}
	return null;
}

function getSecondaryLabelId(label){
	for (var key in fieldsMap[1]){
		if (label.startsWith(key)){
			return fieldsMap[1][key];
		}

	}
	return null;
}

function isFieldWithError(fieldId){

}

function isFieldEmpty (fieldId){
	return ($.trim($("#"+fieldId).val()) == "");
}


function isEmptyIssueValidateMessage (message){
	if (message == undefined)
		return true;
	return (message.endsWith('nie może być puste') || message.endsWith("can't be blank") || message.endsWith('(minimalnie ilość znaków: 8)'));
}


function alreadyHasError(fieldId,errorExplanation){

}


// $(function() {
  
//     // Setup form validation on the #register-form element
//     $("#form1").validate({
    
//         // Specify the validation rules
//         rules: {
//             shop_order_first_name: "required",
//             shop_order_last_name: "required",
//             shop_order_email: {
//                 required: true,
//                 email: true
//             }
//         },
        
//         // Specify the validation error messages
//         messages: {
//             shop_order_first_name: "Please enter your first name",
//             shop_order_last_name: "Please enter your last name",
//             // password: {
//             //     required: "Please provide a password",
//             //     minlength: "Your password must be at least 5 characters long"
//             // },
//             shop_order_email: "Please enter a valid email address"
//         },
        
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });

// });

// function validateForm(){
// 	$("#form1").valid();

// };


function shouldShowValidationError(labelId,label){
	var isOK = errorExplanationsToFieldIds[label] != labelId && fieldsWithErrors[labelId] == undefined
	   			&& !(isFieldEmpty(labelId) && !isEmptyIssueValidateMessage(label))
	   			&& !(!isFieldEmpty(labelId) && isEmptyIssueValidateMessage(label));

	var parentIsFieldWithErrors = $("#"+labelId).parent().hasClass('field_with_errors');

	return isOK && parentIsFieldWithErrors;
}

 
$( document ).ready(function() { 

	$('#invoice_data').attr("id", "invoice_data2");

    // chowanie listy błędów na górze ekranu
    var errorList = $('#errorExplanation')
    if (errorList){
    	errorList.hide(); 
    }

	var acceptChecks = $(".form_accept_checks");

	if (acceptChecks && acceptChecks.hasClass('WithErrors')){



		//acceptChecks = acceptChecks[0];shop_order_terms_and_conditions
		var checksLabelParent = $('label[for=shop_order_terms_and_conditions]').parent();
		checksLabelParent.append('<div class="field_with_errors"><div class="validation-error">Prosimy o zakceptowanie regulaminu i polityki prywatności.</div></div>');

		acceptChecks.removeClass('WithErrors');
        acceptChecks.removeClass('checkbox');		

	}



	// remove text [musi być zaakceptowane]
	$("label[for=shop_order_terms_and_conditions]").contents().filter(function() {
		return this.nodeType == 3;
	}).replaceWith("");


// ------------------------------------------------------------------------------------
// JQUERY VALIDATE
// ------------------------------------------------------------------------------------

    //$("#form1").validate();

    // $('.continue_with_order').attr('onclick', 'validateForm();');

    // $("#form1").validate({
    
    //     // Specify the validation rules
    //     rules: {
    //         shop_order_first_name: "required",
    //         shop_order_last_name: "required",
    //         shop_order_email: {
    //             required: true,
    //             email: true
    //         }
    //     },
        
    //     // Specify the validation error messages
    //     messages: {
    //         shop_order_first_name: "Please enter your first name",
    //         shop_order_last_name: "Please enter your last name",
    //         // password: {
    //         //     required: "Please provide a password",
    //         //     minlength: "Your password must be at least 5 characters long"
    //         // },
    //         shop_order_email: "Please enter a valid email address"
    //     },
        
    //     submitHandler: function(form) {
    //         form.submit();
    //     },
    // 	showErrors: function(errorMap, errorList) {
    // 		if (errorsList.lenght >0){
    //     		alert('kuku');
    //     	}
    // 	}
    // });


    //$('#form').validate();

// ------------------------------------------------------------------------------------    


	var errorsList = $('#errorExplanation'); 
	errorsList = errorsList.find("ul");
	errorsList = errorsList.children();
	
	 errorsList.each(function(i) {
   		var label = $(this).text();
   		var labelId = getMainLabelId(label);
   		if (labelId == undefined){
   			labelId = getSecondaryLabelId(label);
   		}
   		if (labelId != undefined){
   			// we assume that there is no 3 the same labeled fields on the form (max 2)
   			
	   		if (shouldShowValidationError(labelId,label)){
	   			errorExplanationsToFieldIds[label] = labelId;
	   			fieldsWithErrors[labelId] = errorExplanationsToFieldIds[label];
	   			showValidationInline(label,$("#"+labelId).parent());
	   		}else{
	   			labelId = getSecondaryLabelId(label);
	   			if (shouldShowValidationError(labelId,label)){
	   				if (errorExplanationsToFieldIds[label] != labelId){
	   					errorExplanationsToFieldIds[label] = labelId;
	   					fieldsWithErrors[labelId] = errorExplanationsToFieldIds[label];
	   					showValidationInline(label,$("#"+labelId).parent());
	   				}

	   			}
	   		}
   		}else{

   		}


	 });

	//$( ".field_with_errors" ).each(function( index ) {
		
		//$(this).append($('#errorExplanation').html());
		//var first = $(this).children(":first");



		// if (first != undefined && first.hasClass('form-control')){
		// 	showValidationInline('kukuk',$(this));
		// }

	//});

//	$("#form1").validate();
	

});