$(document).ready(function(){

	var nav = $("#nav");
	var introH = $("#header").innerHeight();
	var scrollOffset = $(window).scrollTop();
/*fixed header*/
	checkScroll(scrollOffset);

	$(window).on("scroll", function(){

			scrollOffset = $(this).scrollTop();
			checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		scrollOffset = $(this).scrollTop();

			if(scrollOffset >= introH){
				nav.addClass("fixed");
			}else{
				nav.removeClass("fixed");
			}
	}
	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;
		
		$("nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset

		}, 700);
	});

  $("#nav-toggle").on("click", function(event){

		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav__menu").toggleClass("active");
		
	});
	function validateForms(form){
    $(form).validate( {
      rules: {
				people:
					"required",
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
				people: "Please enter the number of people",
        name: {
          required:"Please enter your name ",
						minlength: jQuery.validator.format("Enter more than {0} characters")
					},
					phone: "Please enter your phone number ",
					email: {
						required: "Please enter your email ",
						email: " Wrong email address"
        }
      }
    });
  };
  validateForms('#booking__form');

	$('input[name = phone]').mask("(999) 999-9999")

	$('.new__slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
  	autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
	$('.tradition__slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    arrows: false,
		dots: false,
		fade: true,
    asNavFor: '.tradition__slider-mini'
  });
  $('.tradition__slider-mini').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
			arrows: false,
			dots: true,
  		focusOnSelect: true,
			asNavFor: '.tradition__slider',
	 });
	 $(window).scroll(function(){
    if ($(this).scrollTop() > 1000){
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  new WOW().init();
});