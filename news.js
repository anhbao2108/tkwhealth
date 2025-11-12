window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fadein');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
// also run once on load
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.fadein');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('visible');
  });
});
