import Swiper, { Navigation, Pagination } from 'swiper';

const Case = () => {
  new Swiper('.js-case', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default Case;