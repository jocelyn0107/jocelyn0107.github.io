$(document).ready(function () {

  // fade-up 애니메이션 함수 정의
  function applyFadeUpAnimation() {
      $('.fade-up').css({
          opacity: 0,
          top: '20px'
      });

      $('.fade-up').each(function (index) {
          setTimeout(() => {
              $(this).animate({
                  opacity: 1,
                  top: 0
              }, 500);
          }, 300 * index); // 각 요소마다 0.3초씩 지연
      });
  }

  // 처음 로드 시 fade-up 애니메이션 적용
  applyFadeUpAnimation();

  // 윈도우 리사이즈 시에도 fade-up 애니메이션 적용
  $(window).resize(function () {
      applyFadeUpAnimation();
  });

  // 문서 관리 > 표에서 텍스트 흘러가기
  $(".overflow_text").hover(function () {
      const wrapper = $(this).find(".text_wrapper")[0]; // text_wrapper 요소 선택
      const img = $(wrapper).find("img")[0]; // 이미지 요소 선택

      // 텍스트의 실제 길이 계산 (전체 scrollWidth에서 이미지 너비를 제외)
      const totalWidth = wrapper.scrollWidth; // wrapper의 전체 콘텐츠 길이
      const imgWidth = img ? img.offsetWidth : 0; // 이미지 너비
      const textWidth = totalWidth - imgWidth; // 텍스트 길이만 계산

      // 콘솔 출력
      console.log(`Hovered Element: ${this}`);
      console.log(`Text Width: ${textWidth}px, Image Width: ${imgWidth}px, Total Width: ${totalWidth}px`);

      // max-width를 초과한 경우 active 클래스 추가
      const maxWidth = parseInt($(this).css("max-width"), 10);
      if (textWidth > maxWidth) {
          $(this).addClass("active");
      }
  }, function () {
      // 마우스가 벗어나면 active 클래스 제거
      $(this).removeClass("active");
  });
});