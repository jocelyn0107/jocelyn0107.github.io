// 헤더
const START = 50;
const handleHeaderClass = () => {
    const scrollTop = $(window).scrollTop();
    if (!$('body').hasClass('no_scroll')) {
        $('header').toggleClass('on', scrollTop > START);
        $('.header_logo').toggleClass('header_move', scrollTop > START);
    }
};
$(window).on('scroll', handleHeaderClass);
handleHeaderClass();

AOS.init();
$(document).ready(function () {
    // 모바일
    $('.hamburger').on('click', function () {
        $('.mo_menu_wrap').addClass('on');
        $('body').addClass('no_scroll');
    });
    $('.btn_close').on('click', function () {
        $('.mo_menu_wrap').removeClass('on');
        $('body').removeClass('no_scroll');
    });

    // 모달
    $('.btn_contact, .mo_btn_contact').on('click', function () {
        $('#modalContact').fadeIn();
        $('body').addClass('no_scroll');
    });

    $('.btn_signup_submit').on('click', function () {
        $('#modalSignUpComplete').fadeIn();
        $('body').addClass('no_scroll');
    });

    $('.btn_change_pw_submit').on('click', function () {
        $('#modalChangePwComplete').fadeIn();
        $('body').addClass('no_scroll');
    });

    $('.btn_board_write').on('click', function () {
        $('#modalWriteComplete').fadeIn();
        $('body').addClass('no_scroll');
    });

    $('.btn_modify_delete, .delete').on('click', function () {
        $('#modalDelete').fadeIn();
        $('body').addClass('no_scroll');
    });
    
    // 모달 닫았을 때
    $('.modal_close, .btn_modal_close').on('click', function () {
        $('.modal_popup').fadeOut();
        $('body').removeClass('no_scroll');
    });

    $('header>.left_menus, header>.right_menus, .header_logo').addClass('on');
    $('.iphone_01, .iphone_02, .slogan, .login_form, .signup_form, .title, .find_pw_form, .change_pw_form').addClass('on');

    // 가격 더 보기 클릭 시
    $('.price_wrap .container .box .content button').on('click', function () {
        $(this).hide();
        $(this).siblings('p').hide();
        $(this).parents().parents().addClass('click');
    });

    // 정렬
    $('.board_d_02 .detail_comments_area .top .sort>div').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // 셀렉박스
    $(".select > .sel:not(.disable)").on("click", function () {
        $(this).parent().toggleClass("active");
    });
    $(".lSel button").on("click", function () {
        var selectedText = $(this).text();
        $(this).parent().parent().removeClass("active");
        var $selButton = $(this).parent().prev();
        $selButton.text(selectedText);
    });

    // 수정 버튼 클릭 시 댓글 창
    $('.comment_list .btn_modify_comment').on('click', function(){
        $(this).parent().addClass('d_none');
        $(this).parent().parent().siblings('.comment').addClass('d_none');
        $(this).parent().parent().siblings('.date_recomment_area').addClass('d_none');
        $(this).parent().parent().siblings('.comment_modify').addClass('d_block');
    });

    // 라인 , 별 애니메이션
    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const scrollBottom = scrollTop + windowHeight; // 화면 하단의 스크롤 위치

        $('.about_03').each(function () {
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

        $('.price_02').each(function () {
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

// 가격
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("move"); // 화면에 보이면 move 추가
            }
        });
    }, {
        threshold: window.innerWidth <= 768 ? 0 : 0.3 // 768px 이하일 때 threshold 0으로 설정
    });

    boxes.forEach(box => observer.observe(box));
});