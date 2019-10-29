import Swiper from 'swiper';


if($('body').find($('.swiper-container')).length > 1) {
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
  const workerSwiper = new Swiper('.worker__slider .swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });
  const certificatesSwiper = new Swiper('.certificates__slider .swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
}
