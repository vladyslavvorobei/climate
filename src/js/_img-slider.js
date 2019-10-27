import '../../node_modules/jquery-zoom/jquery.zoom.min';

const $imgList = $('.img-slider__list');
const $img = $('.img-slider__list li img');
const $imgMain = $('.img-slider__main');


function getURL() {
  const srcImg = $imgList.find($img[0]).attr('src');
  $imgMain.find('img').attr('src', srcImg);
  // $imgMain.prepend($('<img>',{src: srcImg}));
}

function setURL() {
    const thisSRC = $(this).attr('src');
    $imgMain.find('img').attr('src', thisSRC);
}

$(document).ready(
  getURL(),
  $img.click(setURL)
);


$(document).ready(function(){
  $('.img-slider__main').zoom({magnify: 1.5});
});

