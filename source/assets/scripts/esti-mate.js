jQuery('document').ready(function($){
	
	$('.js-esti-mate-submit').on('click', function() {

		var form = $('.js-esti-mate');

		if($('.error', form).length === 0) {
			// Get values

			var bestcase 		= parseFloat(form.find('[name="bestcase"]').val()),
					mostlikely 	= parseFloat(form.find('[name="mostlikely"]').val()),
					worstcase 	= parseFloat(form.find('[name="worstcase"]').val()),
					deploys 		= parseFloat(form.find('[name="deploys"]').val()),
					deployavg 	= parseFloat(form.find('[name="deployavg"]').val());

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