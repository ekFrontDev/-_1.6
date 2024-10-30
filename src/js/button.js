// условия для кнопок "читать далее" и "скрыть"
const buttonNext = document.querySelector('.aside__next');
const paragraph_2 = document.querySelector('.article__paragraph-2');
const buttonHidden = document.querySelector('.aside__hidden');
const paragraph_3 = document.querySelector('.article__paragraph-3');

buttonNext.addEventListener('click', function () {
	paragraph_2.classList.add('display-block');
	paragraph_3.classList.add('display-block');
	buttonHidden.classList.add('display-block');
	buttonNext.classList.add('display-hidden');
});

buttonHidden.addEventListener('click', function () {
	paragraph_2.classList.remove('display-block');
	paragraph_3.classList.remove('display-block');
	buttonHidden.classList.remove('display-block');
	buttonNext.classList.remove('display-hidden');
});


