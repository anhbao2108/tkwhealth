// Hàm mở Modal
function openModal(title, description) {
    const modal = document.getElementById('serviceModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = description;
    
    modal.style.display = "block";
}

// Hàm đóng Modal
function closeModal() {
    document.getElementById('serviceModal').style.display = "none";
}

// Đóng khi click ra ngoài vùng modal
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
