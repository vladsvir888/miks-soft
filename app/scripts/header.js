const Header = () => {
  const header = document.querySelector('.header');

  if (!header) return;

  document.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  });
};

export default Header;
