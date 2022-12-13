import LazyLoad from 'vanilla-lazyload';
import sal from 'sal.js';

import Header from './header';
import SeveralExamplesSlider from './severalExamplesSlider';
import Tabs from './tabs';
import Form from './form';
import BurgerMenu from './burgerMenu';
import CaseSlider from './caseSlider';

document.addEventListener('DOMContentLoaded', () => {
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
});
