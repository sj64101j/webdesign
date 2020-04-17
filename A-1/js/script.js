$(function(){
  /*submenu*/
  $(".nav > ul > li").mouseover(function(){
    $(".nav > ul > li > .submenu").stop().slideDown();
  });
  $(".nav > ul > li").mouseout(function(){
    $(".nav > ul > li > .submenu").stop().slideUp();
  });
  
  /*slide*/
  var current = 0;
  function slide(){
    move(current,"0","-100%");
    current++;
    if(current==3){current=0};
    move(current,"100%","0");
  }
  setInterval(slide,2000);
  function move(index,start,end){
    $("#banner li").eq(index).css("top",start).stop().animate({top:end});
  }
  
  /*tabmenu*/
  $(".cont1 h2").click(function(){
    $(".cont1 h2").removeClass("on");
    $(".cont1 ul").removeClass("on");
    $(this).addClass("on");
    $(this).next("ul").addClass("on");
  });
  
  /*modal*/
  $(".cont1 > .notice > li").eq(0).click(function(){
    $(".modal").fadeIn();
  });
  $(".modal .btn").click(function(){
    $(".modal").fadeOut();
  });
});