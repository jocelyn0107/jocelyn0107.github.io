$(document).ready(function(){

  gsap.registerPlugin(ScrollTrigger);

  const texts = gsap.utils.toArray(".text_item");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".text_section",
      start: "top top",
      end: "+=" + (texts.length * window.innerHeight),
      scrub: true,
      pin: ".text_wrap",
      anticipatePin: 1,
      // markers: true,
    }
  });

  texts.forEach((text, i) => {
    tl.fromTo(text, 
      { y: "-80%", opacity: 0 },
      { y: "-100%", opacity: 1, duration: 1 },
      i                           
    )
    .to(text, 
      { y: "-100%", opacity: 0, duration: 1 },
      i + 0.8
    );
  });

  $(window).on("scroll", function () {
    const winHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $(".cardfit_img_wrap > div").each(function () {
      const offsetTop = $(this).offset().top;
      const elemHeight = $(this).outerHeight();

      const elemMid = offsetTop + elemHeight / 2;

      // 뷰포트 중앙
      const viewMid = scrollTop + winHeight / 2;

      if (Math.abs(viewMid - elemMid) < elemHeight / 2) {
        $(this).addClass("active");
      } 
    });
  }); 

});