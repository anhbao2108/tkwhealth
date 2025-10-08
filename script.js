// Slideshow
$(document).ready(function(){
  let slides = $(".slideshow img");
  let i = 0;
  setInterval(function(){
    slides.eq(i).fadeOut(1000);
    i = (i + 1) % slides.length;
    slides.eq(i).fadeIn(1000);
  }, 3000);

  // Modal dịch vụ
  $(".service").click(function(){
    let detail = $(this).data("detail");
    $("#modal-text").text(detail);
    $("#modal").fadeIn();
  });
  $("#close").click(function(){
    $("#modal").fadeOut();
  });

  // FadeIn tin tức
  $(".fade-text").each(function(index){
    $(this).delay(500*index).fadeIn(1000);
  });
});

// Validate form liên hệ
function validateForm() {
  var phone = document.getElementById("phone").value;
  var regex = /^[0-9]{10}$/;
  if(!regex.test(phone)) {
    alert("Số điện thoại phải có 10 số!");
    return false;
  }
  alert("Đặt lịch thành công!");
  return true;
}
