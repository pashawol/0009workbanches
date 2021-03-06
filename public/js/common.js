"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	customRange: function customRange() {
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function onStart(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onChange: function onChange(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onFinish: function onFinish(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onUpdate: function onUpdate(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data; // th.val(data + ' т')

				$d3_instance.update({
					from: min
				});
			});
			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data; // th.val(data + ' т')

				$d3_instance.update({
					from: max
				});
			}); // $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute
			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });
		});
	}
};

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.customRange();
	JSCCommon.tabscostume('tabs');
	$(".toggle-menu-mobile--js").click(function () {
		$('.toggle-menu-mobile').toggleClass('on');
		$(".menu-mobile--js").toggleClass('active');
		$("body").toggleClass('fixed');
	}); // JSCCommon.mobileMenu();

	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/05.png);"></div>')
	// /добавляет подложку для pixel perfect
	// убирает прыгающую кнопку

	$(".disable-button").click(function () {
		$('.header-block__find-out').addClass('hidden');
	}); // /закрыть/открыть мобильное меню
	// листалка по стр

	$("   .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var icon = '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="791.966px" height="791.967px" viewBox="0 0 791.966 791.967" style="enable-background:new 0 0 791.966 791.967;" xml:space="preserve"><path d="M245.454,396.017L617.077,56.579c12.973-12.94,12.973-33.934,0-46.874c-12.973-12.94-34.033-12.94-47.006,0L174.615,370.896c-6.932,6.899-9.87,16.076-9.408,25.087c-0.462,9.045,2.476,18.188,9.408,25.088l395.456,361.19c12.973,12.94,34.033,12.94,47.006,0c12.973-12.939,12.973-33.934,0-46.873L245.454,396.017z"/></svg>';
	var arrl2 = ' <div class="r">' + icon,
			arrr2 = ' <div class="l">' + icon; // // карусель

	var defaultSlide = {
		speed: 450,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'progressive'
	};
	$('.s-catalog__slider--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		dots: true,
		appendArrows: '.control-wrap',
		appendDots: '.control-wrap',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	}));
	$('.s-prod-head-images__slider--lg-js').slick(_objectSpread({}, defaultSlide, {
		arrows: false,
		dots: false,
		asNavFor: '.s-prod-head-images__slider--sm-js'
	}));
	$('.s-prod-head-images__slider--sm-js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 3,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.s-prod-head-images__slider--lg-js',
		focusOnSelect: true
	})); // слайдер конзины

	$('.s-prod-head-images__slider--js ').slick(_objectSpread({}, defaultSlide, {
		// arrows: false,
		dots: false // asNavFor: '.s-prod-head-images__slider--sm-js'

	}));
	$(' .header-slider-js').slick(_objectSpread({}, defaultSlide, {
		// arrows: false,
		dots: false,
		arrows: false,
		autoplay: true // asNavFor: '.s-prod-head-images__slider--sm-js'

	})); //    const wow = new WOW({ mobile: false });

	$(' .breadcrumb').slick(_objectSpread({}, defaultSlide, {
		// arrows: false,
		dots: false,
		arrows: false,
		variableWidth: true,
		infinite: false
	})); //    const wow = new WOW({ mobile: false });
	//         wow.init();

	$(".catalog-menu__toggle").click(function () {
		$(this).parent().toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var container = $(".catalog-menu.active");

		if (container.has(e.target).length === 0) {
			container.removeClass('active');
		}
	});
	$(".messanger-block__item--search").click(function () {
		$(".form-search").slideToggle().find("input").focus();
	});
	$('.custom-input-time__input').change(function () {
		$(this).parents('form').find('.toggle-wrap-input-js').toggle().toggleClass('active');
	}); // accordion

	$(".showhide").click(function () {
		$(this).toggleClass("active").next().slideToggle().parents().toggleClass("active");
	});
	$(".s-filter__btn--js").click(function () {
		$(this).toggleClass('active').find("strong").toggleClass("d-none");
		$(".s-filter-wrap").toggle();
	});

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			var c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").each(function () {
		//Change
		var th = $(this);
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$(this).attr({
			"action": 'thanks.php',
			"method": "post"
		});
	});
	$(".link-modal").click(function () {
		var modal = $(this).attr('href');
		$(modal).find(".order").val($(this).data("order")); // $(this).parents('.s-prod-head')
		// 		? $($(this).data("src")).find(".color").val($(this).parents('.s-prod-head').find(".radio-input__input:checked").val())
		// 		: $($(this).data("src")).find(".color").val('')
	}); // показать еще 

	$(".s-prod-head__loadMore").click(function () {
		$(this).toggle();
		$(".s-prod-head__hiddenBlock").slideToggle();
	}); // калькулятор

	function getCost(x, id) {
		var option = document.getElementById(id);
		var i;

		for (i = 0; i < option.length; i++) {
			// x = option.options[i].dataset.price;
			x = option.options[i].value;
		}

		return x;
	}

	if ($("div").is(".form-calc--1")) {
		var change = function change() {
			var vertical, horizontal, cost, result;
			vertical = document.querySelector('.stoika-price').textContent.replace(" ", "");
			horizontal = document.querySelector('.kronshtain-price').textContent.replace(" ", "");
			result = +document.getElementById("vertical").value * +vertical + +document.getElementById("horizontal").value * +horizontal;
			if (isNaN(result)) result = 0;
			document.getElementById("result").innerText = result;
		};

		change();
		$(".form-calc--1").on('input change input cut copy paste', 'input, select', function () {
			change();
		});
		$(".form-calc .link-modal").click(function () {
			$("#modal-by").find('[name="stoyki"]').val($(this).parents(".form-calc").find("#vertical").val() + "шт.");
			$("#modal-by").find('[name="kranshtein"]').val($(this).parents(".form-calc").find("#horizontal").val() + "шт.");
			$("#modal-by").find('[name="price"]').val($("#result").text() + "руб.");
		});
	}

	$('.form-wrap__btn-count--plus').click(function () {
		// if ($(this).prev().val() < 3) {
		$(this).prev().val(+$(this).prev().val() + (+$(this).prev().data("step") || 1)); // }
	});
	$('.form-wrap__btn-count--minus').click(function () {
		if ($(this).next().val() > 0) {
			if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - (+$(this).next().data("step") || 1));
		}
	});

	if ($("div").is(".form-calc-system")) {
		var change2 = function change2() {
			var result = 0;
			var select = $(".form-calc-system .form-wrap__input");

			for (var i = 0; i < select.length; i++) {
				result += +$(select[i]).data('price') * $(select[i]).val();
			} // result = (+document.getElementById("vertical").value * +vertical) + (+document.getElementById("horizontal").value * +horizontal);


			if (isNaN(result)) result = 0;
			document.getElementById("result").innerText = result;
		};

		change2();
		$(".form-calc-system").on('input change input cut copy paste click', 'input, select, .form-wrap__btn-count--plus, .form-wrap__btn-count--minus', function () {
			change2();
		});
		$(".form-calc-system .link-modal").click(function () {
			var result2 = '';
			var select = $(".form-calc-system .form-wrap__input");

			for (var i = 0; i < select.length; i++) {
				result2 += "<tr style=\"background-color: #f8f8f8;\"> \n\t\t\t\t\t<td style=\"padding: 10px; border: #e9e9e9 1px solid;\"> ".concat($(select[i]).data('name'), " :</td> \n\t\t\t\t\t<td style=\"padding: 10px; border: #e9e9e9 1px solid;\"><b> ").concat($(select[i]).val(), " \u0448\u0442. (").concat($(select[i]).data('price'), " \u0440\u0443\u0431.)  </b></td></tr>");
			}

			$("#modal-by").find('[name="names"]').val(result2);
			$("#modal-by").find('[name="price"]').val($("#result").text() + " руб.");
		});
	} // подстановка числа купленных


	var now = new Date();
	var date = now.getDate();
	$(".counter").text(+$(".counter").data("start") + +date); // показать все карточки в каталоге

	$(".s-catalog__btn-more--js").click(function () {
		$(this).parents('.s-catalog').find('.s-catalog__col:hidden').fadeIn(function () {
			$(".s-catalog__btn-more--js").fadeOut();
		});
	});
	$(".link-more-js").click(function (e) {
		e.preventDefault();
		$(this).hide().prev().slideDown();
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}