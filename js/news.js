document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Chọn tất cả các thẻ bài viết
    const newsItems = document.querySelectorAll('.news-item');

    // NẾU KHÔNG TÌM THẤY BÀI VIẾT NÀO -> DỪNG LẠI (Tránh lỗi)
    if (newsItems.length === 0) return;

    // 2. Cấu hình IntersectionObserver (Theo dõi cuộn chuột)
    if ('IntersectionObserver' in window) {
         
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Nếu bài viết lọt vào màn hình
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Thêm class kích hoạt CSS
                    observer.unobserve(entry.target); // Không theo dõi nữa
                }
            });
        }, { threshold: 0.1 }); 

        newsItems.forEach(item => {
            observer.observe(item);
        });

    } else {
        // Fallback: Nếu trình duyệt lỗi hoặc cũ, cứ thêm class cho nó hiện ra luôn
        newsItems.forEach(item => {
            item.classList.add('visible');
        });
    }
});
