$(document).ready(function () {
  // 팝업 닫기
  $(".btn.ok, .btn.cancel, .btn_close_modal, .modal_btn_ok").on("click", function () {
      $('.modal, .modal_popup').fadeOut();
      $('body').css("overflow-y", "auto");
  });

  // 로그아웃 팝업
  $(".btn_logout").on("click", function () {
      $('#modalLogout').fadeIn();
      $('body').css("overflow-y", "hidden");
  });

  // 히스토리 삭제 팝업
  $('#law_user_aside .history_del, #law_user_aside .all_delete').click(function () {
      $('#modalDeleteHistory').fadeIn();
  });

  // 재상담요청 확인 팝업
  $('#chat_aside_area .chat_list span').click(function () {
      $('#modalReRequest').fadeIn();
  });

  // 채팅장 삭제 팝업
  $('.delete_chat').click(function () {
      $('#modalDeleteHistory').fadeIn();
  });

  // 새 질문 팝업
  $('.new_chat').click(function () {
      $('#modalNewChat').fadeIn();
  });

  // 비밀번호 변경 팝업
  $('.edit_password').click(function () {
      $('#modalEditPassword').fadeIn();
  });

  // 관심판례 삭제 팝업
  $('.bookmark').click(function () {
      $('#modalCaseLawDelete').fadeIn();
  });

  // 모바일 버거 메뉴
  $("header .mobile_header .btn_burger").on("click", function () {
      $(this).toggleClass("active");
  });

  // 판례 클릭 시 팝업
  $(".chat_ai .user_caselaw li").on("click", function () {
      $('#modalCaseLaw').fadeIn();
  });

  // 만족도 조사 완료 팝업
  $("#modalSatisfactionSurvey .modal_btn_ok").on("click", function () {
      $('#modalSatisfactionSurvey').fadeOut();
      $('#modalSatisfactionSurveyCom').fadeIn();
  });

  // 회원정보 수정 팝업
  $(".btn.signup.edit").on("click", function () {
      $('#modalInfoEditSuccess').fadeIn();
  });

  // 탈퇴 팝업
  $(".delete_account").on("click", function () {
      $('#modalDeleteAccount').fadeIn();
      $('body').css("overflow-y", "hidden")
  });

  // 탈퇴 확인 팝업
  $("#modalDeleteAccount .modal_btn_ok").on("click", function () {
      $('#modalDeleteAccountCom').fadeIn();
      $('#modalDeleteAccount').fadeOut();
      $('body').css("overflow-y", "hidden")
  });

  // ----------------------------------------------------- e: 팝업

  // 계정 옆 dropdown 클릭
  $(".dropdown_w").on("click", function () {
      $(this).toggleClass("active");
  });

  // 새 질문 버튼 애니메이션
  $('#law_user_aside .tit_box .new_chat').hover(
      function () {
          $(this).css({
              background: '#312d2a',
              transition: 'background 0.3s ease'
          });
      },
      function () {
          $(this).css({
              background: '#977f68',
              transition: 'background 0.3s ease'
          });
      },
  );

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

  // 사이드메뉴 히스토리 복사, 삭제 버튼
  $(window).resize(function () {
      if ($(window).width() > 992) {
          $('#law_user_aside .history ul li').hover(
              function () {
                  $(this).children('.h_buttons').css({
                      display: 'block'
                  });
              },

              function () {
                  $(this).children('.h_buttons').css({
                      display: 'none'
                  });
              }
          )
      } else { // 반응형
          $('#law_user_aside .history ul li').click(
              function () {
                  $(this).children('.h_buttons').css({
                      display: 'block'
                  });
                  $(this).siblings().find('.h_buttons').css({
                      display: 'none'
                  });
              }
          )
      }
  });

  // 사이드메뉴 히스토리 복사 팝업
  $('#law_user_aside .history ul li .h_copy').click(function () {
      var $CurrentLi = $(this).closest('li').find('.copy_popup_wrap'); // 현재 li 내부의 .copy_popup_wrap를 찾음

      $('#law_user_aside .history ul li .copy_popup_wrap').hide();
      $CurrentLi.show();
  });


  // 버튼 클릭 시 .copy_popup_wrap 숨김
  $('#law_user_aside .history ul li .copy_popup_wrap .copy_popup button').click(function () {
      $(this).closest('.copy_popup_wrap').css({
          display: 'none'
      });
  });

  // .copy_popup_wrap 바깥 클릭 시 팝업 숨기기
  $(document).click(function (event) {
      if (!$(event.target).closest('.copy_popup_wrap, .h_copy').length) {
          $('#law_user_aside .history ul li .copy_popup_wrap').hide();
      }
  });

  // 사이드메뉴 히스토리 클릭 시 background 컬러 바뀜
  $('#law_user_aside .history ul li').click(
      function () {
          $(this).addClass('on');
          $(this).siblings('li').removeClass('on');
      });


  // textarea 텍스트 내용길이에 따라 세로값 길어짐
  const DefaultHeight = 24;
  const ChatTextarea = document.querySelector('#law_user_content .chat_input textarea')

  ChatTextarea.oninput = (event) => {
      const target = event.target;

      target.style.height = 0;
      target.style.height = DefaultHeight + target.scrollHeight + 'px';
  };

  // chat_input focus 이벤트 
  $('#law_user_content .chat_input textarea').on('focusin',
      function () {
          $(this).parent('.chat_input').css({
              'box-shadow': '0px 8px 44px rgba(173, 155, 142, 0.2)',
              'border': '1px solid #fff',
              transition: 'all 0.3s ease'
          });
          $(this).siblings('.enter').css({
              opacity: 1,
              transition: 'opacity 0.3s ease'
          });
      }
  );
  $('#law_user_content .chat_input textarea').on('focusout',
      function () {
          $(this).parent('.chat_input').css({
              'box-shadow': 'none',
              'border': '1px solid #eeebe9',
              transition: 'all 0.3s ease'
          });
          $(this).siblings('.enter').css({
              opacity: 0.45,
              transition: 'opacity 0.3s ease'
          });
      }
  );

  // history input focus 이벤트
  $('#law_user_aside .history input').on('focusin', function () {
      $(this).parent('.his_input_wrapper').addClass('focused');
  });

  $('#law_user_aside .history input').on('focusout', function () {
      $(this).parent('.his_input_wrapper').removeClass('focused');
  });

  // PC일때 히스토리 리스트 텍스트 긴 경우 흘러가도록
  function HistoryHoverIn() {
      var ParentTxtWidth = $(this).width(); // 부모 요소의 너비
      var ChildTxtWidth = $(this).find('span').width(); // 자식 텍스트(span)의 너비

      if (ChildTxtWidth > ParentTxtWidth) {
          $(this).addClass('hover');
      }
  }

  function HistoryHoverOut() {
      $(this).removeClass('hover');
  }

  function HistoryHoverToggle(enable) {
      var elements = $('#law_user_aside .history ul li');
      if (enable) {
          elements.hover(HistoryHoverIn, HistoryHoverOut);
      } else {
          elements.off('mouseenter mouseleave');
      }
  }
  $(window).on('resize', function () {
      HistoryHoverToggle($(window).width() > 992);
  }).trigger('resize');

  // 사이드메뉴 히스토리 스크롤 할 때만 스크롤바 보이도록
  const scrollableElement = document.querySelector('#law_user_aside .history ul');
  scrollableElement.addEventListener('scroll', () => {
      scrollableElement.classList.add('show-scrollbar');

      // 일정 시간 후 스크롤바를 다시 숨김
      clearTimeout(scrollableElement.scrollTimeout);
      scrollableElement.scrollTimeout = setTimeout(() => {
          scrollableElement.classList.remove('show-scrollbar');
      }, 1000); // 1초 후 스크롤바 숨기기
  });

  // 사이드메뉴 닫기, 열기
  function toggleAside(sidebarStatus) {
      $('#law_user_aside').css({
          transform: sidebarStatus ? 'translateX(0)' : 'translateX(-416px)',
          transition: 'transform 0.8s ease'
      });

      // 화면의 너비가 993px 이상일 때만 marginLeft를 조정
      if ($(window).width() > 992) {
          $('#law_user_content .content_chat_wrap').css({
              marginLeft: sidebarStatus ? '416px' : '0px',
              transition: 'margin-left 0.8s ease'
          });
      }

      if ($(window).width() < 992) {
          $('.law_dim').css({
              opacity: sidebarStatus ? '1' : '0',
              visibility: sidebarStatus ? 'visible' : 'hidden',
              transition: 'all 0.8s ease'
          });
      }

      $('#aside_open').css({
          display: sidebarStatus ? 'none' : 'block'
      });
  }

  $('#aside_close').click(function () {
      toggleAside(false);
  });

  $('#aside_open').click(function () {
      toggleAside(true);
  });

  // 창 크기 변경 시 사이드바 상태 재조정
  $(window).resize(function () {
      if ($(window).width() > 992) {
          $('#aside_open').css({
              display: 'none'
          });

          $('#law_user_content .content_chat_wrap').css({
              marginLeft: '416px',
              transition: 'margin-left 0.8s ease'
          });

          if ($('#law_user_aside').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
              // 사이드바가 열려있으면

              $('.law_dim').css({
                  opacity: '0',
                  visibility: 'hidden'
              });
          }
      } else {
          // 992px 이하일 때 처리
          $('#law_user_content .content_chat_wrap').css({
              marginLeft: '0px'
          });
          // 사이드바가 닫혀 있으면 버튼 보이기
          $('#aside_open').css({
              display: 'block'
          });
          $('.law_dim').css({
              opacity: '0',
              visibility: 'hidden'
          });
      }
  });

  // 화면 크기 변경 시 사이드메뉴 위치 조정
  $(window).resize(function () {
      if ($(window).width() < 992) {
          $('#law_user_aside').css({
              transform: 'translateX(-416px)',
              transition: 'transform 0.3s ease'
          });
      } else {
          $('#law_user_aside').css({
              transform: 'translateX(0)',
              transition: 'transform 0.3s ease'
          });
      }
  });

  $('.law_dim').click(function () {
      $('#law_user_aside').css({
          transform: 'translateX(-416px)',
          transition: 'transform 0.5s ease'
      })

      $('.law_dim').css({
          visibility: 'hidden',
          opacity: '0',
          transition: 'visibility 0.5s ease'
      })

      $('#aside_open').css({
          display: 'block'
      });
  });

  //법률문서검토 바로가기 - 카테고리 선택 시 border 생김
  $('.chat_ai .doc_category li').click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
  });
});

// 태블릿, 모바일일때 페이지 처음 로드 시, 사이드메뉴 위치
$(document).ready(function () {
  if ($(window).width() < 992) {
      $('#law_user_aside').css({
          transform: 'translateX(-416px)',
      });
      $('#law_user_content .content_chat_wrap').css({
          marginLeft: '0'
      })
  } else {
      $('#law_user_aside').css({
          transform: 'translateX(0)'
      });
  }
});

//회원가입 - 거주지역 select
$(document).ready(function () {
  $('.signup_content .selected').click(function () {
      $(this).next('.sel_w').toggle();
      $(this).children('img').toggleClass('flipped');
  });

});