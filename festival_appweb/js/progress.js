function initProgress() {
  $(".pj_progress").each(function () {

    var value = $(this).data('value'); // ← data() 사용 권장
    var left = $(this).find('.pj_progress_left .pj_progress_bar');
    var right = $(this).find('.pj_progress_right .pj_progress_bar');

    // 초기화 (중복 실행 대비)
    left.css('transform', 'rotate(0deg)');
    right.css('transform', 'rotate(0deg)');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
      } else {
        right.css('transform', 'rotate(180deg)');
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
      }
    }
  });
}

function percentageToDegrees(percentage) {
  return percentage / 100 * 360;
}