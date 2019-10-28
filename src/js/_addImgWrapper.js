function addImgWrapper() {
  const $img = $('.articles-inner__content img');
  const $newElem = $("<div class='articles-inner__img'/>");
  $img.wrap($newElem);
}

addImgWrapper();
