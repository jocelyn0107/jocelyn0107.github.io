// 헤더 불러오고 해당 페이지에 맞게 메뉴 하이라이트
$('#header').load('header.html', function(){
  const currentPath = window.location.pathname.split('/').pop();
  $('#header nav ul li a').each(function(){
    const linkPath = $(this).attr('href');
    if(linkPath === currentPath){
      $(this).parent('li').addClass('on');
    }
  });
});
$('#modalLogout').load('logout.html');

$(function(){

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
    closeModal($(this).closest('.modal_popup'));
  });
  $(document).on('click', '.modal_popup', function(e){
    if ($(e.target).closest('.modal_wrap').length) return;
    closeModal($(this));
  });

  // mobile 버거 메뉴 보여주기
  function isMobile(){
    return window.innerWidth <= 768;
  }
  // 버거 클릭
  $(document).on('click', '.btn_burger', function(e){
    if (!isMobile()) return;
    e.stopPropagation();
    $(this).toggleClass('on');
    $('.header_nav nav').stop(true,true).slideToggle(200);
  });

  // nav 영역 클릭 시 닫힘 방지
  $(document).on('click', '.header_nav nav', function(e){
    if (!isMobile()) return;
    e.stopPropagation();
  });

  // 외부 클릭 시 닫기
  $(document).on('click', function(){
    if (!isMobile()) return;
    $('.header_nav nav').stop(true,true).slideUp(200);
    $('.btn_burger').removeClass('on');
  });

  // resize 시 PC 전환 정리
  let resizeTimer;
  $(window).on('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
      if (!isMobile()){
        $('.header_nav nav').removeAttr('style');
        $('.btn_burger').removeClass('on');
      }
    }, 200);
  });

  // table order by
  $('.table .align figure').on('click', function(){
    const $current = $(this);
    $('.table .align figure').not($current).removeClass('active');
    $current.toggleClass('active');
  });

  // tab_area
  $('.tab_area div').on('click', function(){
    const $this = $(this);
    const index = $this.index() - 1;

    $this.addClass('active').siblings('div').removeClass('active');

    const tabWidth = $this.outerWidth();
    $('.tab_indicator').css({
      left: 4 + (tabWidth * index)
    });
    // tab content 변경
    $('.tab_con').removeClass('active').hide();
    $('.tab_con').eq(index).addClass('active').show();
  });

  // filter
  $('.btn_up').on('click', function(){

    const $wrap = $('.filter_wrap');
    const $img  = $(this).find('img');

    $wrap.toggleClass('is_open');

    if ($wrap.hasClass('is_open')){
      $img.attr('src','../img/icon_filter.svg');
      $wrap.css('align-items','center');
    } else {
      $img.attr('src','../img/icon_arrow_db_up.svg');
      $wrap.css('align-items','');
    }

  });

  // selectbox
  $('.custom_select').each(function () {
    var classes = $(this).attr('class'),
      id = $(this).attr('id'),
      name = $(this).attr('name');
    var template = '<div class="' + classes + '">';
    template += '<span class="custom_select_trigger">' + $(this).attr('placeholder') + '</span>';
    template += '<div class="custom_options">';
    $(this).find('option').each(function () {
      template += '<span class="custom_option ' + $(this).attr('class') + '" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom_select_wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $('.custom_select_trigger').on('click', function () {
    $('html').one('click', function () {
      $('.custom_select').removeClass('opened');
    });
    $(this).parents('.custom_select').toggleClass('opened');
    event.stopPropagation();
  });
  $('.custom_option').on('click', function () {
    $(this).parents('.custom_select_wrapper').find('select').val($(this).data('value'));
    $(this).parents('.custom_options').find('.custom_option').removeClass('selection');
    $(this).addClass('selection');
    $(this).parents('.custom_select').removeClass('opened');
    $(this).parents('.custom_select').find('.custom_select_trigger').text($(this).text());
  });

});





// 모달 닫기
function closeModal($modal){
  $modal.removeClass('active');

  setTimeout(() => {
    $modal.fadeOut(200);
  }, 300);

  $('body').removeClass('no_scroll');
}
