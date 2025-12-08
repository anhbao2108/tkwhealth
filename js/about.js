document.addEventListener('DOMContentLoaded', function(){
  const doctorImg = document.querySelector('.doctor-img');
  if (doctorImg) {
    doctorImg.addEventListener('mouseover', () => doctorImg.style.transform = 'scale(1.06)');
    doctorImg.addEventListener('mouseout', () => doctorImg.style.transform = 'scale(1)');
  }
});
