$(function(){
  /*submenu*/
  $(".nav > ul > li").mouseover(function(){
    $(".nav > ul > li > ul").stop().fadeIn();
  });
  $(".nav > ul > li").mouseout(function(){
    $(".nav > ul > li > ul").stop().fadeOut();
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
    $("#banner li").eq(index).css("left",start).stop().animate({left:end});
  }
  
  /*modal*/
  $(".cont1 .notice li").eq(0).click(function(){
    $(".modal").fadeIn();;
  });
  $(".modal .btn").click(function(){
    $(".modal").fadeOut();
  });
  
  /**/
  $(".foot3").click(function(){
    $(".site").stop().slideDown();
  });
  $(".foot3").click(function(){
    $(".site").stop().slideUp();
  });
});