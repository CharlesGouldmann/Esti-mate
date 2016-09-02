jQuery('document').ready(function($){
	
	$('.js-time-converter-submit').on('click', function() {

		var form = $('.js-time-converter');


		if(form.valid()) {
			consoleLog('all valid', 'message');

			// Get values
			var hours 		= parseFloat(form.find('[name="hours"]').val().replace(/(\.\d+)?(\,\d+)?/g, '')),
					minutes 	= parseFloat(form.find('[name="minutes"]').val().replace(/(\.\d+)?(\,\d+)?/g, ''));

					// basic validation for empty value
					if(isNaN(hours)) {
						hours = 0;
					}

					if (isNaN(minutes)) {
						minutes = 0;
					}

			// Calculate time
			var time = hours + (minutes/60);


			// Show estimates
			$('.js-time-result').html(time);
		}
	});

});