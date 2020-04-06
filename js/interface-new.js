// NEW
$('body').on('click','.js-page-aside__toggle', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.page-aside-list').slideToggle(150);
});
// NEW
$('body').on('click','.js-menu-btn__link--toggle', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.menu-list').slideToggle(150);
});

//ACCORDEON
$("body").on("click", ".accordeon__link", function(e){
    e.preventDefault();
    $(this).parents('.accordeon__item').toggleClass('active');
    $(this).next('.accordeon__info').slideToggle(150);
});

//MENU_TOGGLE
$("body").on("click", ".js-page-header-toggle__link", function(e){
    e.preventDefault();
    $('.page-header-toggle-view').slideToggle(250);
});
$(document).click(function (e){ // событие клика по веб-документу
    var div = $(".page-header-toggle"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.page-header-toggle-view').slideUp(250);
    }
});

$("body").on("click", ".js-page-header-toggle-cat__link", function(e){
    e.preventDefault();
    $('.page-header-toggle-cat__link').removeClass('active');
    $(this).addClass('active');

    var menu = $(this).data('menu');
    $(".page-header-toggle-view-menu").addClass('dnone');
    $("#menu"+menu).removeClass('dnone');
});


//MAIN SLIDER
if ($('.index-top-slider').length>0) {
    $('.index-top-slider').slick({
        infinite: false,
        slidesToShow: 1,
        fade: true,
        lazyLoad: 'progressive',
        arrows:false,
        useTransform:true,
        equalizeHeight: false,
        "accessibility": false,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover:false,
    });

    $('.index-top-add__item').each( function( i ) {
        $('.index-top-add__item.slide-' + i).click(function(){
            $('.index-top-add__item').removeClass('active');
            $(this).addClass('active');
            $('.index-top-slider').slick('slickGoTo', i);
        })
    })

    $('.index-top-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var next = nextSlide; 
        $('.index-top-add__item').removeClass('active');
        $('.index-top-add__item.slide-' + next).addClass('active');
    });
}


$(document).ready(function() {
    if ($('.video-item').length>0) {
        $('.video-item').each(function(index, element) {
            var video_item = $(this);
                width_init = video_item.outerWidth(),
            video_item.css({'height': width_init/2});
        });
    }
   
});