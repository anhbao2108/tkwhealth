document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('bookingForm');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const phone = document.getElementById('phone').value.trim();
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phone)) {
      alert('Số điện thoại không hợp lệ! Vui lòng nhập 10 chữ số.');
      return;
    }
    alert('Gửi thành công! (Đây là demo, dữ liệu chưa được gửi server)');
    form.reset();
  });
});
