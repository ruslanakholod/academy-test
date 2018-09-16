$( document ).ready(function() {

  if ($('.slides').length > 0) {
    $('.slides').slick({
     slidesToShow: 1,
     swipeToSlide: true,
     arrows: false,
     dots: true
   });
  }
  if ($('.team-slides').length > 0) {
    $('.team-slides').slick({
     slidesToShow: 1,
     swipeToSlide: true,
     arrows: false,
     dots: true
     });
  }
});
