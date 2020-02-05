$(document).ready(function(){
	$('.bxslider').bxSlider();
	

    $('.fotorama').fotorama({
  width: '100%',
  height: 110,
  nav: 'thumbs',
  arrows: false,
  click: false,
  swipe: false,
  loop: true,
  thumbwidth: 50,
  thumbheight: 50,
  thumbmargin: 5,
  autoplay: true
});
});

