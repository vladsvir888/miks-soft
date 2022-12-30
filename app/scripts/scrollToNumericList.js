const ScrollToNumericList = () => {
  const target = document.querySelector('.js-title');

  if (!target) return;

  if (window.matchMedia('(max-width: 576px)').matches) {
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          document.querySelector('.numeric-list-wrap').scrollIntoView();
        }
      });
    };

    const observer = new IntersectionObserver(callback, { rootMargin: '-150px 0px 0px 0px' });

    observer.observe(target);
  }
};

export default ScrollToNumericList;