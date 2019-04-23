$(function () {
  
    /* 仿滚动条 */
    $(".InfoResContent").mCustomScrollbar();
    
})
$("body").on('click','.InfoRes',function(){
    $(this).addClass('active');
    $(this).siblings('.InfoRes').removeClass('active');
    var theme=$(this).attr("data-theme");
    $('.InfoResContent[data-theme=' + theme + ']').addClass('active');
    $('.InfoResContent[data-theme=' + theme + ']').siblings('.InfoResContent').removeClass('active');
   
})
$("body").on('click','.MoreBtn',function(){
    $('.MoreBtn').removeClass('active');
    $(this).addClass('active');
})
