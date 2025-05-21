$(document).ready(function(){
    $('.btn_logout').on('click',function(){
        $('#modalLogout').fadeIn();
        $('body').addClass('no_scroll');
    });
    
    $('.btn_modal_close').on('click', function(){
        $('#modalLogout').fadeOut();
        $('body').removeClass('no_scroll');
    });

    $('.festival_list tbody tr').on('click', function(){
        const index = $(this).index();
        $('.qr_list_w .qr_list').removeClass('d_block');
        $('.qr_list_w .qr_list').eq(index).addClass('d_block');
      });
});