jQuery('document').ready(function($){
	
	$('.js-esti-mate-submit').on('click', function() {

		var form = $('.js-esti-mate');
		var inputs = $('input', form).length;


		if($('input.valid', form).length === inputs) {
			consoleLog('all valid', 'message');

			// Get values
			var bestcase 		= parseFloat(form.find('[name="bestcase"]').val().replace(',', '.')),
					mostlikely 	= parseFloat(form.find('[name="mostlikely"]').val().replace(',', '.')),
					worstcase 	= parseFloat(form.find('[name="worstcase"]').val().replace(',', '.')),
					deploys 		= parseFloat(form.find('[name="deploys"]').val().replace(',', '.')),
					deployavg 	= parseFloat(form.find('[name="deployavg"]').val().replace(',', '.'));

					// basic validation for empty value
					if(isNaN(deploys)) {
						deploys = 0;
					}

					if (isNaN(deployavg)) {
						deployavg = 0;
					}

			// Calculate estimates
			var estimate 						= (bestcase + (4 * mostlikely) + worstcase)/6,
					deviation 					= (worstcase - bestcase) / 6,
					ninetyPercent 			= estimate + (1.645 * deviation),
					ninetyFivePercent 	= estimate + (2 * deviation);

			var deployTime	=  deployavg * deploys;


			// Show estimates
			$('.js-result-no-deviation').html(estimate + deployTime);
			$('.js-result-ninety').html(ninetyPercent + deployTime);
			$('.js-result-ninetyfive').html(ninetyFivePercent + deployTime);
		}
	});

});