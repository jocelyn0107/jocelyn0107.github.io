$(document).ready(function(){
  // select
  $(".select > .sel:not(.disable)").on("click", function () {
      $(this).parent().toggleClass("active");
  });
  $(".lSel button").on("click", function () {
      var selectedText = $(this).text();
      $(this).parent().parent().removeClass("active");
      var $selButton = $(this).parent().prev();
      $selButton.text(selectedText);
  });

  // tab_menu
  let currentTabIndex = 0;

$('.tab_title > div').on('click', function(){

  const newTabIndex = $(this).index(); 

  if(newTabIndex !== currentTabIndex){

    $(this).addClass('on').siblings().removeClass('on');

    $('.tab_con .con')
      .eq(currentTabIndex).removeClass('on')
      .end()
      .eq(newTabIndex).addClass('on');

    currentTabIndex = newTabIndex; 
  }
});

  
});