$(function(){
  
  /*submenu*/
  $(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().fadeIn(400);
  });
  $(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().fadeOut(400);
  });
  
  /*slide*/
  var current = 0;
  function slide(){
    move(current,"0","-100%");
    current++;
    if(current == 3){current=0}
    move(current,"100%","0");
  }
  setInterval(slide,2000);
  function move(index,start,end){
    $("#banner li").eq(index).css("top",start).stop().animate({top:end});
  }
});