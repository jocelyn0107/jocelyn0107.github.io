$(document).ready(function () {
    // 메인비디오 천천히 나타내기
    const mainVideo = $(".bg_video");
    $(window).on("load", function () {
      mainVideo.addClass("visible");
    });

    //메인 텍스트 타이핑 애니메이션
    const text = "행사를 더 똑똑하게,<br>참여를 더 즐겁게"; // 타이핑할 문구
    let index = 0;
    let speed = 100; // 타이핑 속도 

    function typeWriter() {
      const textElement = document.getElementById("main_txt_typing");
      if (index < text.length) {
        // 현재 문자에 <br> 태그가 있으면 줄바꿈 적용
        if (text.charAt(index) === '<' && text.substring(index, index + 4) === '<br>') {
          textElement.innerHTML += "<br>"; // 줄바꿈 태그 추가
          index += 4; // <br>은 4글자이므로 인덱스를 4만큼 증가
        } else {
          textElement.innerHTML += text.charAt(index); // 일반 텍스트 추가
          index++;
        }
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  });