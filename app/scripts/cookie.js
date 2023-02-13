const toggleCookie = () => {
  const btn = document.querySelector('.cookie__btn');

  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.parentElement.remove();
  });
};

export default toggleCookie;
