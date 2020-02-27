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

$("body").on("click", ".js-page-header-toggle-cat__link", function(e){
    e.preventDefault();
    $('.page-header-toggle-cat__link').removeClass('active');
    $(this).addClass('active');

    var menu = $(this).data('menu');
    $(".page-header-toggle-view-menu").addClass('dnone');
    $("#menu"+menu).removeClass('dnone');
});