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