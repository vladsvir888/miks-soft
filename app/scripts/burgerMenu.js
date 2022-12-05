const BurgerMenu = () => {
  const burger = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const burgerBtn = burger.querySelector('.burger__btn');

  if (!burger) return;

  burger.addEventListener('click', () => {
    if (!header.classList.contains('header--show-burger-menu')) {
      header.classList.add('header--show-burger-menu');
      burgerBtn.setAttribute('aria-expanded', true);
      document.body.style.overflowY = 'hidden';
    } else {
      header.classList.remove('header--show-burger-menu');
      burgerBtn.setAttribute('aria-expanded', false);
      document.body.removeAttribute('style');
    }
  });
};

export default BurgerMenu;
