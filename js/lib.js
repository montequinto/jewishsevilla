var slideshow = new Object();
slideshow['slide-01'] = new Array('Judería', 'entrance to the Jewish Quarter', 'images/slideshow/reja.jpg', 'images/slideshow/reja-thumb.jpg');
slideshow['slide-02'] = new Array('Geraniums', 'between the Alcázar and the Jewish Quarter', 'images/slideshow/juderia.jpg', 'images/slideshow/juderia-thumb.jpg');
slideshow['slide-03'] = new Array('Horse carriage', 'another way to visit Sevilla', 'images/slideshow/carruaje.jpg', 'images/slideshow/carruaje-thumb.jpg');
slideshow['slide-04'] = new Array('Callejón del agua', 'city walls', 'images/slideshow/muralla.jpg', 'images/slideshow/muralla-thumb.jpg');
slideshow['slide-05'] = new Array('Wall inscription', '"He will strike you in the head", (Genesis 3:15)', 'images/slideshow/hebreo.jpg', 'images/slideshow/hebreo-thumb.jpg');
slideshow['slide-06'] = new Array('The "Giralda"', 'the minaret of the old mosque', 'images/slideshow/giralda.jpg', 'images/slideshow/giralda-thumb.jpg');

$(document).ready(function(){
  Nifty("div.header","top");
  Nifty("div.container");
  Nifty("div.slideshow");
  Nifty("div.tour_historical_data");
  Nifty("div.tour_description");
  Nifty("div.header_globe div");

  for (var i in slideshow) {
    if (i == 'slide-01') showSlide(i);
    $('.slideshow_selector').append('<a class="slideshow_link" href="#"><img id="'+i+'" src="'+slideshow[i][3]+'" /></a>');
  }

  $('.slideshow_link').click(function(){
      showSlide($(this).children().attr('id'));
  });

});

function showSlide(slideId){
    $('.slideshow_image').attr('style', "background: url('"+slideshow[slideId][2]+"') no-repeat");
    $('.slideshow_comment h3').text(slideshow[slideId][0]);
    $('.slideshow_comment span').text(slideshow[slideId][1]);
}
