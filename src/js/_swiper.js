import Swiper from 'swiper';


if($('body').find($('.swiper-container')).length > 0) {
  const firstScreenSlider = new Swiper('.first-screen .swiper-container', {
    // autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  const manufacturersSwiper = new Swiper('.manufacturers__slider .swiper-container',  {
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
  });
  $(document).resize(
    manufacturersSwiper.update(),
    firstScreenSlider.update()
  );
}
