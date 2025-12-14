$(document).ready(function() {
    /* ========================================== */
    /* 1. LOGIC CHO BANNER SLIDESHOW (jQuery)     */
    /* ========================================== */
    
    // Lấy danh sách các slide
    const slides = $('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoSlideInterval;

    // Kiểm tra xem trang có slider không (để tránh lỗi nếu dùng file này cho trang khác)
    if (totalSlides > 0) {
        
        // Hàm hiển thị slide cụ thể
        function showSlide(index) {
            // Ẩn tất cả slide (dùng hiệu ứng fadeOut của jQuery)
            slides.fadeOut(500).removeClass('active');
            
            // Hiện slide mới (eq(index) để lấy slide tại vị trí index)
            slides.eq(index).fadeIn(500).addClass('active');
            currentSlide = index; 
        }

        // Hàm bắt đầu chạy tự động
        function startAutoSlide() {
            // Xóa interval cũ nếu có để tránh chạy chồng chéo
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            
            autoSlideInterval = setInterval(function() {
                // Tăng index, nếu hết thì quay về 0
                let nextSlide = (currentSlide + 1) % totalSlides;
                showSlide(nextSlide);
            }, 4000); // 4000ms = 4 giây chuyển 1 lần
        }

        // --- XỬ LÝ SỰ KIỆN CLICK NÚT ---

        // 1. Nút Next (Tiếp theo)
        $('.next-btn').click(function() {
            clearInterval(autoSlideInterval); // Tạm dừng tự động
            let nextSlide = (currentSlide + 1) % totalSlides;
            showSlide(nextSlide);
            startAutoSlide(); // Khởi động lại tự động
        });

        // 2. Nút Prev (Lùi lại)
        $('.prev-btn').click(function() {
            clearInterval(autoSlideInterval); // Tạm dừng tự động
            // Công thức lùi vòng tròn (nếu về âm thì nhảy xuống cuối)
            let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prevSlide);
            startAutoSlide(); // Khởi động lại tự động
        });

        // Khởi tạo trạng thái ban đầu
        slides.hide(); // Ẩn hết trước
        slides.eq(0).show().addClass('active'); // Hiện slide đầu
        startAutoSlide();
    }

    /* ========================================== */
    /* 2. HIỆU ỨNG CUỘN TRANG (SCROLL ANIMATION)  */
    /* ========================================== */
    $(window).scroll(function() {
        // Tính vị trí cuộn hiện tại + chiều cao cửa sổ - 1 khoảng offset
        var scrollPos = $(window).scrollTop() + $(window).height() - 150; 
        
        // Duyệt qua các section cần hiệu ứng
        $('.section-doctors, .section-services-highlight, .section-promo').each(function() {
            // Nếu vị trí cuộn > vị trí của phần tử -> Thêm class hiện ra
            if (scrollPos > $(this).offset().top) {
                $(this).addClass('is-visible'); 
            }
        });
    });
});
