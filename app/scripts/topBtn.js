const TopBtn = () => {
  const topBtn = document.querySelector('.top-btn');
  const poftfolioSection = document.querySelector('.hero-inner');

  if (!topBtn) return;

  topBtn.addEventListener('click', () => {
    poftfolioSection.scrollIntoView({
      behavior: "smooth"
    });
  });
};

export default TopBtn;