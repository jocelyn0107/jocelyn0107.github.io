// header
const START = 50;
const handleHeaderClass = () => {
    const scrollTop = $(window).scrollTop();
    if (!$('body').hasClass('no_scroll')) {
        $('header').toggleClass('on', scrollTop > START);
        $('.header_logo').toggleClass('header_move', scrollTop > START);
    }
};
$(window).on("scroll", handleHeaderClass);
handleHeaderClass();

$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.mo_menu_wrap').addClass('on');
        $('body').addClass('no_scroll');
    });
    $('.btn_close').on('click', function () {
        $('.mo_menu_wrap').removeClass('on');
        $('body').removeClass('no_scroll');
    });
});

$(document).ready(function(){

});