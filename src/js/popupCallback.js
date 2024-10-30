const popupCallbackOpen = document.querySelector('.popup-burger__footer--button-4');
const popupCallbackClose = document.querySelector('.popup-callback__header-button');
const popupCallback = document.querySelector('.popup-callback');
const popupCallbaclWrapper = document.querySelector('.popup-callback__eventListener-mouseClick');
const popup = document.querySelector('.popup-burger');
const popupCallbackButtonOpen768 = document.querySelector('.nav__button--call--768px');

popupCallbackOpen.addEventListener('click', function () {
	popupCallback.classList.add('display-block');
});

popupCallbackButtonOpen768.addEventListener('click', function () {
	popupCallback.classList.add('display-block');
});

popupCallbackClose.addEventListener('click', function () {
	popupCallback.classList.remove('display-block');
	popup.classList.remove('display-block');
});

document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		popupCallback.classList.remove('display-block');
	}
});

popupCallbaclWrapper.addEventListener('click', function () {
	popupCallback.classList.remove('display-block');
	popup.classList.remove('display-block');
});
