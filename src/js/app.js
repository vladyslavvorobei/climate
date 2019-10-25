import Swiper from 'swiper';

function scrollHeader() {
  const $header = $('.header');
  const addClass = 'header--scroll';

  if($(this).scrollTop() > 70) {
    $header.addClass(addClass);
  }
  else {
    $header.removeClass(addClass);

  }
}

function addClassDropList() {
  const $listItem = $('.nav li');
  const listItemClass = 'nav__drop-list';
  $listItem.find('ul').closest($listItem).addClass(listItemClass)
}

function burgerMenu() {
  const $burgerBtn = $('.burger-btn');
  const $burgerBtnAddClass = 'burger-btn--active';
  const $burgerNavWrapper = $('.header__bottom-bar');
  const $addBurgerNavClass = 'header__bottom-bar--active';
  const $burgerLinks = $('.header__bottom-bar a');

  function addBurgerClass() {
    $burgerBtn.toggleClass($burgerBtnAddClass);
    $burgerNavWrapper.toggleClass($addBurgerNavClass);
  }

  function closeBurger() {
    $burgerNavWrapper.removeClass($addBurgerNavClass);
    $burgerBtn.removeClass($burgerBtnAddClass);
  }

  $burgerBtn.click(addBurgerClass);
  $burgerLinks.click(closeBurger);
}

const firstScreenSlider = new Swiper('.first-screen .swiper-container', {
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

const manufacturersSlider = '.manufacturers__slider .swiper-container';
const manufacturersOptions = {
  init: false,
  slidesPerView: 1,
  slidesPerColumn: 3,
  slidesPerGroup:1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerColumn: 3,
    },
    991: {
      slidesPerView: 3,
      slidesPerColumn: 3,
    },
  }
};
const manufacturersSwiper = new Swiper(manufacturersSlider, manufacturersOptions);


$(document).ready(
  burgerMenu(),
  addClassDropList(),
  manufacturersSwiper.init(),
  firstScreenSlider.update()
);

$(document).resize(
  manufacturersSwiper.update(),
  firstScreenSlider.update()
);

$(document).scroll(
  scrollHeader
);
