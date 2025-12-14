// DỮ LIỆU CHI TIẾT DỊCH VỤ (Giả lập database)
const serviceData = {
    "whitening": {
        title: "Tẩy Trắng Răng Công Nghệ Laser",
        img: "images/service1.jpg",
        desc: `
            <p>Công nghệ tẩy trắng răng Laser Whitening là giải pháp tiên tiến nhất hiện nay, giúp đánh bật các vết ố vàng lâu năm chỉ sau 60 phút.</p>
            <br>
            <strong>Ưu điểm:</strong>
            <ul>
                <li>- Không gây ê buốt, an toàn tuyệt đối cho men răng.</li>
                <li>- Hiệu quả trắng sáng duy trì từ 3 - 5 năm.</li>
                <li>- Bảo vệ nướu lợi tối đa.</li>
            </ul>
        `
    },
    "braces": {
        title: "Niềng Răng Thẩm Mỹ",
        img: "images/service2.jpg",
        desc: `
            <p>Chúng tôi cung cấp đa dạng các giải pháp chỉnh nha phù hợp với nhu cầu và tài chính của từng khách hàng.</p>
            <br>
            <strong>Các phương pháp:</strong>
            <ul>
                <li>- Mắc cài kim loại: Chi phí thấp, hiệu quả cao.</li>
                <li>- Mắc cài sứ: Thẩm mỹ hơn, ít lộ mắc cài.</li>
                <li>- Invisalign: Khay niềng trong suốt, tháo lắp dễ dàng.</li>
            </ul>
        `
    },
    "implant": {
        title: "Cấy Ghép Implant Thụy Sĩ",
        img: "images/service3.jpg",
        desc: `
            <p>Giải pháp phục hình răng đã mất hoàn hảo nhất, cấu trúc gồm trụ Titanium tích hợp xương và mão sứ bên trên.</p>
            <br>
            <strong>Quy trình:</strong>
            <p>Khám và chụp CT Scan -> Cấy trụ Implant -> Lành thương (3-6 tháng) -> Phục hình răng sứ.</p>
        `
    },
    "kids": {
        title: "Nha Khoa Trẻ Em",
        img: "images/service4.jpg",
        desc: `
            <p>Dịch vụ chuyên biệt dành cho bé với phòng khám được trang trí vui nhộn, giúp bé không còn sợ bác sĩ.</p>
            <p>Bao gồm: Nhổ răng sữa không đau, trám răng Sealant ngừa sâu răng, bôi vecni flour.</p>
        `
    },
    "veneer": {
        title: "Bọc Răng Sứ Thẩm Mỹ",
        img: "images/service5.jpg",
        desc: `
            <p>Khắc phục tình trạng răng nhiễm màu, sứt mẻ hoặc thưa nhẹ. Răng sứ chính hãng nhập khẩu từ Đức, Mỹ.</p>
            <p>Bảo hành chính hãng 10-15 năm. Màu sắc tự nhiên như răng thật.</p>
        `
    },
    "extraction": {
        title: "Nhổ Răng Khôn (Tiểu Phẫu)",
        img: "images/service6.jpg",
        desc: `
            <p>Sử dụng máy siêu âm Piezotome giúp tách nướu nhẹ nhàng, nhổ răng nhanh chóng, hạn chế tối đa sưng đau sau hậu phẫu.</p>
            <p>Quy trình vô trùng tuyệt đối, an toàn cho sức khỏe.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');
    const serviceCards = document.querySelectorAll('.service-card');

    // 1. MỞ MODAL
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Lấy ID từ data-attribute
            const id = this.getAttribute('data-id');
            const data = serviceData[id];

            if (data) {
                // Điền dữ liệu vào modal
                modalTitle.innerText = data.title;
                modalImg.src = data.img;
                modalDesc.innerHTML = data.desc;

                // Hiện modal
                modal.classList.add('show');
            }
        });
    });

    // 2. ĐÓNG MODAL (Nút X)
    closeBtn.addEventListener('click', closeModal);

    // 3. ĐÓNG MODAL (Click ra ngoài)
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal();
        }
    });

    // 4. ĐÓNG MODAL (Phím ESC)
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
    }
});
