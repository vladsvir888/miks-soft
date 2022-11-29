import LazyLoad from 'vanilla-lazyload';

import Header from './header';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  Header();
});
