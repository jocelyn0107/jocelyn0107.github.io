$(window).on('load', function(){
  mainScript.gsapFnc();
})

const mainScript = {
  gsapFnc: function(){
    gsap.set('.sc-visual .sc-title span', {
      rotateX: 90,
      skewY: 15,
      rotateY: 10,
      opacity: 0,
    })
    gsap.to('.sc-visual .sc-title span', {
      rotateX: 0,
      skewY: 0,
      rotateY: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
    })

    gsap.to('.sc-visual .img-box img', {
      yPercent: 10,
      opacity: 1,
      stagger: 0.2,
    })

    dataChild = document.querySelectorAll('[data-y]');

    dataChild.forEach(element => {
      y = (element.dataset.y) ?element.dataset.y : 0;
      x = (element.dataset.x) ?element.dataset.x : 0;
      r = (element.dataset.r) ?element.dataset.r : 0;

      gsap.to(element, {
        scrollTrigger: {
          trigger: '.sc-visual',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent:y,
        xPercent:x,
        rotation:r
      })
    });

    var swiper = new Swiper(".records-slide", {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });

    gsap.from('.sc-about .sc-title span', {
      scrollTrigger: {
        trigger: '.sc-about',
        start: 'top 80%',
        end: 'bottom bottom',
      },
      stagger: 0.2,
      yPercent: 100,
    })
    gsap.from('.sc-about .records-slide .swiper-slide', {
      scrollTrigger: {
        trigger: '.sc-about',
        start: 'top 80%',
        end: 'bottom bottom',
      },
      xPercent: 200,
      stagger: 0.2
    })
    gsap.from('.sc-about .records-slide .btn', {
      scrollTrigger: {
        trigger: '.sc-about',
        start: 'top 80%',
        end: 'bottom bottom',
      },
      opacity: 0,
      stagger: 0.5
    })



    gsap.from('.sc-work .work-list .work-item', {
      scrollTrigger: {
        trigger: '.sc-work',
        start: 'top 80%',
        end: 'bottom bottom',
      },
      duration: 1,
      stagger: 0.2,
      xPercent: -100,
    })

    const footerAni = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        end: 'bottom bottom',
      }
    })
    footerAni
    .addLabel('a')
    .from('.footer .title-area span',{ yPercent: 100, opacity: 0, stagger: 0.2}, 'a')
    .from('.footer .copy-area span', { yPercent: 100, opacity: 0}, 'a+=0.2')
    .from('.footer .social-area span',{ yPercent: 100, opacity: 0, stagger: 0.2}, 'a+=0.4')
  },  
}