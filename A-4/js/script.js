$(function(){
  
  /*submenu*/
  $(".nav > ul > li").mouseover(function(){
    $(".nav > ul > li > ul").stop().slideDown();
    $("#header .navbg").stop().slideDown();
  });
  $(".nav > ul > li").mouseout(function(){
    $(".nav > ul > li > ul").stop().slideUp();
    $("#header .navbg").stop().slideUp();
  });
  
  /*sldie*/
  var current = 0;
  var start = 0;

  function slide(){
    move(current,"0","0");
    current++;
    start++;
    if(current==3){
        current=0;
        start=0;
    }
    move(current,"1","1");
  }
  setInterval(slide,2000);
  function move(index,start,end){
      $("#banner li").eq(index).css("z-index",start).stop().animate({"opacity":end},1000);
  }
  });