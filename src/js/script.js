/*Burger */
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header-body__menu');

burger.onclick = function() {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
/*Slider */
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
	});
});
/*Slider Exclusive games */
$(document).ready(function(){
	$('.exclusiveGames-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		prevArrow: false
		
	});
});
