$(document).ready(function() {

	// detect touch device
	if (isTouchDevice() === true) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	}

	//TEXT-SLIDER
	if (('.text-slider').length>0) {
		$('.text-slider').slick({
			dots: true,
			arrows:true,
			infinite: false,
			fade: true,
			useTransform:true,
		});
	};

	//FB-INLINE
	$('.fb-inline').fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		maxWidth: 625,
		padding:0,
		beforeShow: function(){
		    $("body").css({'overflow-y':'hidden'});
		    if($(window).width() > 700){
		    	$("html").css({'padding-right':'17px'});
		    }
		    if($(window).width() < 700){
		    	$("body").css({'position': 'fixed'});
		    }
		},
		afterClose: function(){
		    $("body").css({'overflow-y':'auto'});
		    if($(window).width() > 700){
			    $("html").css({'padding-right':'0'});
			}
		    if($(window).width() < 700){
		    	$("body").css({'position': 'static'});
		    }
		},
		helpers : {
	        overlay : {
	            locked: false,
	        }
	    }
	});

	//FB-GALLERY
	$('.fb-gallery').fancybox({
        'titlePosition'     : 'inside',
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        openEffect : 'fade',
		closeEffect : 'fade',
        padding: 0,
        helpers: {
            overlay: {
              locked: false
            }
        },
        beforeShow: function(){
		    $("body").css({'overflow-y':'hidden'});
		    if($(window).width() > 700){
		    	$("html").css({'padding-right':'17px'});
		    }
		    if($(window).width() < 700){
		    	$("body").css({'position': 'fixed'});
		    }
		},
		afterClose: function(){
		    $("body").css({'overflow-y':'auto'});
		    if($(window).width() > 700){
			    $("html").css({'padding-right':'0'});
			}
		    if($(window).width() < 700){
		    	$("body").css({'position': 'static'});
		    }
		},
	});

	$('.popup-close').click(function(e){
		e.preventDefault();
	  	$.fancybox.close();
	});


	//PARTNERS-SLIDER
	if (('.partners__slider').length>0) {
		$('.partners__slider').slick({
			dots: false,
			arrows:true,
			infinite: true,
			useTransform:true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			    {
			      breakpoint: 950,
			      settings: {
			        dots: false,
					arrows:true,
					infinite: true,
					useTransform:true,
					slidesToShow: 3,
					slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 650,
			      settings: {
			        dots: false,
					arrows:true,
					infinite: true,
					useTransform:true,
					slidesToShow: 2,
					slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 450,
			      settings: {
			        dots: false,
					arrows:true,
					infinite: true,
					useTransform:true,
					slidesToShow: 1,
					slidesToScroll: 1,
			      }
			    }
			]
		});
	};

	//APPLICATION COUNT
	$("body").on("click",'.application__minus', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $("body").on("click",'.application__plus', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $("body").on("click",'.application__remove', function () {
        $(this).parents('.application__add--other').remove();
        return false;
    });

    $("body").on("click", ".application__add-link", function(e){
		e.preventDefault();
		$('.application__add').append(
			'<div class="application__add--other"> \
				<div class="application__title"> \
					<span>Еще один перечень необходимых запчастей</span> \
					<a href="#" class="application__remove"></a> \
				</div> \
				<div class="application__item"> \
					<div class="application__label">Заказной номер: <sup>*</sup></div> \
					<div class="application__input-wrap"> \
						<input type="text" class="application__input"> \
					</div> \
					<span class="application__msg">Небольшое пояснение что это</span> \
				</div> \
				<div class="application__item"> \
					<div class="application__label">Наименование: <sup>*</sup></div> \
					<div class="application__input-wrap"> \
						<input type="text" class="application__input"> \
					</div> \
				</div> \
				<div class="application__item"> \
					<div class="application__label">Кол-во:</div> \
					<div class="application__input-wrap"> \
						<a href="#" class="application__minus">-</a> \
						<input type="text" class="application__input application__input--count" value="1"> \
						<a href="#" class="application__plus">+</a> \
					</div> \
				</div> \
			</div>');
	})


	//MENU-MOBILE
	$('body').on('click','.menu-btn>a', function(e){
		e.preventDefault();
		$(this).parents('.menu-btn').toggleClass('active');
		$('.menu-btn__list').slideToggle();
		$('body').toggleClass('fixed');
	});

	//TEXT-SLIDER
	if (('.product-slider').length>0) {
		$('.product-slider').slick({
			dots: false,
			arrows:true,
			infinite: false,
			fade: true,
			useTransform:true,
			asNavFor: '.slider-nav',
		});
		$('.slider-nav').slick({
		  	slidesToShow: 4,
		  	slidesToScroll: 1,
		  	asNavFor: '.product-slider',
		  	dots: false,
		  	arrows:false,
		  	focusOnSelect: true,
		  	infinite:false,
		  	responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow:4,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                  }
                },
            ]
		});
		// $('.slider-nav > div').click(function() {
		//     $('.product-slider').slick('slickGoTo',$(this).index());
		// 	alert($(this).index());
		// })
	};

	//TABS DEFAULT
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();

		$('.video-item').each(function(index, element) {
			var video_item = $(this);
				width_init = video_item.outerWidth(),
			video_item.css({'height': width_init/2});
		});

		return false;
	});





	
});


$(window).on('resize', function(e) {
	$('.video-item').each(function(index, element) {
		var video_item = $(this);
			width_init = video_item.outerWidth(),
		video_item.css({'height': width_init/2});
	});
});


$(window).load(function(){
	
});

// functions
function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="about.html">About</a></li> \
		<li><a href="catalog.html">Catalog</a></li> \
		<li><a href="projects.html">Projects</a></li> \
		<li><a href="projects-inner(red).html">Projects-inner(red)</a></li> \
		<li><a href="projects-inner(green).html">Projects-inner(green)</a></li> \
		<li><a href="projects-inner(yellow).html">Projects-inner(yellow)</a></li> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="application.html">Application</a></li> \
		<li><a href="articles.html">Articles</a></li> \
	</ol> \
</div>');
