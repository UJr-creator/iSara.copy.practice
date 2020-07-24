"use strict"
$(function(){
  $("#pagetop").click(function(){
    $("html,body").animate({
      scrollTop:$("#top-wrapper").offset().top -80
    },"slow");
  });

  $(".question-detail").click(function(){
    $("+ .answer",this).slideToggle("swing");
    $(".fa-angle-down:not(:animated)",this).toggleClass("rotate");
  });

  $(".flow-headline").click(function(){
    if($("#lecture-details").width()<770){
      $(".fa-angle-down:not(:animated)",this).toggleClass("rotate");
      $("+ .lecture-detail",this).slideToggle("swing");
    }
  });

  $(window).scroll(function () {
  var scrollPosition = $("#top-wrapper").offset().top+300;
  if ($(this).scrollTop() > scrollPosition) {
      $("#pagetop").fadeIn();
  }else {
    $("#pagetop").fadeOut();
  }
});

$("#document-request a, #header-contact a,#second-wrapper-contact a").click(function(){
  var id = $(this).attr("href");
  var position = $(id).offset().top-70;
  $("html,body").animate({
    scrollTop:position
  },300,"swing");
  return false;
});



});
