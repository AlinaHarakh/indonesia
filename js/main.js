$(function () {
	$('.menu__burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});
});
$(function () {
	$('.header-slider').slick({
		dots: true,
		prevArrow: '<button class="slick-prev"><img src="images/prev.svg" alt=""></button>',
		nextArrow: '<button class="slick-next"><img src="images/next.svg" alt=""></button>',
		// vertical: true,
		fade: true,
		responsive: [
			{
				breakpoint: 371,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			}]

	});


	$('.trips__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="prev"><img src="images/prev.svg" alt=""></button>',
		nextArrow: '<button class="next"><img src="images/next.svg" alt=""></button>',
		dots: true,
		responsive: [
			{
				breakpoint: 550,
				settings: {
					arrows: false,
				}
				// breakpoint: 461,
				// settings: {
				// 	vertical: false,
				// 	arrows: false,
				// 	slidesToShow: 1,
				// 	dots: true
				// }
			}
		]
	});

	$('.search__input').focusin(function () {
		$(this).addClass('active');
		$('.search__box').addClass('move').focus();
	});

	$('.search__input').focusout(function () {
		$(this).removeClass('active').val("");
		$('.search__box').removeClass('move');
	});

	$(document).ready(function () {
		$('.burger-line').click(function () {
			//On click, toggle on 'this' (#simply-burger) the class open
			$(this).toggleClass('open');
		});
	});
	$('.burger').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});


});