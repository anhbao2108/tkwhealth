$(document).ready(function() {
    // Logic Slideshow dùng jQuery
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Ẩn tất cả slide hiện tại
        slides.fadeOut(500); 
        // Hiện slide tiếp theo
        $(slides[index]).fadeIn(500);
    }

    // Tự động chạy sau 3 giây
    let autoSlide = setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);

    // Nút Next
    $('.next-btn').click(function() {
        clearInterval(autoSlide); // Dừng tự động khi click
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    // Nút Prev
    $('.prev-btn').click(function() {
        clearInterval(autoSlide);
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
});
