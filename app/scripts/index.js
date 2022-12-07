import LazyLoad from 'vanilla-lazyload';
import sal from 'sal.js';

import Header from './header';
import SeveralExamples from './severalExamples';
import Tabs from './tabs';
import Validation from './validation';
import BurgerMenu from './burgerMenu';
import Case from './case';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();
  sal();

  Header();
  SeveralExamples();
  Tabs('.unique');
  Tabs('.portfolio');
  Validation();
  BurgerMenu();
  Case();
});
