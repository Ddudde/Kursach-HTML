$(window).ready(function(){
	var textColor = '#777777'; //custom color

	$('[placeholder]').each(function() {
		$(this).attr('tooltip', $(this).attr('placeholder')); //buffer

		if ($(this).val() === '' || $(this).val() === $(this).attr('placeholder')) {
			$(this).css('color', textColor);
			if($(this).attr('type') != 'password') $(this).css('font-style','italic');
			$(this).val($(this).attr('placeholder')); //IE8 compatibility
		}

		$(this).attr('placeholder',''); //disable default behavior

		$(this).bind('focus', function() {
			if ($(this).val() === $(this).attr('tooltip')) {
				$(this).val('');
			}
		});

		$(this).bind('keydown', function() {
			$(this).css('font-style','normal').css('color','#000');
		});

		$(this).bind('blur', function() {
			if ($(this).val()  === '') {
				$(this).val($(this).attr('tooltip')).css('color', textColor);
				if($(this).attr('type') != 'password') $(this).val($(this).attr('tooltip')).css('font-style','italic');
			}
		});
	});
});