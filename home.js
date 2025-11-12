document.addEventListener('DOMContentLoaded', function(){
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slideshow img');
  if (!slides || slides.length === 0) return;

  function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }

  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
});
