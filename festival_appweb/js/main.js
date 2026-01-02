$(document).ready(function(){
  $('#tabStamp').load('tab_stamp.html');
  $('#tabCourse').load('tab_course.html', function(){
    initProgress();
  });
  $('#tabReceipt').load('tab_receipt.html');
  $('#tabInfo').load('tab_info.html');
  $('#tabComment').load('tab_comment.html');
  $('#tabReceiptAll').load('tab_receipt_all.html');
  $('#tabReceiptMy').load('tab_receipt_my.html');
  $('#menu').load('menu.html');

  // 모달 열기 (모든 버튼 공통)
  $(document).on('click', '[data-modal]', function(){
    const targetModal = $(this).data('modal');
    const $modal = $(targetModal);

    $modal.fadeIn(200, function(){
      $modal.addClass('active');
    });

    $('body').addClass('no_scroll');
  });

  // 모달 닫기
  $(document).on('click', '.btn_modal_close', function(){
    const $modal = $(this).closest('.modal_popup');

    $modal.removeClass('active');

    setTimeout(() => {
      $modal.fadeOut(200);
    }, 300);

    $('body').removeClass('no_scroll');
  });
  $('.modal_popup').on('click', function(e){
    if ($(e.target).is('.modal_popup')) {
      $(this).find('.btn_modal_close').trigger('click');
    }
  });

  // 헤더
  const START = 50;
  const handleHeaderClass = () => {
    const scrollTop = $(window).scrollTop();
    if (!$('body').hasClass('no_scroll')) {
      $('header').toggleClass('on', scrollTop > START);
    }
  };
  $(window).on("scroll", handleHeaderClass);
  handleHeaderClass();

  // 메뉴
  $('#hamburger').on('change', function(){
    if ($(this).is(':checked')) {
      $('.mobile_menu').addClass('open');
    } else {
      $('.mobile_menu').removeClass('open');
    }
  });
  // 뒤로가기 포함, 페이지가 다시 보여질 때
  window.addEventListener('pageshow', function () {
    $('#hamburger').prop('checked', false);
    $('.mobile_menu').removeClass('open');
  });

  // 탭
  let currentTabIndex = 0;

  $('.tab_menu>div').on('click', function(){
    const newTabIndex = $(this).data('tab');

    if(newTabIndex !== currentTabIndex){
      $(this).siblings().removeClass('on');
      $(this).addClass('on');

      const $currentTabList = $('.tab_contents .tab_con').eq(currentTabIndex);
      const $newTabList = $('.tab_contents .tab_con').eq(newTabIndex);

      $currentTabList.css({
        transform: 'translateX(-100%)',
        opacity: 0,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      });

      $newTabList.css({
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      });

      setTimeout(() => {
        $currentTabList.removeClass('on');
        $newTabList.addClass('on');
      }, 300);

      currentTabIndex = newTabIndex;

      if(newTabIndex === 0){
        $('.float_menu').fadeIn();
        $('.send_area').hide();
        $('.btn_receipt').hide();
      } else if(newTabIndex === 1){
        $('.float_menu').fadeOut();
        $('.send_area').hide();
        $('.btn_receipt').show();
      } else if(newTabIndex === 3){
        $('.float_menu').fadeOut();
        $('.send_area').show();
        $('.btn_receipt').hide();
      } else{
        $('.float_menu').fadeOut();
        $('.send_area').hide();
        $('.btn_receipt').hide();
      }
    }
  });

  // 코스 접고 펼치고
  $(document).on('click', '.btn_arrow', function () {
    const $courseArea = $(this).closest('.course_area');
    const $courseCon = $courseArea.next('.course_con');
  
    $courseCon.stop().slideToggle(300);
    $(this).toggleClass('on');
  });


});

