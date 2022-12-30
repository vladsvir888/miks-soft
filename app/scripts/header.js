const Header = () => {
  const header = document.querySelector('.js-header');

  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  });
};

export default Header;
