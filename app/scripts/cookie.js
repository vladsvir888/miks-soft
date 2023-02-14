const toggleCookie = () => {
  const btn = document.querySelector('.cookie__btn');

  if (!btn) return;

  const storageKey = 'miks_cookie_notification';

  const isCookieAccepted = JSON.parse(localStorage.getItem(storageKey));

  if (!isCookieAccepted) {
    btn.parentElement.classList.remove('cookie--hidden');
  }

  btn.addEventListener('click', () => {
    localStorage.setItem(storageKey, true);

    btn.parentElement.classList.add('cookie--hidden');
  });
};

export default toggleCookie;
