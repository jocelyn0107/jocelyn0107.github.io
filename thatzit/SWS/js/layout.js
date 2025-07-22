$(document).ready(function(){
  // 모달
  $('.btn_modal_open').on('click', function () {
    $('body').addClass('hidden_scroll');
  });
  $('.btn_modal_close').on('click', function () {
    $('.modal_popup').hide();
    $('body').removeClass('hidden_scroll');
  });


  $('.btn_logout').on('click', function () {
    $('#modalLogout').fadeIn();
  });
  $('.img_preview_hover').on('click', function () {
    $('#modalImg').fadeIn();
  });

  // .location_area 안의 div개수가 16개보다 많아지면 .login_area 영역 늘리기
  let locationCount = $('.location_area div').length;
  let $loginArea = $('.login_area');
  
  $loginArea.removeClass('middle long longest');
  
  if (locationCount > 48) {
    $loginArea.addClass('longest');
  } else if (locationCount > 32) {
    $loginArea.addClass('long');
  } else if (locationCount > 16) {
    $loginArea.addClass('middle');
  }

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
  $('.custom_select.disabled').each(function () {
    $(this).find('.custom_select_trigger').addClass('dis');
  });

  // 탭
  $('.tab_area > div').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    const index = $(this).index();
    $('.tab_contents').removeClass('on');
    $('.tab_contents').eq(index).addClass('on');
  });

  // ? 클릭 시 설명 보여주기
  $('.data_summary_area .title_w img').on('click',function(){
    $(this).parent().parent().next('.question_box').toggleClass('show');
  });
  $('.icon_question').on('click', function(){
    $('.question_box').toggleClass('show');
  });

  // 폴더 모양 탭
  $('.folder_tab_area').each(function () {
    const $tabArea = $(this);

    $tabArea.find('.folder_tab_w').on('click', function () {
      $tabArea.find('.folder_tab_w > div').removeClass('active');
      $(this).children('div').addClass('active');

      // 이 탭 그룹에 대응되는 콘텐츠 영역 찾기
      const $conArea = $tabArea.next('.floder_con_area');
      const index = $(this).index();

      $conArea.find('.floder_con').removeClass('on');
      $conArea.find('.floder_con').eq(index).addClass('on');
    });
  });

  // 전체, 성별, 연령별, 동네별 탭
  $('.tab_round > div').on('click', function () {
    const $this = $(this);
    const $tabGroup = $this.closest('.tab_contents'); // 그룹 범위 좁힘
    const $tabButtons = $tabGroup.find('.tab_round > div');
    const $tabValues = $tabGroup.find('.tab_values');
    const $tabContents = $tabGroup.find('.tab_value');
  
    const index = $this.index();
  
    // 탭 버튼 active 처리
    $tabButtons.removeClass('active');
    $this.addClass('active');
  
    // 탭 내용 on 처리
    $tabContents.removeClass('on');
    const $currentTabContent = $tabContents.eq(index);
    $currentTabContent.addClass('on');
  
    // 체크박스 개수에 따라 클래스 조정
    const checkCount = $currentTabContent.find('.checkbox').length;
    $tabValues.removeClass('sm md lg mt_3');
  
    if (checkCount === 0) {
      // 체크박스 없으면 mt_3 제거
      return;
    } else if (checkCount > 10) {
      $tabValues.addClass('lg mt_3');
    } else if (checkCount > 3) {
      $tabValues.addClass('md mt_3');
    } else {
      $tabValues.addClass('sm mt_3');
    }
  });

  $('.table .arrow').on('click', function(){
    $(this).toggleClass('active');
  });

  $('.btn_filter').on('click', function(){
    $('.filter_area').toggleClass('on');
  });

  // all checks  .checkbox input[name=tableChecks]
  $('.check_all').on('click', function(){
    if($('.check_all').is(':checked')){
      $('input[name=tableChecks]').prop('checked',true);
    } else{
      $('input[name=tableChecks]').prop('checked',false);
    }
  });
  $('td input[name=tableChecks]').on('click', function(){
    var total = $('input[name=tableChecks]').length;
    var checked = $('input[name=tableChecks]:checked').length;
    if(total != checked){
      $('.check_all').prop('checked', false);
    } else{
      $('.check_all').prop('checked', true);
    }
  });
  
  


  
});