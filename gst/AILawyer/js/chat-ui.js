$(document).ready(function () {

  $('.decline_consultation').click(function () {
      $('#modalDeclineConsultation').fadeIn();
  });
  // 채팅창 열기
  $(".floating_btn").on("click", function () {
      $('.chat_aside_area').toggleClass("visible");
      $('.chat_aside.info').css('display', 'none');

      // chat_aside_area가 visible인 경우
      if ($('.chat_aside_area').hasClass('visible')) {
          $('#law_user_aside').css({
              'right': '0',
              'transition': 'transform 0.3s ease',
              'transform': 'translateX(-416px)'
          });
          $('.content_chat_wrap').css({
              'margin-left': '0px',
              'transition': 'margin-left 0.3s ease',
              'max-width': '1100px',
              'margin-right': '800px'
          });
          $('.chat_aside_area').css({
              'display': 'flex'
          });
          $('#aside_open').css({
              'display': 'block'
          });
          $('.floating_btn img').attr('src', 'http://test.s1.unipware.com/AILawyer/images/ico_chat_close.svg');
          $('.floating_btn p').text('채팅창 닫기');
          $('.floating_btn').css({
              'right': '850px'
          });

      } else {
          $('#law_user_aside').css({
              'transform': 'translateX(0)',
              'transition': 'transform 0.3s ease'
          });
          $('.content_chat_wrap').css({
              'margin-left': '416px',
              'transition': 'margin-left 0.3s ease',
              'max-width': '1710px',
              'margin-right': '0px'
          });
          $('.floating_btn img').attr('src', "http://test.s1.unipware.com/AILawyer/images/ico_reserv.svg");
          $('.floating_btn p').text('채팅창 열기');
          $('.floating_btn').css({
              'right': '60px'
          });
      }
  });

  // 채팅창 입장하기
  $('.chat_list li').click(function () {
      $('.chat_aside.init').css('display', 'none');
      $('.chat_aside.info').css('display', 'block');
  });
  $('.delete_chat').click(function (event) {
      event.stopPropagation();
  });
  $('#chat_aside_area .chat_list span').click(function (event) {
      event.stopPropagation();
  });

  // 채팅창 뒤로가기
  $('.back_to_chat_list').click(function () {
      $('.chat_aside.init').css('display', 'flex');
      $('.chat_aside.info').css('display', 'none');
  });

  // 채팅창 > 탭 선택(상담 상태)
  var firstLabel = $("#chat_aside_area .chat_area .tap_area label").first();
  firstLabel.addClass("active");

  var labelWidth = firstLabel.outerWidth();
  var labelPosition = firstLabel.position().left;

  $("#chat_aside_area .chat_area .tap_area .underline").css({
      "width": labelWidth + "px",
      "left": labelPosition + "px"
  });

  $("#chat_aside_area .chat_area .tap_area label").on("click", function () {
      $("#chat_aside_area .chat_area .tap_area label").removeClass("active");
      $(this).addClass("active");

      var labelWidth = $(this).outerWidth();
      var labelPosition = $(this).position().left;

      // 첫 번째 탭을 선택했는지 확인
      if ($(this).data("tab") === 0) {
          $("#chat_aside_area .chat_area .tap_area .underline").css({
              "width": labelWidth + "px",
              "left": labelPosition + "px"
          });
      } else {
          $("#chat_aside_area .chat_area .tap_area .underline").css({
              "width": labelWidth + "px",
              "left": (labelPosition + 20) + "px"
          });
      }
  });

  // 상담 채팅 > 상담 상태 탭 선택
  let currentTabIndex = 0;

  $("#chat_aside_area .tap_area label").on("click", function () {
      const newTabIndex = $(this).data('tab');

      if (newTabIndex !== currentTabIndex) {
          $("#chat_aside_area .tap_area label").removeClass("active");
          $(this).addClass("active");

          const $currentChatList = $('#chat_aside_area .tap_contents_area .chat_list').eq(currentTabIndex);
          const $newChatList = $('#chat_aside_area .tap_contents_area .chat_list').eq(newTabIndex);

          $currentChatList.css({
              transform: 'translateX(-100%)',
              opacity: 0,
              transition: 'transform 0.3s ease, opacity 0.3s ease'
          });

          $newChatList.css({
              transform: 'translateX(0)',
              opacity: 1,
              transition: 'transform 0.3s ease, opacity 0.3s ease'
          });

          setTimeout(() => {
              $currentChatList.removeClass('active');
              $newChatList.addClass('active');
          }, 300);

          currentTabIndex = newTabIndex;
      }
  });

  // 채팅창 버튼 선택
  $('.chat_aside_header button').click(function () {
      $('.chat_aside_header button').removeClass('active');
      $(this).addClass('active');

      if ($('.chat_aside_header button.info').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.info').addClass('active');
      } else if ($('.chat_aside_header button.search').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.search').addClass('active');
      } else if ($('.chat_aside_header button.file').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.file').addClass('active');
      } else if ($('.chat_aside_header button.image').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.image').addClass('active');
      } else if ($('.chat_aside_header button.stamp').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.stamp').addClass('active');
      } else if ($('.chat_aside_header button.pen').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.pen').addClass('active');
      } else if ($('.chat_aside_header button.exit').hasClass("active")) {
          $('.function_section').removeClass('active');
          $('.function_section.exit').addClass('active');
      }
  });

  // 채팅창 > 상세 검색
  $(".detail_search").on("click", function () {
      $('.chat_search_detail').toggleClass("active");
      if ($('.chat_search_detail').hasClass("active")) {
          $(this).text("상세 검색 닫기");
      } else {
          $(this).text("상세 검색");
      }
  });

  // 채팅창 > 이미지 보기
  $(".image_preview, .thumb_img_wrap").on("click", function () {
      $('#imageView').fadeIn();
  });
  
  // 토스트 메시지
  $(".btn_save").on("click", function () {
      const toastMessage = $(".toast_message");

      toastMessage.addClass("active");
      setTimeout(() => {
          toastMessage.removeClass("active");
      }, 1000);
  });


  // 툴팁 tooltip
  function updateTooltip() {
      if ($(window).width() > 992) {
          $('.law_user_tooltip_btn').hover(
              function () {
                  $(this).siblings('.law_user_tooltip').stop(true, true).fadeIn();
              },
              function () {
                  $(this).siblings('.law_user_tooltip').stop(true, true).fadeOut();
              }
          );
      } else {
          $('.law_user_tooltip').hide();
          $('.law_user_tooltip_btn').off('mouseenter mouseleave');
      }
  }

  // 정보 토글
  $(".basic > label, .request > label").on("click", function () {
      $(this).toggleClass("rotate"); // 회전 클래스 추가/제거
      $(this).next("div").slideToggle(); // label 다음에 오는 div를 접었다 펼쳤다
  });

  $(window).resize(updateTooltip);
  updateTooltip(); // 초기화

  $('#law_user_aside .history ul li .copy_popup_wrap .copy_popup button').click(function () {
      var $fadeTag = $(this).closest('li').find('.tool_copy_complete');

      $fadeTag.addClass('visible');

      setTimeout(function () {
          $fadeTag.removeClass('visible');
      }, 700);
  });

  $('.answer_options .law_user_tooltip_btn.option_copy, .content_container.chat_wrap .title_container button').click(function () {
      var $fadeOptionTag = $(this).siblings('.tool_copy_complete');

      $fadeOptionTag.addClass('visible');

      setTimeout(function () {
          $fadeOptionTag.removeClass('visible');
      }, 700);
  });

});