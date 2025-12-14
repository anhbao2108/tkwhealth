document.addEventListener("DOMContentLoaded", function () {

    const newsData = {
        1: {
            title: "5 Cách Chăm Sóc Răng Miệng Tại Nhà Giúp Bảo Vệ Nụ Cười",
            date: "10/12/2023",
            author: "Bs. Tuấn",
            image: "https://via.placeholder.com/900x450/0056b3/ffffff?text=Dental+Care",

            content: `
            <p>
                Chăm sóc răng miệng đúng cách mỗi ngày là yếu tố quan trọng giúp duy trì
                sức khỏe răng nướu và phòng ngừa các bệnh lý nha khoa phổ biến.
                Nhiều người chỉ quan tâm đến răng khi có dấu hiệu đau nhức,
                tuy nhiên việc phòng ngừa sớm luôn mang lại hiệu quả lâu dài hơn.
            </p>

            <h2>Tầm quan trọng của việc chăm sóc răng miệng</h2>
            <p>
                Khoang miệng là nơi vi khuẩn dễ dàng phát triển nếu không được làm sạch đúng cách.
                Việc vệ sinh răng miệng kém có thể dẫn đến sâu răng, viêm nướu,
                hơi thở có mùi và thậm chí ảnh hưởng đến sức khỏe toàn thân.
            </p>

            <div class="detail-image-inline">
                <img src="https://via.placeholder.com/800x400/E64A19/ffffff?text=Oral+Health" alt="">
                <span>Chăm sóc răng miệng đúng cách giúp ngăn ngừa nhiều bệnh lý nha khoa</span>
            </div>

            <h2>5 cách chăm sóc răng miệng hiệu quả tại nhà</h2>
            <ul>
                <li><strong>Đánh răng đúng cách:</strong> Ít nhất 2 lần mỗi ngày với kem đánh răng có fluor.</li>
                <li><strong>Sử dụng chỉ nha khoa:</strong> Loại bỏ mảng bám ở kẽ răng.</li>
                <li><strong>Súc miệng:</strong> Giúp làm sạch khoang miệng sau bữa ăn.</li>
                <li><strong>Hạn chế đồ ngọt:</strong> Giảm nguy cơ sâu răng và viêm nướu.</li>
                <li><strong>Khám nha khoa định kỳ:</strong> Phát hiện sớm và điều trị kịp thời.</li>
            </ul>

            <h2>Lời khuyên từ bác sĩ</h2>
            <p>
                Duy trì thói quen chăm sóc răng miệng khoa học không chỉ giúp bảo vệ nụ cười
                mà còn tiết kiệm chi phí điều trị về sau.
            </p>

            <div class="service-cta">
                <h3>Dịch vụ nha khoa tại Dental Care</h3>
                <p>
                    Dental Care cung cấp các dịch vụ thăm khám, làm sạch răng,
                    tư vấn chăm sóc và điều trị nha khoa toàn diện.
                </p>
                <a href="services.html">Xem các dịch vụ nha khoa →</a>
            </div>
        `
        },

        2: {
            title: "Ưu Đãi Tháng 12: Giảm 20% Dịch Vụ Cạo Vôi Răng",
            date: "08/12/2023",
            author: "Admin",
            image: "https://via.placeholder.com/900x450/E64A19/ffffff?text=Dental+Promotion",

            content: `
            <p>
                Nhằm tri ân khách hàng trong dịp cuối năm,
                Phòng khám Dental Care triển khai chương trình ưu đãi đặc biệt
                với mức giảm 20% cho dịch vụ cạo vôi răng chuyên sâu.
            </p>

            <h2>Tại sao nên cạo vôi răng định kỳ?</h2>
            <p>
                Vôi răng là nguyên nhân chính gây viêm nướu, hôi miệng và chảy máu chân răng.
                Nếu không được loại bỏ kịp thời, vôi răng có thể dẫn đến viêm nha chu
                và mất răng sớm.
            </p>

            <div class="detail-image-inline">
                <img src="https://via.placeholder.com/800x400/0056b3/ffffff?text=Scaling" alt="">
                <span>Cạo vôi răng định kỳ giúp bảo vệ nướu và men răng</span>
            </div>

            <h2>Nội dung chương trình ưu đãi</h2>
            <ul>
                <li>Giảm ngay <strong>20%</strong> dịch vụ cạo vôi răng.</li>
                <li>Áp dụng trong suốt tháng 12.</li>
                <li>Áp dụng cho khách hàng đặt lịch trước.</li>
            </ul>

            <div class="service-cta">
                <h3>Trải nghiệm dịch vụ tại Dental Care</h3>
                <p>
                    Chúng tôi sử dụng trang thiết bị hiện đại,
                    quy trình an toàn và đội ngũ bác sĩ giàu kinh nghiệm.
                </p>
                <a href="services.html">Tìm hiểu các dịch vụ Dental Care →</a>
            </div>
        `
        },

        3: {
            title: "Niềng Răng Trong Suốt: Giải Pháp Chỉnh Nha Hiện Đại",
            date: "05/12/2023",
            author: "Bs. Lan",
            image: "https://via.placeholder.com/900x450/0056b3/ffffff?text=Invisible+Braces",

            content: `
            <p>
                Niềng răng trong suốt là phương pháp chỉnh nha hiện đại,
                được nhiều khách hàng lựa chọn nhờ tính thẩm mỹ cao và sự tiện lợi.
            </p>

            <h2>Niềng răng trong suốt là gì?</h2>
            <p>
                Phương pháp này sử dụng khay niềng trong suốt được thiết kế riêng,
                giúp dịch chuyển răng dần về đúng vị trí mà không cần mắc cài kim loại.
            </p>

            <div class="detail-image-inline">
                <img src="https://via.placeholder.com/800x400/E64A19/ffffff?text=Orthodontic" alt="">
                <span>Niềng răng trong suốt mang lại tính thẩm mỹ cao</span>
            </div>

            <h2>Ưu và nhược điểm</h2>
            <ul>
                <li><strong>Ưu điểm:</strong> Thẩm mỹ, dễ tháo lắp, vệ sinh thuận tiện.</li>
                <li><strong>Nhược điểm:</strong> Chi phí cao hơn, yêu cầu tuân thủ nghiêm ngặt.</li>
            </ul>

            <h2>Lời khuyên từ bác sĩ chỉnh nha</h2>
            <p>
                Trước khi lựa chọn phương pháp niềng răng,
                khách hàng nên được thăm khám và tư vấn kỹ lưỡng
                để đảm bảo hiệu quả điều trị tối ưu.
            </p>

            <div class="service-cta">
                <h3>Dịch vụ chỉnh nha tại Dental Care</h3>
                <p>
                    Dental Care cung cấp các giải pháp chỉnh nha phù hợp
                    với từng tình trạng răng miệng.
                </p>
                <a href="services.html">Xem dịch vụ chỉnh nha →</a>
            </div>
        `
        }
    };

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (newsData[id]) {
        // Điền tiêu đề
        document.getElementById("detail-title").innerText = newsData[id].title;

        // --- ĐÃ SỬA LẠI ĐOẠN NÀY ĐỂ HIỆN ICON ---
        // Dùng innerHTML và thêm thẻ <i class="..."> vào trước ngày tháng/tên tác giả
        document.getElementById("detail-date").innerHTML = `<i class="far fa-calendar-alt"></i> ${newsData[id].date}`;
        document.getElementById("detail-author").innerHTML = `<i class="far fa-user"></i> ${newsData[id].author}`;

        // --- ĐÃ SỬA LẠI ĐOẠN NÀY ĐỂ HIỆN ẢNH ---
        // Đổi 'detail-image' thành 'detail-img' cho khớp với HTML
        // Và thêm style.display = 'block' để hiện ảnh lên (vì mặc định trong HTML đang ẩn)
        const imgElement = document.getElementById("detail-img");
        if(imgElement) {
            imgElement.src = newsData[id].image;
            imgElement.style.display = 'block'; 
        }

        // Điền nội dung
        document.getElementById("detail-content").innerHTML = newsData[id].content;
    }
});
