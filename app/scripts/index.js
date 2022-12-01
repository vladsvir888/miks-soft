import LazyLoad from 'vanilla-lazyload';
import sal from 'sal.js';

import Header from './header';
import SeveralExamples from './severalExamples';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();
  sal();

  Header();
  SeveralExamples();
  Tabs('.unique');
});
