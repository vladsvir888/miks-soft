const Tabs = (selector) => {
  if (!selector) {
    return;
  }

  const section = document.querySelector(selector);

  if (!section) return;

  section.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('js-tabs-btn')) return;

    const { id } = target;

    if (!id) return;

    const { color } = target.dataset;

    if (color) {
      section.style.setProperty('--tabs-gradient', `linear-gradient(223.91deg, ${color} -1.11%, rgba(204, 86, 35, 0) 42.01%)`);
    }

    const tabContent = document.querySelector(`${selector} [data-tab-content="${id}"]`);

    const tabContents = document.querySelectorAll(`${selector} .js-tabs-content`);
    tabContents.forEach(content => {
      content.classList.remove('js-show');
    });

    const tabBtns = document.querySelectorAll(`${selector} .js-tabs-btn`);
    tabBtns.forEach(btn => {
      btn.closest('.tabs-nav__item').classList.remove('tabs-nav__item--active');
    });

    target.closest('.tabs-nav__item').classList.add('tabs-nav__item--active');
    tabContent.classList.add('js-show');
  });
};

export default Tabs;
