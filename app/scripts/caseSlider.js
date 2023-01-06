import Swiper, { Navigation, Pagination } from 'swiper';

const CaseSlider = () => {
  new Swiper('.js-case', {
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export default CaseSlider;
