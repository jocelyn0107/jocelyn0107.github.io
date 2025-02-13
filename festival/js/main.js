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

$(window).on('load', function () {
    const introLogo = $('.header_logo');
    const introBg = $('.intro_section');
    const introBgBlk = $('.intro_black');

    // 브라우저의 자동 스크롤 저장 기능을 비활성화
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // 새로고침 시 강제로 최상단으로 이동 (딜레이 추가하여 확실하게 적용)
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
    // 인트로 화면 스크롤 방지
    $('body').addClass('no_scroll');
    introLogo.addClass('active');

    // 3초 후 인트로 종료 및 스크롤 가능하도록 변경
    setTimeout(() => {
        introBg.fadeOut(800, function () {
            $('header>.left_menus, header>.right_menus, .header_logo').addClass('on');
            $('body').removeClass('no_scroll');
        });
        introBgBlk.fadeOut();
    }, 3000);
});

AOS.init();

// advantage ani
const textWrappers = document.querySelectorAll('.ani_advantage');

function createScrollingText(wrapper) {
    for (let i = 0; i < 20; i++) {
        const textElement = document.createElement('div');
        textElement.classList.add('moving_text');
        textElement.textContent = 'ADVANTAGE';
        wrapper.appendChild(textElement);
    }
}
textWrappers.forEach(createScrollingText);

$(document).ready(function () {
    const sectionLayout = $('.top_text_content');
    const section02 = $('.section_02');
    const section03 = $('.section_03');
    const section04 = $('.section_04');
    const starLine = $('.star_line');
    const stars = $('.star_01');
    const sectionBottom = $('.section_02_bottom');
    const sectionBottomBg = $('.section_02_bottom_bg');
    const sectionWrap = $('.section_wrap');

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const scrollBottom = scrollTop + windowHeight; // 화면 하단의 스크롤 위치
        const section02Top = section02.offset().top;
        const section03Top = section03.offset().top;
        const section04Top = section04.offset().top;
        const bottomTop = sectionBottom.offset().top - windowHeight +
            100; // 화면에 보이기 시작하는 지점 +100
        const bottomEnd = sectionBottom.offset().top + sectionBottom.outerHeight() -
            windowHeight - 350; // 완전히 화면 하단에 닿았을 때 -350

        // sectionLayout 고정 처리
        if (scrollTop >= section02Top) {
            sectionLayout.addClass('fixed');
        } else {
            sectionLayout.removeClass('fixed');
        }

        // sectionLayout 숨김 & sectionBottomBg 효과 적용
        if (scrollTop >= bottomTop) {
            sectionLayout.addClass('hidden');
        } else {
            sectionLayout.removeClass('hidden');
        }

        // sectionBottom이 화면 맨 아래에 닿았을 때 'on' 추가
        if (scrollTop >= bottomEnd) {
            sectionBottomBg.addClass('on');
        } else {
            sectionBottomBg.removeClass('on');
        }

        // 화면 하단(scrollBottom)이 section03Top에 닿았을 때 'on' 제거
        if (scrollBottom >= section03Top + 100) {
            sectionBottomBg.removeClass('on');
        }

        if (scrollBottom >= section04Top) {
            starLine.addClass('down');
            setTimeout(() => {
                stars.addClass('show');
            }, 970);
        } else {
            starLine.removeClass('down');
            stars.removeClass('show');
        }

    });

    // history
    const historySection = $('.history');

    historySection.on('scroll', function () {
        const scrollTop = $(this).scrollTop();

        $('.history .year').each(function () {
            const elementTop = $(this).position().top;

            if (scrollTop >= elementTop) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

});

// 현재 시간을 가져와 포맷하는 함수
function updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // 시
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 분
    const formattedTime = `${hours}:${minutes}`;
    document.getElementById('currentTime').textContent = formattedTime;
}
setInterval(updateCurrentTime, 1000);

updateCurrentTime();