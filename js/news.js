// Sử dụng Intersection Observer hoặc đơn giản là window.onload để kích hoạt fade in
window.onload = function() {
    const textElements = document.querySelectorAll('.fade-text');
    
    textElements.forEach((el, index) => {
        // Set timeout để từng cái hiện ra lần lượt cho đẹp
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 300); // Mỗi bài cách nhau 300ms
    });
};
