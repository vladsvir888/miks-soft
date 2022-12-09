import * as focusTrap from 'focus-trap';

const BurgerMenu = () => {
  const burger = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const burgerBtn = burger.querySelector('.burger__btn');

  if (!burger) return;

  const trap = focusTrap.createFocusTrap('.header__inner');

  burger.addEventListener('click', () => {
    if (!header.classList.contains('header--show-burger-menu')) {
      header.classList.add('header--show-burger-menu');
      burgerBtn.setAttribute('aria-expanded', true);
      document.body.style.overflowY = 'hidden';

      trap.activate();
    } else {
      header.classList.remove('header--show-burger-menu');
      burgerBtn.setAttribute('aria-expanded', false);
      document.body.removeAttribute('style');

      trap.deactivate();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code == 'Escape' && document.querySelector('.header--show-burger-menu')) {
      header.classList.remove('header--show-burger-menu');
      burgerBtn.setAttribute('aria-expanded', false);
      document.body.removeAttribute('style');

      trap.deactivate();
    }
  });
};

export default BurgerMenu;
