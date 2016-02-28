// ========= (c)2015 :: html & css & jquery coding :: Polyakov - http://polyakov.co.ua  =========

// =========================================================================  scroll to top
jQuery(document).ready(function($) {
	var offset = 100,
		offset_opacity = 300,
		scroll_top_duration = 900,
		$back_to_top = $('#top');

	$(window).scroll(function () {
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('fade-out');
		}
	});

	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
				scrollTop: 0,
			}, scroll_top_duration
		);
	});

});
// =========================================================================  scroll boy girl block
$(function() {
	var distance_for_asterix = $('#second-block').offset().top - $(window).height(),
		distance_end_asterix = $('#third-block').offset().top - $(window).height(),
		distance_for_boy = $('#fourth-block').offset().top - $(window).height(),
		distance_end_boy = $('#footer').offset().top - $(window).height(),
		$asterix = $('#asterix'),
		$boy = $('#design-boy'),
		$back_to_top = $('#top');

	$(window).scroll(function(){

		if  ($(window).scrollTop() > distance_for_asterix && $(window).scrollTop() < distance_end_asterix)
			$asterix.addClass('visible');
		else
			$asterix.removeClass('visible');

		if  ($(window).scrollTop() > distance_for_boy && $(window).scrollTop() < distance_end_boy) {
			$back_to_top.addClass('visible-not');
			$boy.addClass('visible');
		}
		else {
			$boy.removeClass('visible');
			$back_to_top.removeClass('visible-not');
		}
	});

});