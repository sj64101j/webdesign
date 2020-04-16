$(function(){
  /*submenu*/
  $(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
  });
  $(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
  });
  
  /*slide*/
  var current = 0;
  var start = 0;
  function slide(){
    move(current,"0","0");
    current++
    start++
    if(current==3){
      current=0;
      start=0;
    };
    move(current,"1","1");
  }
  setInterval(slide,2000);
  function move(index,start,end){
    $("#banner li").eq(index).css("z-index",start).stop().animate({opacity:end});
  }
  
  /*tab*/
  $(".cont1 h2").click(function(){
    $(".cont1 h2").removeClass("on");
    $(".cont1 ul").removeClass("on");
    $(this).addClass("on");
    $(this).next("ul").addClass("on");
  });
  
  /*modal*/
  $("ul.notice li").eq(0).click(function(){
    $(".modal").fadeIn();
  });
  $("#btn").click(function(){
    $(".modal").fadeOut();
  })
});