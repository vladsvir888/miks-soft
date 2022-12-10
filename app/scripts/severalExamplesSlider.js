import Swiper from 'swiper';

const SeveralExamplesSlider = () => {
  new Swiper('.js-several-examples', {
    slidesPerView: 1.4,
    spaceBetween: 20,
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
};

export default SeveralExamplesSlider;
