$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		readOnly: true,
		starWidth: "12px"
	});

	$('.product__slider-inner').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.js-range-slider').ionRangeSlider({
		type: "single",
		min: 0,
		max: 1000,
		from: 200,
		to: 500,
		grid: true
	});

	$('.icon-th-list').on('click', function () {
		$('.product__item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$('.icon-th-large').on('click', function () {
		$('.product__item').removeClass('list');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$('.product-details__tabs .tab, .settings__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product-details__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-details__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	});

	$('.header__btn-menu').on('click', function () {
		$('.header__box').toggleClass('active');
	});

	$('input[type="file"], select').styler();

	var mixer = mixitup('.products__inner-box');
});
