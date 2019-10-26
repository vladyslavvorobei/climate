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

$(document).scroll( scrollHeader);
