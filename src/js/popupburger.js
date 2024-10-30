// условие для открытия попапа с помощью кнопки бургер
const popupBurgerOpen = document.querySelector('.nav__menu');
const popupBurgerClose = document.querySelector('.popup-burger__button-1');
const popup = document.querySelector('.popup-burger');
const popupBurgerWrapper = document.querySelector('.popup-burger__eventListener-mouseClick');

popupBurgerOpen.addEventListener('click', function () {
	popup.classList.add('display-block');
});

// условие для закрытия с помощью кнопки бургер
popupBurgerClose.addEventListener('click', function () {
	popup.classList.remove('display-block');
});

// условие для закрытия с помощью клавиши
document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		popup.classList.remove('display-block');
	}
});

// условие для закрытия с помощью клика на пустую область
popupBurgerWrapper.addEventListener('click', function () {
	popup.classList.remove('display-block');
});