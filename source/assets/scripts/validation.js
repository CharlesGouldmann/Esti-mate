jQuery(document).ready(function($){


// ------------- Validate forms
// ------------------------------------------------------------------




	$('.js-base-validation').validate({
		ignore: '.ignore',
		debug: true,

		errorPlacement: function(error, element) {
		if (element.attr("name") == "terms")
		    {
		        error.insertAfter(".js-terms-link");
		    }
		    else
		    {
		        error.insertAfter(element);
		    }
		},

		rules: {
	    bestcase: {
	      required: true,
	      digits: true
	    },
	    mostlikely: {
	      required: true,
	      digits: true
	    },
	    worstcase: {
	      required: true,
	      digits: true
	    },
	    deploys: {
	      digits: true
	    },
	    deployavg: {
	      digits: true
	    }

	  }, // end rules

	  submitHandler: function(form) {
	  	
		}

	});






// ------------- check for valid and insert valid checkmark
// ------------------------------------------------------------------

	$('.js-base-validation input').on('change blur', function() {
		if( $(this).attr('type') !== 'radio' || $(this).attr('type') !== 'checkbox') {

			consoleLog('is not radio or checkbox');

			$(this).valid();

			if($(this).hasClass('valid')) {
				consoleLog('has valid class');

				$(this).parents('.float')
            .removeClass('float--label-hidden float--error')
            .addClass('float--label-defocus float--success');

				$(this).parents('.float').addClass('valid');
				consoleLog($(this).parents('float'));
			}
			else {
				$(this).parents('.float').removeClass('valid');
			}
			
		}
		else {
			// do something for checkboxes and radios
		}
		
	});


});