$(function(){
  
  /*submenu*/
  $(".nav > ul > li").mouseover(function(){
    $(".nav > ul > li >ul").stop().slideDown(200);
  });
  $(".nav > ul > li").mouseout(function(){
    $(".nav > ul > li >ul").stop().slideUp(200);
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
});