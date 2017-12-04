
$("#myCarousel").carousel();

    

$(".item").click(function(){
    $("#myCarousel").carousel(1);
});


$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});


$('a.scrollto').on('click', function(){
  

  var scrollTo = $(this).attr('data-scrollto');
  
  

  $( "a.scrollto" ).each(function() {
    if(scrollTo == $(this).attr('data-scrollto')){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });
  
  

  $('body, html').animate({
    

    "scrolltop": $('#'+scrollTo).offset().top
  }, 1000 );
  return false;
  
})

$('body').scrollspy({ target: '#navbar-example' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
