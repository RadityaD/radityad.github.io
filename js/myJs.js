$( document ).ready(function() {
  $('.container').addClass("animated fadeIn");

  $('.socmed').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') }
  )
});
