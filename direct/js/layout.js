$(document).ready(function(){
    $('.btn_logout').on('click',function(){
        $('#modalLogout').fadeIn();
        $('body').addClass('no_scroll');
    });
    
    $('.btn_modal_close').on('click', function(){
        $('#modalLogout').fadeOut();
        $('body').removeClass('no_scroll');
    });
});