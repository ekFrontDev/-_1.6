//слайдер 1
// if (window.matchMedia("(max-width: 767px)").matches) {
// 	document.addEventListener("DOMContentLoaded", function(){
//   var swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
// 		slidesPerView: 1.2,
//   });
// });
// }

// //слайдер 2
// if (window.matchMedia("(max-width: 767px)").matches) {
// 	document.addEventListener("DOMContentLoaded", function(){
//   var swiper = new Swiper('.swiper-container-2', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination-2',
//       clickable: true,
//     },
// 		slidesPerView: 1.2,
//   });
// });
// }

// //слайдер 3
// if (window.matchMedia("(max-width: 767px)").matches) {
// 	document.addEventListener("DOMContentLoaded", function(){
//   var swiper = new Swiper('.swiper-container-3', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination-3',
//       clickable: true,
//     },
// 		slidesPerView: 1.2,
//   });
// });
// }

document.addEventListener("DOMContentLoaded", function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Инициализация первого слайдера
    var swiper1 = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1.2,
    });

    // Инициализация второго слайдера
    var swiper2 = new Swiper('.swiper-container-2', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
      slidesPerView: 1.2,
    });

    // Инициализация третьего слайдера
    var swiper3 = new Swiper('.swiper-container-3', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-3',
        clickable: true,
      },
      slidesPerView: 1.2,
    });
  }
});


