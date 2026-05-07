// ========== DỮ LIỆU TỪ CSV/EXCEL ==========
// Tổng số câu: 14
// Được sinh tự động bởi Convert Tool

const rawQuizData = [
  {
    "id": 1,
    "cau_hoi": "Âm “z” trong tiếng Trung khi phát âm, đầu lưỡi đặt ở vị trí nào?",
    "phuong_an_A": "Chạm vào mặt sau răng cửa dưới",
    "phuong_an_B": "Chạm vào mặt trước răng cửa trên",
    "phuong_an_C": "Chạm vào ngạc cứng vòm miệng",
    "phuong_an_D": "Cuộn lên chạm ngạc mềm",
    "dap_an_dung": "A"
  },
  {
    "id": 2,
    "cau_hoi": "Chọn pinyin đúng cho âm “ch” trong 吃饭:",
    "phuong_an_A": "Chi1 fan3",
    "phuong_an_B": "Chï fan",
    "phuong_an_C": "Chr fan",
    "phuong_an_D": "Chī fàn",
    "dap_an_dung": "D"
  },
  {
    "id": 3,
    "cau_hoi": "Phát âm “sh” khác với “s” chủ yếu ở:",
    "phuong_an_A": "Không bật hơi",
    "phuong_an_B": "Có rung thanh quản",
    "phuong_an_C": "Đầu lưỡi cuộn lên",
    "phuong_an_D": "Môi tròn hơn",
    "dap_an_dung": "C"
  },
  {
    "id": 4,
    "cau_hoi": "Pinyin nào dưới đây viết đúng quy tắc thanh điệu?",
    "phuong_an_A": "xǐe",
    "phuong_an_B": "xuě",
    "phuong_an_C": "xüě",
    "phuong_an_D": "xiě",
    "dap_an_dung": "B"
  },
  {
    "id": 5,
    "cau_hoi": "Cách phát âm “j/q/x” khác “z/c/s” chủ yếu do:",
    "phuong_an_A": "Vị trí lưỡi phẳng hơn",
    "phuong_an_B": "Lưỡi nâng lên gần ngạc cứng",
    "phuong_an_C": "Môi chu ra trước",
    "phuong_an_D": "Có bật hơi mạnh",
    "dap_an_dung": "B"
  },
  {
    "id": 6,
    "cau_hoi": "Chọn cặp pinyin đúng cho hai từ sau: 四——是:",
    "phuong_an_A": "sì – shì",
    "phuong_an_B": "sí – shí",
    "phuong_an_C": "cả hai đều đúng",
    "phuong_an_D": "cả hai đều sai",
    "dap_an_dung": "A"
  },
  {
    "id": 7,
    "cau_hoi": "Pinyin “lǜ” có thanh điệu số mấy?",
    "phuong_an_A": "4",
    "phuong_an_B": "3",
    "phuong_an_C": "2",
    "phuong_an_D": "1",
    "dap_an_dung": "A"
  },
  {
    "id": 8,
    "cau_hoi": "Âm nào là âm bật hơi trong các âm sau?",
    "phuong_an_A": "z",
    "phuong_an_B": "zh",
    "phuong_an_C": "j",
    "phuong_an_D": "x",
    "dap_an_dung": "B"
  },
  {
    "id": 9,
    "cau_hoi": "Chữ 女 trong từ 女人 có pinyin đúng là:",
    "phuong_an_A": "nǚ",
    "phuong_an_B": "nü3",
    "phuong_an_C": "nv3",
    "phuong_an_D": "nũ3",
    "dap_an_dung": "A"
  },
  {
    "id": 10,
    "cau_hoi": "Chọn pinyin đúng cho “Hải Phòng”:",
    "phuong_an_A": "háifáng",
    "phuong_an_B": "hǎifáng",
    "phuong_an_C": "hàifàng",
    "phuong_an_D": "hāifàng",
    "dap_an_dung": "B"
  },
  {
    "id": 11,
    "cau_hoi": "Phân biệt “zǎo” và “zhǎo” dựa vào:",
    "phuong_an_A": "Độ dài nguyên âm",
    "phuong_an_B": "Cuốn lưỡi hay không",
    "phuong_an_C": "Bật hơi hay không",
    "phuong_an_D": "Cao độ giọng",
    "dap_an_dung": "B"
  },
  {
    "id": 12,
    "cau_hoi": "Pinyin “xièxie” (cảm ơn) có thanh điệu đúng là:",
    "phuong_an_A": "xièxiē",
    "phuong_an_B": "xièxíe",
    "phuong_an_C": "xièxie",
    "phuong_an_D": "xiěxiè",
    "dap_an_dung": "C"
  },
  {
    "id": 13,
    "cau_hoi": "Âm “r” trong tiếng Trung (ví dụ “rì”) đọc giống:",
    "phuong_an_A": "Âm “z” nhưng bật hơi",
    "phuong_an_B": "Âm “l” miệng mở",
    "phuong_an_C": "Âm “s” rung thanh quản",
    "phuong_an_D": "Âm “zh” nhưng hữu thanh",
    "dap_an_dung": "D"
  },
  {
    "id": 14,
    "cau_hoi": "Pinyin nào có vị trí đánh thanh sai?",
    "phuong_an_A": "shuǐ",
    "phuong_an_B": "lèi",
    "phuong_an_C": "toū",
    "phuong_an_D": "hǎo",
    "dap_an_dung": "C"
  }
];
