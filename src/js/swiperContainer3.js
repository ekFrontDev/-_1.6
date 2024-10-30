const swiperContainer3 = document.querySelector('.brands-container--swiper-3');

if (window.matchMedia("(min-width: 767px)").matches) {
	document.addEventListener("DOMContentLoaded", function(){
		swiperContainer3.classList.remove('swiper-wrapper');
});
}