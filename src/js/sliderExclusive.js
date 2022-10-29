/*Slider Exclusive games */
$(document).ready(function(){
	$('.exclusiveGames-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
        slidesToScroll: 1,
		prevArrow: false,
		nextArrow: '.exclusiveGames-slick-next',
        mobileFirst: true,
        infinite: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 960,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
	});
});