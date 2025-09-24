$(document).ready(function(){
  $('header').load('header.html');
  $('footer').load('footer.html');
  $('#float').load('float_menu.html');
  $('#modalContact').load('modal_contact.html');

  $(document).on('click', '.btn_contact, .float_contact', function () {
    $('#modalContact').fadeIn();
    $('body').addClass('hidden_scroll');
  });
  $(document).on('change', '#hamburger', function () {
    $('body').toggleClass('hidden_scroll', this.checked);
  });

  
  
  // 마우스
  if (window.innerWidth > 768) {
    const cursor = document.querySelector('.cursor');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.25;
    let offsetX = -5, offsetY = -5;

    function updateOffset() {
      if (window.innerWidth <= 1024) {
        offsetX = -12;
        offsetY = -12;
      } else {
        offsetX = -12;
        offsetY = -12;
      }
    }

    window.addEventListener('resize', updateOffset);
    updateOffset();

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX + offsetX;
      mouseY = e.clientY + offsetY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }


  // 모달
  $('.btn_modal_open').on('click', function () {
    $('body').addClass('hidden_scroll');
  });
  
  $(document).on('click', '.btn_modal_close', function () {
    $('#modalContact').fadeOut();
    $('body').removeClass('hidden_scroll');
  });


  // 메뉴

  $(document).on('mouseenter', '.gnb>li', function () {
    $(this).find('ul.lnb').stop().slideDown();
  });
  
  $(document).on('mouseleave', '.gnb>li', function () {
    $(this).find('ul.lnb').stop().slideUp();
  });
  

  // 모바일 메뉴
  $('.btn_burger input[id="hamburger"]').on('change', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('hidden_scroll');
    } else {
      $('body').removeClass('hidden_scroll');
    }
  });

  

});
$(window).on('scroll', function () {
  $('section').each(function () {
    const elementTop = $(this).offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();

    if (windowBottom > elementTop + 150) {
      $(this).addClass('on');
      $('.float_menu').addClass('on');
    }
  });
});

// 메인
window.onload = function () {
  if (window.innerWidth > 620) {   // 해상도 620 초과일 때만 실행
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.con_01 .list_box .box').forEach((selector) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: selector,
          start: '0% 10%',
          end: '0% 0%',
          scrub: 1,
        }
      })
      .to(selector, {
        rotateX: -5,
        scale: 0.95,
        transformOrigin: 'top',
        filter: 'brightness(0.7)'
      }, 0);
    });
  }
};
AOS.init();