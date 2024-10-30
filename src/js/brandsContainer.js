//настройки для свайпера
if (window.matchMedia("(max-width: 767px)").matches) {
	document.addEventListener("DOMContentLoaded", function(){
  var swiper = new Swiper('.swiper-container', {
    loop: true,	
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
		slidesPerView: 1.2,
  });
});
}

// переменные для функции кнопок показать все/скрыть
const showButton = document.getElementById('showButton');//метод находит элемент в разметке по id
const hidden = document.getElementById('hidden');
const hiddenButton1 = document.getElementById('hiddenButton1');
const hiddenButton2 = document.getElementById('hiddenButton2');
const hiddenButton3 = document.getElementById('hiddenButton3');
const hiddenButton4 = document.getElementById('hiddenButton4');
const hiddenButton5 = document.getElementById('hiddenButton5');
// переменные контейнеров
const hiddenButton1Wrapper = document.querySelector('.brands-container--p7');
const hiddenButton2Wrapper = document.querySelector('.brands-container--p8');
const hiddenButton3Wrapper = document.querySelector('.brands-container--p9');
const hiddenButton4Wrapper = document.querySelector('.brands-container--p10');
const hiddenButton5Wrapper = document.querySelector('.brands-container--p11');

if (window.matchMedia("(max-width: 767px)").matches) {
	hiddenButton1.style.display = 'block';
	hiddenButton2.style.display = 'block';
	hiddenButton3.style.display = 'block';
	hiddenButton4.style.display = 'block';
	hiddenButton5.style.display = 'block';
}

// функция для открытия элементов на планшете
if (window.matchMedia("(min-width: 768px)").matches) {
	showButton.addEventListener('click', () => {
		if (hidden.style.display && //метод меняет свойство элемента в разметке
			hiddenButton1.style.display && 
			hiddenButton2.style.display && 
			hiddenButton3.style.display && 
			hiddenButton4.style.display && 
			hiddenButton5.style.display === 'none') {
				hidden.style.display = 'block';
				hiddenButton1.style.display = 'block';
				hiddenButton2.style.display = 'block';
				hiddenButton3.style.display = 'block';
				hiddenButton4.style.display = 'block';
				hiddenButton5.style.display = 'block';
				hiddenButton1Wrapper.classList.add('display-block');
				hiddenButton2Wrapper.classList.add('display-block');
				hiddenButton3Wrapper.classList.add('display-block');
				hiddenButton4Wrapper.classList.add('display-block');
				hiddenButton5Wrapper.classList.add('display-block');
				showButton.style.display = 'none';
		}
	});
	
	hidden.addEventListener('click', () => {
		if (hiddenButton1.style.display && 
			hiddenButton2.style.display && 
			hiddenButton3.style.display && 
			hiddenButton4.style.display && 
			hiddenButton5.style.display === 'block') {
				hiddenButton1.style.display = 'none';
				hiddenButton2.style.display = 'none';
				hiddenButton3.style.display = 'none';
				hiddenButton4.style.display = 'none';
				hiddenButton5.style.display = 'none';
				hidden.style.display = 'none';
				hiddenButton1Wrapper.classList.remove('display-block');
				hiddenButton2Wrapper.classList.remove('display-block');
				hiddenButton3Wrapper.classList.remove('display-block');
				hiddenButton4Wrapper.classList.remove('display-block');
				hiddenButton5Wrapper.classList.remove('display-block');
				showButton.style.display = 'block';
		}
	});
}

// if (window.matchMedia("(min-width: 1120px)").matches) {
// 	showButton.addEventListener('click', () => {
// 		if (hidden.style.display && //метод меняет свойство элемента в разметке
// 			hiddenButton3.style.display && 
// 			hiddenButton4.style.display && 
// 			hiddenButton5.style.display === 'none') {
// 				hidden.style.display = 'block';
// 				hiddenButton3.style.display = 'block';
// 				hiddenButton4.style.display = 'block';
// 				hiddenButton5.style.display = 'block';
// 				hiddenButton3Wrapper.classList.add('display-block');
// 				hiddenButton4Wrapper.classList.add('display-block');
// 				hiddenButton5Wrapper.classList.add('display-block');
// 				showButton.style.display = 'none';
// 		}
// 	});
	
// 	hidden.addEventListener('click', () => {
// 		if (hiddenButton3.style.display && 
// 			hiddenButton4.style.display && 
// 			hiddenButton5.style.display === 'block') {
// 				hiddenButton3.style.display = 'none';
// 				hiddenButton4.style.display = 'none';
// 				hiddenButton5.style.display = 'none';
// 				hidden.style.display = 'none';
// 				hiddenButton3Wrapper.classList.remove('display-block');
// 				hiddenButton4Wrapper.classList.remove('display-block');
// 				hiddenButton5Wrapper.classList.remove('display-block');
// 				showButton.style.display = 'block';
// 		}
// 	});
// }
