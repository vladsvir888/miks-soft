import LazyLoad from 'vanilla-lazyload';
import sal from 'sal.js';

import Header from './header';
import SeveralExamplesSlider from './severalExamplesSlider';
import Tabs from './tabs';
import Validation from './validation';
import BurgerMenu from './burgerMenu';
import CaseSlider from './caseSlider';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();
  sal();

  Header();
  SeveralExamplesSlider();
  new Tabs('.unique');
  new Tabs('.portfolio');
  Validation();
  BurgerMenu();
  CaseSlider();
});
