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
AOS.init();
$(document).ready(function(){
    $('header>.left_menus, header>.right_menus, .header_logo').addClass('on');
    $('.iphone_01, .iphone_02, .slogan').addClass('on');

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const scrollBottom = scrollTop + windowHeight; // 화면 하단의 스크롤 위치
        
        $('.about_03').each(function(){
            const about03Top = $(this).offset().top;
            const starLine = $(this).find('.star_line');
            const stars = $(this).find('.star_01');

            if (scrollBottom >= about03Top) {
                starLine.addClass('down');
                setTimeout(() => {
                    stars.addClass('show');
                }, 970);
            } else {
                starLine.removeClass('down');
                stars.removeClass('show');
            }
        });

        $('.price_02').each(function(){
            const price02Top = $(this).offset().top;
            const starLine = $(this).find('.star_line');
            const stars = $(this).find('.star_01');

            if (scrollBottom >= price02Top) {
                starLine.addClass('down');
                setTimeout(() => {
                    stars.addClass('show');
                }, 970);
            } else {
                starLine.removeClass('down');
                stars.removeClass('show');
            }
        });
    });
});
