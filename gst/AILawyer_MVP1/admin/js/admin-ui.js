$(document).ready(function () {

    $(".btn.ok, .btn.cancel").on("click", function () {
        $('.modal').fadeOut();
        $('body').css("overflow-y", "hidden");
    });
    $(".logout").on("click", function () {
        $('#modalLogout').fadeIn();
        $('body').css("overflow-y", "hidden");
    });
    $(".btn_delete").on("click", function () {
        $('#modalDelete').fadeIn();
        $('body').css("overflow-y", "hidden");
    });
    $("dd button").on("click", function (event) {
        // event.preventDefault();
        $(this).toggleClass("active");
    });
    $('.state').on('click', function () {
        $('.state_area').toggleClass('active');
    });
    $('.state_sel_w button').on('click', function () {
        var selectedText = $(this).text();
        $('.state').text(selectedText);
        $('.state_area').removeClass('active');
    });
    $("main>section table tbody tr td").on("click", function () {
        $('#modalCounselDetail').fadeIn();
        $('body').css("overflow-y", "hidden");
    });
    $("table tr").on("click", function () {
        $("table tr").removeClass("active");
        $("aside").addClass("show");
        $("main").addClass("with_aside").removeClass("full");
        $(this).addClass("active");
        $(".lawyer_init").removeClass("active");
        $(".lawyer_add").removeClass("active");
        $(".lawyer_detail").addClass("active");
    });
    $(".ico_close").on("click", function () {
        $("aside").removeClass("show");
        $("main").addClass("full").removeClass("with_aside");
    });
    $(".btn_copy").on("click", function () {
        var $bubble = $(this).siblings(".bubble");
        $bubble.addClass("show");
        setTimeout(function () {
            $bubble.removeClass("show");
        }, 1000);
    });
    $(".btn_lawyer_edit").on("click", function () {
        $(".lawyer_add").addClass("active");
        $(".lawyer_detail").removeClass("active");
    });
    $(".btn.main.add").on("click", function () {
        $(".lawyer_add").addClass("active");
        $(".lawyer_detail, .lawyer_init").removeClass("active");
        $("aside").addClass("show");
        $("main").addClass("with_aside").removeClass("full");
        $(this).addClass("active");
    });

    $("aside").on('transitionend webkitTransitionEnd oTransitionEnd', function() {
        if ($("aside").hasClass("show")) {
            $("footer").css("width", "calc(100% - 350px)");
        } else {
            $("footer").css("width", "100%");
        }
    });
});