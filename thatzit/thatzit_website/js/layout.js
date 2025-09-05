$(document).ready(function(){
  // 마우스
  if (window.innerWidth > 768) {
    const cursor = document.querySelector('.cursor');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.25;
    let offsetX = -10, offsetY = -10;

    function updateOffset() {
      if (window.innerWidth <= 1024) {
        offsetX = -25;
        offsetY = -25;
      } else {
        offsetX = -20;
        offsetY = -20;
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
  $('.btn_modal_close').on('click', function () {
    $('.modal_popup').hide();
    $('body').removeClass('hidden_scroll');
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
