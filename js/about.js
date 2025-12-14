// about.js - Xử lý logic riêng cho trang Giới thiệu
document.addEventListener('DOMContentLoaded', function() {
    console.log("Trang Giới Thiệu đã tải thành công!");
    
    // Nếu muốn thêm hiệu ứng xuất hiện dần (Fade In) cho danh sách bác sĩ
    const doctorItems = document.querySelectorAll('.doctor-item');
    
    doctorItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 1s ease';
        
        // Hiện lần lượt từng bác sĩ
        setTimeout(() => {
            item.style.opacity = '1';
        }, 300 * (index + 1));
    });
});
 
