$(document).ready(function(){
  var fileTarget = $('.filebox .upload_hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload_name').val(filename);
        $('.icon_img_cancel').on('click', function(){
          $('.upload_name').val('');
        });
    });
}); 
