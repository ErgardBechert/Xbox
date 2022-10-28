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

