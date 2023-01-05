const TopBtn = () => {
  const topBtn = document.querySelector('.top-btn');
  const poftfolioSection = document.querySelector('.hero-inner');
  const secondPortfolioItem = document.querySelector('.portfolio__item:nth-child(1)');

  if (window.matchMedia('(max-width: 576px)').matches) {
    poftfolioSection.dataset.offsetTop = secondPortfolioItem.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > poftfolioSection.dataset.offsetTop) {
        topBtn.classList.add('top-btn--active');
      } else {
        topBtn.classList.remove('top-btn--active');
      }
    });

    topBtn.addEventListener('click', () => {
      poftfolioSection.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
};

export default TopBtn;
