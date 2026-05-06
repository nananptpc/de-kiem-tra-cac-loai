// ========== DỮ LIỆU TỪ CSV/EXCEL ==========
// Tổng số câu: 15
// Được sinh tự động bởi Convert Tool

const rawQuizData = [
  {
    "id": 1,
    "cau_hoi": "Nét ㇀ (gạch chéo lên phải) có tên là gì?",
    "phuong_an_A": "Nét chấm (丶)",
    "phuong_an_B": "Nét hất (㇀)",
    "phuong_an_C": "Nét mác (乛)",
    "phuong_an_D": "Nét ngang (一)",
    "dap_an_dung": "B"
  },
  {
    "id": 2,
    "cau_hoi": "Nét 乛 (gãy cong) có tên chính xác là gì?",
    "phuong_an_A": "Nét ngang",
    "phuong_an_B": "Nét sổ",
    "phuong_an_C": "Nét mác (乛)",
    "phuong_an_D": "Nét phẩy (丿)",
    "dap_an_dung": "C"
  },
  {
    "id": 3,
    "cau_hoi": "Đâu là tên của nét ㇏ (gạch chéo xuống phải, tạo góc)?",
    "phuong_an_A": "Nét phẩy (丿)",
    "phuong_an_B": "Nét mác (乛)",
    "phuong_an_C": "Nét chấm (丶)",
    "phuong_an_D": "Nét mác dài (㇏)",
    "dap_an_dung": "D"
  },
  {
    "id": 4,
    "cau_hoi": "Nét sổ (丨) thường được viết theo hướng nào?",
    "phuong_an_A": "Từ dưới lên trên",
    "phuong_an_B": "Từ trên xuống dưới",
    "phuong_an_C": "Từ trái sang phải",
    "phuong_an_D": "Từ phải sang trái",
    "dap_an_dung": "B"
  },
  {
    "id": 5,
    "cau_hoi": "Nét phẩy trái (丿) có đặc điểm gì?",
    "phuong_an_A": "Từ trên trái xuống dưới phải",
    "phuong_an_B": "Từ trên phải xuống dưới trái",
    "phuong_an_C": "Từ dưới lên trên",
    "phuong_an_D": "Kéo ngang rồi gãy",
    "dap_an_dung": "B"
  },
  {
    "id": 6,
    "cau_hoi": "Nguyên tắc 'ngang trước, sổ sau' được áp dụng cho chữ nào?",
    "phuong_an_A": "十",
    "phuong_an_B": "八",
    "phuong_an_C": "人",
    "phuong_an_D": "口",
    "dap_an_dung": "A"
  },
  {
    "id": 7,
    "cau_hoi": "Với chữ 小, thứ tự đúng là:",
    "phuong_an_A": "Giữa → trái → phải",
    "phuong_an_B": "Trái → giữa → phải",
    "phuong_an_C": "Phải → giữa → trái",
    "phuong_an_D": "Trái → phải → giữa",
    "dap_an_dung": "A"
  },
  {
    "id": 8,
    "cau_hoi": "Chữ 辶 (bộ sước) được viết theo thứ tự nào?",
    "phuong_an_A": "Viết bộ sước trước, sau đó viết phần bên trong",
    "phuong_an_B": "Viết phần bên trong trước, sau đó mới viết bộ sước",
    "phuong_an_C": "Viết nét chấm trước, rồi nét khung",
    "phuong_an_D": "Viết liền mạch một nét",
    "dap_an_dung": "B"
  },
  {
    "id": 9,
    "cau_hoi": "Với chữ 口, nét thứ hai là nét gì?",
    "phuong_an_A": "Sổ trái (丨)",
    "phuong_an_B": "Gập ngang (𠃌)",
    "phuong_an_C": "Ngang dưới (一)",
    "phuong_an_D": "Nét hất (㇀)",
    "dap_an_dung": "B"
  },
  {
    "id": 10,
    "cau_hoi": "Chữ 国 (quốc) có thứ tự viết đúng là:",
    "phuong_an_A": "Khung ngoài → bên trong → đóng khung",
    "phuong_an_B": "Bên trong → khung ngoài",
    "phuong_an_C": "Khung trái → trong → khung phải",
    "phuong_an_D": "Khung dưới → trong → khung trên",
    "dap_an_dung": "A"
  },
  {
    "id": 11,
    "cau_hoi": "Nét cong (⺄) thường xuất hiện ở chữ nào?",
    "phuong_an_A": "乙",
    "phuong_an_B": "十",
    "phuong_an_C": "人",
    "phuong_an_D": "口",
    "dap_an_dung": "A"
  },
  {
    "id": 12,
    "cau_hoi": "Nét gập (𠃍) có điểm gì đặc biệt?",
    "phuong_an_A": "Là kết hợp ngang + sổ",
    "phuong_an_B": "Là kết hợp sổ + ngang",
    "phuong_an_C": "Luôn viết sau cùng",
    "phuong_an_D": "Chỉ có trong một số nét Hán",
    "dap_an_dung": "A"
  },
  {
    "id": 13,
    "cau_hoi": "Khi viết nét chấm (丶), nên đặt bút như thế nào?",
    "phuong_an_A": "Chấm nhẹ từ trên xuống dưới",
    "phuong_an_B": "Kéo dài thành nét sổ",
    "phuong_an_C": "Viết từ dưới lên trên",
    "phuong_an_D": "Chấm ngang từ trái",
    "dap_an_dung": "A"
  },
  {
    "id": 14,
    "cau_hoi": "Thứ tự viết chữ 水 (thủy) là:",
    "phuong_an_A": "Giữa → trái → phải",
    "phuong_an_B": "Trái → giữa → phải",
    "phuong_an_C": "Phải → giữa → trái",
    "phuong_an_D": "Trái → phải → giữa",
    "dap_an_dung": "A"
  },
  {
    "id": 15,
    "cau_hoi": "Nét mác dài (㇏) thường được viết ở bước nào?",
    "phuong_an_A": "Luôn viết đầu tiên",
    "phuong_an_B": "Luôn viết cuối cùng",
    "phuong_an_C": "Viết sau các nét ngang-sổ",
    "phuong_an_D": "Viết trước nét phẩy",
    "dap_an_dung": "C"
  }
];
