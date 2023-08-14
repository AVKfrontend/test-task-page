
//-------Mobil menu hendler-----
const mobButton = document.querySelector('.header__mob-menu');
const headerMenu = document.querySelector('.header__menu');
const linckCurrent = document.querySelector('.menu__link--current');
if (window.innerWidth < 770) {
	[mobButton, linckCurrent].forEach(el => el.addEventListener('click', menuTurn));
}
function menuTurn () {
	headerMenu.classList.toggle('header__menu--mob-turn');
}
//-------Intersection Observer for section fade--------
const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.3,
}
const observer = new IntersectionObserver(intersectionHendler, options);

const observeTargets = [...document.querySelectorAll('section')].slice(1);
observeTargets.forEach(el => {
	el.firstElementChild.classList.add('hide', 'trans');
	observer.observe(el);
});

function intersectionHendler (entries, observer) {
	entries.forEach(({target, isIntersecting}) => {
		if (isIntersecting) {
			target.firstElementChild.classList.remove('hide');
			observer.unobserve(target);
		}
	})
}


//-------Start jQuery area--------
(function($, undefined){
  $(function(){
//-------Slick slider init--------
    $(document).ready(function(){
	  $('.intro__slick-titles').slick({
	    autoplay: true,
	    autoplaySpeed: 5000,
	    adaptiveHeight: true,
	    prevArrow: $('.intro__slick-btn--prev'),
	    nextArrow: $('.intro__slick-btn--next'),
	    dots: true,
	    appendDots:  $('.intro__slick-dot-area'),
	    asNavFor: '.intro__slick-pictures'
	  });
	});
    $(document).ready(function(){
	  $('.intro__slick-pictures').slick({
	    fade: true,
	    arrows: false,
	    asNavFor: '.intro__slick-titles'
	  });
	});
  });
})(jQuery);