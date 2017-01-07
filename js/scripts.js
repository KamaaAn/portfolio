// plik scripts.js

$(function(){
  $('.load-more h2').hide();
  $('.load-more a').click(function(){
    $('.load-more h2').slideToggle();
  });
});