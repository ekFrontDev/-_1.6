//настройки для кнопок второго свайпера "показать все" и "скрыть"
const brandsContainerSwiper2Button4 = document.querySelector('.brands-container--swiper-2--button-4');
const brandsContainerSwiper2Button5 = document.querySelector('.brands-container--swiper-2--button-5');
const brandsContainerSwiper2Button6 = document.querySelector('.brands-container--swiper-2--button-6');
const buttonShowAll = document.getElementById('showButton2');
const buttonHidden2 = document.getElementById('hidden2');
const brandsContainerSwiper2WrapperSlide5 = document.querySelector('.swiper-container-2--slide5--hidden');
const brandsContainerSwiper2WrapperSlide6 = document.querySelector('.swiper-container-2--slide6--hidden');

	if (window.matchMedia("(min-width: 767px)").matches) {
		document.addEventListener("DOMContentLoaded", function(){
		brandsContainerSwiper2Button4.classList.add('display-hidden');
		brandsContainerSwiper2Button5.classList.add('display-hidden');
		brandsContainerSwiper2Button6.classList.add('display-hidden');
	});
	}

	if (window.matchMedia("(min-width: 1120px)").matches) {
		document.addEventListener("DOMContentLoaded", function(){
		brandsContainerSwiper2Button4.classList.add('display-block');
		brandsContainerSwiper2Button5.classList.add('display-hidden');
		brandsContainerSwiper2Button6.classList.add('display-hidden');
	});
	}

	buttonShowAll.addEventListener('click', function () {
		brandsContainerSwiper2Button4.classList.remove('display-hidden');
		brandsContainerSwiper2Button5.classList.remove('display-hidden');
		brandsContainerSwiper2Button6.classList.remove('display-hidden');
		brandsContainerSwiper2WrapperSlide5.classList.add('display-block');
		brandsContainerSwiper2WrapperSlide6.classList.add('display-block');
		buttonHidden2.classList.add('display-block');
		buttonShowAll.classList.add('display-hidden');
	});

	buttonHidden2.addEventListener('click', function () {
		brandsContainerSwiper2Button4.classList.add('display-hidden');
		brandsContainerSwiper2Button5.classList.add('display-hidden');
		brandsContainerSwiper2Button6.classList.add('display-hidden');
		brandsContainerSwiper2WrapperSlide5.classList.remove('display-block');
		brandsContainerSwiper2WrapperSlide6.classList.remove('display-block');
		buttonHidden2.classList.remove('display-block');
		buttonShowAll.classList.remove('display-hidden');
	});
