$(document).ready(function(){
  $("#toggle_none").click(function(){
    $(".blue").removeClass("hide").toggleClass("none");
  })
  
  $("#toggle_hidden").click(function(){
    $(".blue").removeClass("none").toggleClass("hide");
  })
  
})