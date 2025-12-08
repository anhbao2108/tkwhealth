document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form load lại trang

    // Lấy giá trị từ input
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();

    // 1. Kiểm tra rỗng
    if (!name || !phone || !date) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
    }

    // 2. Kiểm tra số điện thoại (Regex: 10 chữ số)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Số điện thoại không hợp lệ (Phải là 10 số)!");
        return;
    }

    // Nếu mọi thứ OK
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ lại với bạn: " + name);
    
    // Reset form
    document.getElementById('bookingForm').reset();
});
