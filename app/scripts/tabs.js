const SELECTORS = {
  BUTTON: '.js-tabs-btn',
  CONTENT: '.js-tabs-content',
  NAV_ITEM: '.tabs-nav__item',
  BOTTOM_GRADIENT: '.bottom-gradient',
};

const CLASSES = {
  ACTIVE_CONTENT: 'js-show',
  BUTTON: 'js-tabs-btn',
  ACTIVE_NAV_ITEM: 'tabs-nav__item--active',
};

class Tabs {
  constructor(selector) {
    if (!selector) return;

    this.wrap = document.querySelector(selector);

    if (!this.wrap) return;

    this.bottomGradient = this.wrap.querySelector(SELECTORS.BOTTOM_GRADIENT);

    this.tabs = [...this.wrap.querySelectorAll(SELECTORS.BUTTON)];
    this.firstTab = this.tabs[0];
    this.lastTab = this.tabs[this.tabs.length - 1];

    this.tabs.forEach((tab) => {
      tab.addEventListener('click', this.onClick.bind(this));
      tab.addEventListener('keydown', this.onKeydown.bind(this));
    });
  }

  toggleTab(tab) {
    const { id } = tab;

    if (!id) return;

    const { color } = tab.dataset;

    if (color) {
      this.wrap.style.setProperty('--tabs-gradient-top', `linear-gradient(223.91deg, ${color} -1.11%, rgba(204, 86, 35, 0) 42.01%)`);
      this.bottomGradient.style.setProperty('--tabs-gradient-bottom', `linear-gradient(15.6deg, ${color} -295.49%, rgba(204, 116, 35, 0) 46.47%)`);
    }

    const tabContent = this.wrap.querySelector(`[aria-labelledby="${id}"]`);

    const tabContents = this.wrap.querySelectorAll(SELECTORS.CONTENT);
    tabContents.forEach((content) => {
      content.classList.remove(CLASSES.ACTIVE_CONTENT);
    });

    const tabBtns = this.wrap.querySelectorAll(SELECTORS.BUTTON);
    tabBtns.forEach((btn) => {
      btn.closest(SELECTORS.NAV_ITEM).classList.remove(CLASSES.ACTIVE_NAV_ITEM);
      btn.setAttribute('aria-selected', false);
    });

    tab.setAttribute('aria-selected', true);
    tab.closest(SELECTORS.NAV_ITEM).classList.add(CLASSES.ACTIVE_NAV_ITEM);
    tabContent.classList.add(CLASSES.ACTIVE_CONTENT);

    window.scrollTo({ top: this.wrap.offsetTop });
  }

  onClick(e) {
    this.toggleTab(e.target);
  }

  moveFocusToTab(currentTab) {
    currentTab.focus();

    this.toggleTab(currentTab);
  }

  moveFocusToPreviousTab(currentTab) {
    let index;

    if (currentTab === this.firstTab) {
      this.moveFocusToTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index - 1]);
    }
  }

  moveFocusToNextTab(currentTab) {
    let index;

    if (currentTab === this.lastTab) {
      this.moveFocusToTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index + 1]);
    }
  }

  onKeydown(e) {
    const { target } = e;

    if (!target.classList.contains(CLASSES.BUTTON)) return;

    let flag = false;

    switch (e.code) {
      case 'ArrowLeft':
        this.moveFocusToPreviousTab(target);
        flag = true;
        break;

      case 'ArrowRight':
        this.moveFocusToNextTab(target);
        flag = true;
        break;

      case 'Home':
        this.moveFocusToTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.moveFocusToTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
}

export default Tabs;
