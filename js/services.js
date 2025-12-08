function openModal(title) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  if (modal && modalTitle) {
    modalTitle.innerText = title;
    modal.style.display = 'block';
  }
}
function closeModal() {
  const modal = document.getElementById('serviceModal');
  if (modal) modal.style.display = 'none';
}
// close modal when click outside content
window.addEventListener('click', function(e){
  const modal = document.getElementById('serviceModal');
  if (modal && e.target === modal) modal.style.display = 'none';
});
