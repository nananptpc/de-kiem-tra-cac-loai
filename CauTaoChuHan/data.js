// ========== DỮ LIỆU TỪ CSV/EXCEL ==========
// Tổng số câu: 10
// Được sinh tự động bởi Convert Tool

const rawQuizData = [
  {
    "id": 1,
    "cau_hoi": "Loại chữ 日 (mặt trời), 山 (núi) là loại chữ gì?",
    "phuong_an_A": "Chữ tượng hình",
    "phuong_an_B": "Chữ chỉ sự",
    "phuong_an_C": "Chữ hội ý",
    "phuong_an_D": "Chữ hình thanh",
    "dap_an_dung": "A"
  },
  {
    "id": 2,
    "cau_hoi": "Chữ 上 (trên) và 下 (dưới) thuộc loại chữ nào?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "B"
  },
  {
    "id": 3,
    "cau_hoi": "Chữ 休 (nghỉ ngơi) = 人 (người) + 木 (cây) là ví dụ của loại chữ gì?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "C"
  },
  {
    "id": 4,
    "cau_hoi": "Chữ 妈 (mẹ) gồm bộ 女 (nữ) và 马 (mã). Đây là loại chữ gì?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "D"
  },
  {
    "id": 5,
    "cau_hoi": "Trong chữ hình thanh, bộ phận nào thường biểu thị ý nghĩa?",
    "phuong_an_A": "Bộ chỉ âm",
    "phuong_an_B": "Bộ chỉ nghĩa (bộ thủ)",
    "phuong_an_C": "Cả hai đều biểu thị ý nghĩa",
    "phuong_an_D": "Không bộ nào",
    "dap_an_dung": "B"
  },
  {
    "id": 6,
    "cau_hoi": "Chữ 林 (rừng) = 木 (cây) + 木 (cây) được tạo theo cách nào?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "C"
  },
  {
    "id": 7,
    "cau_hoi": "Đặc điểm của chữ tượng hình là gì?",
    "phuong_an_A": "Biểu thị ý niệm trừu tượng",
    "phuong_an_B": "Vẽ hình dáng sự vật",
    "phuong_an_C": "Kết hợp nhiều chữ đơn",
    "phuong_an_D": "Có bộ chỉ âm và nghĩa",
    "dap_an_dung": "B"
  },
  {
    "id": 8,
    "cau_hoi": "Bộ thủ 氵 trong chữ 河 (sông), 海 (biển) cho biết điều gì?",
    "phuong_an_A": "Liên quan lửa",
    "phuong_an_B": "Liên quan nước",
    "phuong_an_C": "Liên quan đất",
    "phuong_an_D": "Liên quan kim loại",
    "dap_an_dung": "B"
  },
  {
    "id": 9,
    "cau_hoi": "Chữ nào sau đây KHÔNG phải là chữ tượng hình?",
    "phuong_an_A": "山 (núi)",
    "phuong_an_B": "水 (nước)",
    "phuong_an_C": "休 (nghỉ)",
    "phuong_an_D": "火 (lửa)",
    "dap_an_dung": "C"
  },
  {
    "id": 10,
    "cau_hoi": "Loại chữ nào chiếm tỷ lệ nhiều nhất trong chữ Hán (khoảng 80-90%)?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "D"
  }
];
