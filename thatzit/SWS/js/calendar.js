$(document).ready(function(){
  /* calendar */
  $(".date").datepicker({
    dateFormat: 'yy.mm.dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    beforeShow: function (input, inst) {
        $('#ui-datepicker-div').removeClass("yearpicker");
    }
  });
  $(".date").each(function (e) {
    $(this).on("propertychange change keyup paste input", function () {
        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
        var today = new Date($('.date').eq(e).val()).getDay();
        var todayLabel = week[today];
        $(this).prev().children("span").text(todayLabel.split("요일")[0]);
    });
  });
});