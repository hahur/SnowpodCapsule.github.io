(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
    
    


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});
var instance = M.Carousel.getInstance(elem);


