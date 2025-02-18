// 헤더
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

    // 컨택트
    $('.btn_contact, .mo_btn_contact').on('click', function () {
        $('#modalContact').fadeIn();
        $('body').addClass('no_scroll');
    });

    // 모달 닫았을 때
    $('.modal_close').on('click', function () {
        $('.modal_popup').fadeOut();
        $('body').removeClass('no_scroll');
    });

    $('header>.left_menus, header>.right_menus, .header_logo').addClass('on');
    $('.iphone_01, .iphone_02, .slogan').addClass('on');

    // 가격 더 보기 클릭 시
    $('.price_wrap .container .box .content button').on('click', function () {
        $(this).hide();
        $(this).siblings('p').hide();
        $(this).parents().parents().addClass('click');
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

    // 탭메뉴
    const tabs = document.querySelectorAll(".tab");
    const tabBackground = document.querySelector(".tab_background");
    const boardLists = document.querySelectorAll('.board_list');
    const boardContainer = document.querySelector(".board_container");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            tabBackground.style.transform = `translateX(${index * 100}%)`;

            boardLists.forEach(list => list.classList.remove('active'));
            // 클릭된 탭에 해당하는 board_list에 active 클래스 추가
            boardLists[index].classList.add('active');
            // board_list 슬라이드 이동
            boardContainer.style.transform = `translateX(-${index * 100}%)`;
        });
    });

    // 초기 상태 설정
    tabs[0].classList.add("active");
});