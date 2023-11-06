const swiper = new Swiper(".swiper-banner", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const swiperProducts = new Swiper(".swiper-products", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
  },
});
