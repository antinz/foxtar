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
		slidesToScroll: 4
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

	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});

	$('.header__btn-menu').on('click', function(){
		$('.header__box').toggleClass('active');
	});

	var mixer = mixitup('.products__inner-box');
});
