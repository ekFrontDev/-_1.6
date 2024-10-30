const popupCallOpen = document.querySelector('.popup-burger__footer--button-5');
const popupCallClose = document.querySelector('.popup-call__header-button');
const popupCall = document.querySelector('.popup-call');
const popupCallWrapper = document.querySelector('.popup-call__eventListener-mouseClick');
const popup = document.querySelector('.popup-burger');
const popupCallButtonOpen768 = document.querySelector('.nav__button--chat--768px');


popupCallOpen.addEventListener('click', function () {
	popupCall.classList.add('display-block');
});

popupCallButtonOpen768.addEventListener('click', function () {
	popupCall.classList.add('display-block');
});

popupCallClose.addEventListener('click', function () {
	popupCall.classList.remove('display-block');
	popup.classList.remove('display-block');
});

document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		popupCall.classList.remove('display-block');
	}
});

popupCallWrapper.addEventListener('click', function () {
	popupCall.classList.remove('display-block');
	popup.classList.remove('display-block');
});

