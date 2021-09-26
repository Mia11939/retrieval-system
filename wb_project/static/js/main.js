(function ($) {
	"use strict";

// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

$("[data-bg-color]").each(function () {
	$(this).css("background", $(this).attr("data-bg-color"))
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.hero--active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.hero-single:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.hero-single[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		speed: 1000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: "<i class='hero__prev-arrow far fa-long-arrow-left'></i>",
		nextArrow: "<i class='hero__next-arrow far fa-long-arrow-right'></i>",
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

	$('.team-active').slick({
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		fade: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.review__active').slick({
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: "<i class='review__arrow review__prev--arrow fal fa-long-arrow-left'></i>",
		nextArrow: "<i class='review__arrow review__next--arrow fal fa-long-arrow-right'></i>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.review__active--h2').slick({
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: "<i class='review__arrow--h2 review__arrow--prev fal fa-long-arrow-left'></i>",
		nextArrow: "<i class='review__arrow--h2 review__arrow--next fal fa-long-arrow-right'></i>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.sponsor-active').slick({
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		fade: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: "<i class='review__arrow review__prev--arrow fal fa-long-arrow-left'></i>",
		nextArrow: "<i class='review__arrow review__next--arrow fal fa-long-arrow-right'></i>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.sponsor-active--h3').slick({
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		fade: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: "<i class='review__arrow review__prev--arrow fal fa-long-arrow-left'></i>",
		nextArrow: "<i class='review__arrow review__next--arrow fal fa-long-arrow-right'></i>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// Header Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// WOW active
new WOW().init();

// ------------------------ Hover Tilt effect
var tiltBlock = $('.js-tilt');
if (tiltBlock.length) {
	$('.js-tilt').tilt({
		glare: true,
		maxGlare: 0.4
	});
}

// ------------------------------- AOS Animation
if ($("[data-aos]").length) {
	AOS.init({
		duration: 1000,
		mirror: true
	});
}

// side-bar
$('.bar').on("click", function () {
	$('.btn-menu-main').addClass('btn-menu-main-right');
});
$('.crose').on("click", function () {
	$('.btn-menu-main').removeClass('btn-menu-main-right');
});

	/* Search
	-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});

	/*---------------------
	Circular Bars - Knob
--------------------- */
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, { accX: 0, accY: -150 });
		});
	}

	// paroller
	if ($('.paroller').length) {
		$('.paroller').paroller();
	}

	// -------------------- From Bottom to Top Button
	//Check to see if the window is top if not then display button
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scroll-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
		return false;
	});

	// Counter
	$('.counter').counterUp();




})(jQuery);