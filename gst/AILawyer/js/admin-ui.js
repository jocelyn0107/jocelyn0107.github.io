$(document).ready(function () {

  // ----------------------------------------------------- s: 팝업
  // 팝업 닫기
  $(".btn.ok, .btn.cancel, .btn_close_modal, .modal_btn_ok").on("click", function () {
      $('.modal, .modal_popup').fadeOut();
      $('body').css("overflow-y", "auto");
  });

  $(".btn.ok, .btn.cancel, .btn_close_modal").on("click", function () {
      $('.modal').fadeOut();
      $('body').css("overflow-y", "hidden");
  });
  $(".logout").on("click", function () {
      $('#modalLogout').fadeIn();
      $('body').css("overflow-y", "hidden");
  });
  $(".btn_delete").on("click", function () {
      $('#modalDelete').fadeIn();
      $('body').css("overflow-y", "hidden");
  });
  $("dd button").on("click", function (event) {
      // event.preventDefault();
      $(this).toggleClass("active");
  });
  $('.state').on('click', function () {
      $('.state_area').toggleClass('active');
  });
  $('.state_sel_w button').on('click', function () {
      var selectedText = $(this).text();
      $('.state').text(selectedText);
      $('.state_area').removeClass('active');
  });
  $("main>section table tbody tr td").on("click", function () {
      $('#modalCounselDetail').fadeIn();
      $('body').css("overflow-y", "hidden");
  });


  $(".btn_copy").on("click", function () {
      var $bubble = $(this).siblings(".bubble");
      $bubble.addClass("show");
      setTimeout(function () {
          $bubble.removeClass("show");
      }, 1000);
  });
  $(".btn_lawyer_edit").on("click", function () {
      $(".lawyer_add").addClass("active");
      $(".lawyer_detail").removeClass("active");
  });
  $(".btn.main.add").on("click", function () {
      $(".lawyer_add").addClass("active");
      $(".lawyer_detail, .lawyer_init").removeClass("active");
      $("aside").addClass("show");
      $("main").addClass("with_aside").removeClass("full");
      $(this).addClass("active");
  });



  $('.main_contents table .array').click(function () {
      $(this).children('img').toggleClass('flipped');
  });


  $('.info_cont .select').click(function () {
      $(this).children().find('img').toggleClass('flipped');
      $(this).children('ul').toggle();
  });


  $('.btn_logout_mobile').click(function () {
      $(this).children('.dropmenu').slideToggle(200);
  });

  $('.aside_contents .info_wrap .search').click(function () {
      $('#modalCustomerImgView').fadeIn();
  });


  $("table tr:not(:first, .no_result_cell)").off("click").on("click", function () {
      $("table tr").removeClass("active");
      $("aside").addClass("show");
      $("main").addClass("with_aside").removeClass("full");
      $(this).addClass("active");
      $(".lawyer_init").removeClass("active");
      $(".lawyer_add").removeClass("active");
      $(".lawyer_detail").addClass("active");
  });

  $(".ico_close, .btn_lawyer_close").off("click").on("click", function () {
      $("aside").removeClass("show");
      $("main").addClass("full").removeClass("with_aside");
  });

  $("aside").off('transitionend webkitTransitionEnd oTransitionEnd').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
      if ($("aside").hasClass("show")) {
          $("footer").css("width", "calc(100% - 350px)");
      } else {
          $("footer").css("width", "100%");
      }
  });


  // (관리자) 변호사 회원관리 - 셀렉트 값 선택 반영
  $('.info_wrap .select ul li').on('click', function () {
      var selectedText = $(this).text();

      $(this).closest('.info_wrap .select').find('p').contents().first()[0].textContent = selectedText;
  });

  $('.info_cont .select ul li').on('click', function () {
      var selectedText = $(this).text();

      $(this).closest('.info_cont .select').find('p').contents().first()[0].textContent = selectedText;
  });


  // (관리자) 변호사 회원관리 - 화면 크기에 따른 aside 상태
  // 페이지 로드 시 현재 화면 크기에 따라 초기 상태 설정
  if ($(window).width() <= 1200) {
      $('aside').removeClass('show');
  } else {
      $('aside').addClass('show');
  }

  // 화면 크기가 변할 때마다 적용
  $(window).on('resize', function () {
      if ($(window).width() <= 1200) {
          $('aside').removeClass('show');
      } else {
          $('aside').addClass('show');
      }
  });

  //  (관리자) 변호사 회원관리 - main 드래그로도 스크롤 가능
  // scrollable-div 요소 선택
  const scrollDiv = document.querySelector('.scrollable-div');
  if (scrollDiv) {
      let isDragging = false;
      let startX;
      let scrollLeft;

      scrollDiv.addEventListener('mousedown', (e) => {
          isDragging = true;
          startX = e.pageX - scrollDiv.offsetLeft;
          scrollLeft = scrollDiv.scrollLeft;
      });

      scrollDiv.addEventListener('mouseleave', () => {
          isDragging = false;
      });

      scrollDiv.addEventListener('mouseup', () => {
          isDragging = false;
      });

      scrollDiv.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - scrollDiv.offsetLeft;
          const walk = (x - startX) * 2; // 드래그 속도 조절 (여기서 2는 속도 배율)
          scrollDiv.scrollLeft = scrollLeft - walk;
      });
  }

  // (관리자) 변호사 회원관리 - 화면 크기에 따른 main 태그 with_aside 클래스 여부 
  $(document).ready(function () {
      // 페이지 로드 시 현재 화면 크기에 따라 초기 상태 설정
      if ($(window).width() <= 1200) {
          $('aside').removeClass('show');
          $('main').removeClass('with_aside');
      } else {
          $('aside').addClass('show');
          $('main').addClass('with_aside');
      }

      // 화면 크기가 변할 때마다 적용
      $(window).on('resize', function () {
          if ($(window).width() <= 1200) {
              $('aside').removeClass('show');
              $('main').removeClass('with_aside');
          } else {
              $('aside').addClass('show');
              $('main').addClass('with_aside');
          }
      });
  });

  // (관리자) 변호사 및 사용자 회원관리 - 계정 제한 사유 선택 모달 / 계정 제한 사유 나타남
  $('.refuse_reason').click(function () {
      $('#modalDeclineConsultation').fadeIn();
      $('.limits_reason').show();
  });

  $('.limits_reason_edit').click(function () {
      $('#modalDeclineConsultation').fadeIn();
  });

  $(".dropdown_w").on("click", function () {
      $(this).toggleClass("active");
  });

  // (관리자) 변호사 및 사용자 회원관리 - 계정 제한 선택 시 사유 사라짐
  $('.refuse_reason').closest('div').siblings().find('input').click(function () {
      $(this).closest('dl').siblings('.limits_reason').hide();
  });



  // 데이터 통계 > 기간 설정
  const buttons = document.querySelectorAll('.period button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
      });
  });

  //  데이터 통계 > 접었다 폈다
  $(".section .title").on("click", function () {
      var $img = $(this).find("img"); 
      $(this).siblings("div.contents").slideToggle(); 
      $img.toggleClass("reverse");
  });

  // 데이터 통계 > 탭 active
  $('.review_tab li').click(function () {
      if (!$(this).hasClass('active')) { 
          $('.review_tab li').removeClass('active'); 
          $(this).addClass('active'); 
      }
  });
  

  // 데이터 통계 > 만족도 평가 aside 활성화
  $('.btn_satisfaction').click(function () {
      $('#reviewAside').addClass('open');
      $('main.with_aside.data section').addClass('open');
  });

  $('#reviewAside .close').click(function () {
      $('#reviewAside').removeClass('open');
      $('main.with_aside.data section').removeClass('open');
  });
  


});