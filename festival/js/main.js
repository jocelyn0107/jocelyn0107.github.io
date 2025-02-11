$(window).on('load', function () {
    const introLogo = $('.header_logo');
    const introBg = $('.intro_section');

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
    // 인트로 로고 활성화
    introLogo.addClass('active');

    // 3초 후 인트로 종료 및 스크롤 가능하도록 변경
    setTimeout(() => {
        introBg.fadeOut(800, function () {
            $('header>.left_menus, header>.right_menus, .header_logo').addClass('on');
            $('body').removeClass('no_scroll');
        });
    }, 3000);
});