$('#modalContact').load('modal_contact.html');

$(function () { 
  // 모달 열기 (모든 버튼 공통)
  $(document).on('click', '[data-modal]', function(){
    const targetModal = $(this).data('modal');
    const $modal = $(targetModal);
    $modal.fadeIn(200, function(){
      $modal.addClass('active');
    });
    $('body').addClass('no_scroll');
  });

  // 모달 닫기
  $(document).on('click', '.btn_modal_close', function(){
    closeModal($(this).closest('.modal_popup'));
  });
  $(document).on('click', '.modal_popup', function(e){
    if ($(e.target).closest('.modal_wrap').length) return;
    closeModal($(this));
  });


});
// 모달 닫기
function closeModal($modal){
  $modal.removeClass('active');

  setTimeout(() => {
    $modal.fadeOut(200);
  }, 300);

  $('body').removeClass('no_scroll');
}