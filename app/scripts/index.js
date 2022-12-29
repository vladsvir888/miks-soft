import LazyLoad from 'vanilla-lazyload';
import sal from 'sal.js';
import * as focusTrap from 'focus-trap';

import Header from './header';
import SeveralExamplesSlider from './severalExamplesSlider';
import Tabs from './tabs';
import Form from './form';
import BurgerMenu from './burgerMenu';
import CaseSlider from './caseSlider';
import Modal from './modal';

document.addEventListener('DOMContentLoaded', () => {
  window.my_trap = {
    'header': focusTrap.createFocusTrap('.header__container'),
    'popup': focusTrap.createFocusTrap('.popup__inner'),
  };

  new LazyLoad();
  sal();

  Header();
  SeveralExamplesSlider();
  new Tabs('.unique');
  new Tabs('.portfolio');

  document.querySelectorAll('.js-form').forEach(form => {
    new Form(form);
  });

  BurgerMenu();
  CaseSlider();
  Modal();

  if (document.querySelector('.video')) {
    document.querySelectorAll('.video').forEach(video => {
      video.play();
    });
  }
});
