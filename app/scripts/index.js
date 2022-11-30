import LazyLoad from 'vanilla-lazyload';

import Header from './header';
import SeveralExamples from './severalExamples';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  Header();
  SeveralExamples();
  Tabs('.unique');
});
