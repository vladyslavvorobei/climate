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

$(document).ready(burgerMenu);
