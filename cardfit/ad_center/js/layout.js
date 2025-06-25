$(document).ready(function () {
  // 모달
  $('.btn_modal_open').on('click', function () {
    $('body').addClass('hidden_scroll');
  });
  $('.btn_modal_close').on('click', function () {
    $('.modal_popup').hide();
    $('body').removeClass('hidden_scroll');
  });

  $('.btn_contact_check').on('click', function () {
    $('#modalWarning').fadeIn();
  });
  $('.modal_service').on('click', function () {
    $('#modalService').fadeIn();
  });
  $('.modal_privacy').on('click', function () {
    $('#modalPrivacy').fadeIn();
  });
  $('.btn_logout').on('click', function () {
    $('#modalLogout').fadeIn();
  });
  $('.btn_withdrawal').on('click', function () {
    $('#modalWithdrawal').fadeIn();
  });
  $('.btn_mileage_button').on('click', function () {
    $('#modalMileageWarning').fadeIn();
  });
  $('.btn_guide').on('click', function () {
    $('#modalGuide').fadeIn();
    currentIndex = 0;
    showStep(currentIndex);
  });


  // 모바일 메뉴
  $('.mobile_btn input[id="hamburger"]').on('change', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('hidden_scroll');
    } else {
      $('body').removeClass('hidden_scroll');
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

  //all checks
  $('.join_check_all').click(function () {
    if ($('.join_check_all').is(':checked'))
      $('.check_box input[name=joinAgree]').prop('checked', true);
    else
      $('input[name=joinAgree]').prop('checked', false);
  });
  $('.check_box input[name=joinAgree]').click(function () {
    var total = $('.check_box input[name=joinAgree]').length;
    var checked = $('.check_box input[name=joinAgree]:checked').length;
    if (total != checked)
      $('.join_check_all').prop('checked', false);
    else
      $('.join_check_all').prop('checked', true);
  });

  // guide
  const $steps = $('.guide_wrap');
  let currentIndex = 0;

  function showStep(index) {
    $steps.removeClass('active').hide();
    $steps.eq(index).addClass('active').css('display', 'grid');

    // 버튼 상태 업데이트
    $('.btn_prev').toggleClass('d_none', index === 0);
    $('.btn_next').text(index === $steps.length - 1 ? '닫기' : '다음');
  }

  // 다음 버튼 클릭 시
  $('.btn_next').on('click', function () {
    if (currentIndex < $steps.length - 1) {
      currentIndex++;
      showStep(currentIndex);
    } else {
      $('#modalGuide').hide(); // 마지막이면 닫기
    }
  });

  // 이전 버튼 클릭 시
  $('.btn_prev').on('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      showStep(currentIndex);
    }
  });

  // 탭메뉴
  $('.tab_menu_area > div').on('click', function(){
    const index = $(this).index(); // 클릭된 메뉴의 순번

    $(this).addClass('active').siblings().removeClass('active');
    $('.tab_con').removeClass('active').hide();
    $('.tab_con').eq(index).addClass('active').show();
  });
});