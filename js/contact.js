document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById('bookingForm');

    // Hàm kiểm tra số điện thoại Việt Nam
    function isValidPhoneNumber(phone) {
        // Quy tắc: Bắt đầu bằng số 0, theo sau là 9 chữ số (Tổng 10 số)
        // /^\d+$/ kiểm tra chỉ chứa số
        const phoneRegex = /^0\d{9}$/; 
        return phoneRegex.test(phone);
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn load lại trang

            // Lấy giá trị từ form
            const nameInput = document.getElementById('fullname');
            const phoneInput = document.getElementById('phone');
            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();

            // 1. Kiểm tra rỗng (Bắt buộc nhập)
            if (!name || !phone) {
                alert("Vui lòng điền đầy đủ Họ tên và Số điện thoại!");
                return; // Dừng lại không gửi
            }

            // 2. Validate số điện thoại (Yêu cầu của thầy)
            if (!isValidPhoneNumber(phone)) {
                alert("Số điện thoại không hợp lệ! SĐT phải có 10 số và bắt đầu bằng số 0.");
                phoneInput.focus(); // Đưa con trỏ chuột về ô SĐT để sửa
                phoneInput.style.borderColor = "red"; // Viền đỏ báo lỗi
                return; // Dừng lại
            }

            // Nếu mọi thứ OK -> Gửi thành công
            phoneInput.style.borderColor = "#ddd"; // Trả lại viền bình thường
            alert(`Đăng ký thành công!\nCảm ơn bạn ${name}. Chúng tôi sẽ liên hệ số ${phone} trong giây lát.`);
            
            // Xóa trắng form
            bookingForm.reset();
        });
        
        // Sự kiện: Khi người dùng bắt đầu gõ lại vào ô SĐT thì bỏ viền đỏ đi
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function() {
            if(this.style.borderColor === 'red') {
                this.style.borderColor = '#ddd';
            }
        });
    }
});
