const Header = () => {
  const header = document.querySelector('.js-header');
  const target = document.querySelector('.title--h1');

  if (!target && !header) return;

  const callback = (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('header--active');
      } else {
        header.classList.remove('header--active');
      }
    });
  };

  const observer = new IntersectionObserver(callback, { rootMargin: '-350px' });

  observer.observe(target);
};

export default Header;
