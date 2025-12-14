// js/common.js

document.addEventListener("DOMContentLoaded", function() {
    
    // Nội dung HTML của Footer Chuyên nghiệp
    const footerContent = `
    <div class="container">
        <div class="footer-top">
            <div class="footer-col">
                <div class="footer-logo">Dental <span>Care</span></div>
                <p class="footer-desc">
                    Hệ thống nha khoa chuẩn Quốc tế. Cam kết mang lại nụ cười rạng rỡ và sức khỏe toàn diện.
                </p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h3>Dịch Vụ</h3>
                <ul class="footer-links">
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Niềng răng thẩm mỹ</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Cấy ghép Implant</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Bọc răng sứ</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Nhổ răng khôn</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Về Chúng Tôi</h3>
                <ul class="footer-links">
                    <li><a href="about.html"><i class="fas fa-chevron-right"></i> Giới thiệu</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Bảng giá</a></li>
                    <li><a href="news.html"><i class="fas fa-chevron-right"></i> Tin tức</a></li>
                    <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Liên hệ</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Liên Hệ</h3>
                <ul class="contact-info">
                    <li><i class="fas fa-map-marker-alt"></i> 97, Man Thiện, TP.HCM</li>
                    <li><i class="fas fa-phone-alt"></i> Hotline: <strong style="color: #E64A19;">1900 1234</strong></li>
                    <li><i class="fas fa-envelope"></i> contact@dentalcare.vn</li>
                    <li><i class="fas fa-clock"></i> 8:00 - 20:00 (Hàng ngày)</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="footer-bottom">
        <div class="container">
            <p>&copy; 2024 <strong>Dental Care Clinic</strong>. All rights reserved.</p>
        </div>
    </div>
    `;

    // Tìm thẻ có id="main-footer" và chèn nội dung vào
    const footerElement = document.getElementById('main-footer');
    if (footerElement) {
        footerElement.innerHTML = footerContent;
        footerElement.classList.add('main-footer'); // Thêm class để nhận CSS
    }
});
