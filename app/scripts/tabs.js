const Tabs = (selector) => {
  if (!selector) {
    return;
  }

  const tabBtns = document.querySelectorAll(`${selector} .js-tabs-btn`);
  const tabContents = document.querySelectorAll(`${selector} .js-tabs-content`);

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.unique');

      const tabContent = document.querySelector(`${selector} [data-tab-content=${btn.id}]`);

      if (index === 0) { // todo: решить проблему, если кнопок табов будет много
        parent.style.setProperty('--tabs-gradient', 'radial-gradient(183.92% 177.93% at 112.29% -107.48%, #483142 0%, rgba(204, 86, 35, 0) 100%)');
      } else if (index === 1) {
        parent.style.setProperty('--tabs-gradient', 'radial-gradient(183.92% 177.93% at 112.29% -107.48%, #1E4C73 0%, rgba(204, 86, 35, 0) 100%)');
      } else {
        parent.style.setProperty('--tabs-gradient', 'radial-gradient(183.92% 177.93% at 112.29% -107.48%, #271E37 0%, rgba(204, 86, 35, 0) 100%)');
      }

      tabContents.forEach((content) => {
        content.classList.remove('unique__content--show');
      });

      tabBtns.forEach((btn) => {
        btn.closest('.tabs-nav__item').classList.remove('tabs-nav__item--active');
      });

      btn.closest('.tabs-nav__item').classList.add('tabs-nav__item--active');
      tabContent.classList.add('unique__content--show');
    });
  });
};

export default Tabs;
