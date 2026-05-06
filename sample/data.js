// ========== DỮ LIỆU TỪ CSV/EXCEL ==========
// Tổng số câu: 30
// Được sinh tự động bởi Convert Tool

const rawQuizData = [
  {
    "id": 1,
    "cau_hoi": "Chữ 妈 gồm bộ 女 và 马. Loại chữ này là?",
    "phuong_an_A": "Chữ tượng hình",
    "phuong_an_B": "Chữ chỉ sự vật",
    "phuong_an_C": "Chữ hội ý",
    "phuong_an_D": "Chữ hình thanh",
    "dap_an_dung": "D"
  },
  {
    "id": 2,
    "cau_hoi": "Chữ 林 (rừng) gồm hai cây 木. Đây là chữ?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Hội ý",
    "phuong_an_C": "Giả tá",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "B"
  },
  {
    "id": 3,
    "cau_hoi": "Chữ 休 (nghỉ) gồm người 亻 dựa vào cây 木. Đây là chữ?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự vật",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "C"
  },
  {
    "id": 4,
    "cau_hoi": "Chữ 上 (trên) có nét chỉ vị trí phía trên đường. Đây là chữ?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự vật",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Giả tá",
    "dap_an_dung": "B"
  },
  {
    "id": 5,
    "cau_hoi": "Chữ 江 (sông) gồm bộ thủy 氵 và 工. Loại chữ này là?",
    "phuong_an_A": "Hình thanh",
    "phuong_an_B": "Hội ý",
    "phuong_an_C": "Tượng hình",
    "phuong_an_D": "Chỉ sự vật",
    "dap_an_dung": "A"
  },
  {
    "id": 6,
    "cau_hoi": "Trong câu 我吃了饭, trợ từ 了 biểu thị điều gì?",
    "phuong_an_A": "Hành động đang xảy ra",
    "phuong_an_B": "Hành động đã hoàn thành",
    "phuong_an_C": "Hành động sắp xảy ra",
    "phuong_an_D": "Hành động thường xuyên",
    "dap_an_dung": "B"
  },
  {
    "id": 7,
    "cau_hoi": "Trong câu 我在吃饭, 内 biểu thị?",
    "phuong_an_A": "Địa điểm",
    "phuong_an_B": "Thời gian",
    "phuong_an_C": "Hành động đang tiếp diễn",
    "phuong_an_D": "Phương hướng",
    "dap_an_dung": "C"
  },
  {
    "id": 8,
    "cau_hoi": "Cấu trúc 越来越 + adj có nghĩa là?",
    "phuong_an_A": "Càng ngày càng...",
    "phuong_an_B": "Vừa... vừa...",
    "phuong_an_C": "Cũng... cũng...",
    "phuong_an_D": "Tuy... nhưng...",
    "dap_an_dung": "A"
  },
  {
    "id": 9,
    "cau_hoi": "Câu 他是学生吗? dùng 吗 để làm gì?",
    "phuong_an_A": "Hỏi lựa chọn",
    "phuong_an_B": "Hỏi nghi vấn",
    "phuong_an_C": "Hỏi số lượng",
    "phuong_an_D": "Hỏi nguyên nhân",
    "dap_an_dung": "B"
  },
  {
    "id": 10,
    "cau_hoi": "Chữ 明 (sáng) gồm mặt trời 日 và mặt trăng 月. Loại chữ này?",
    "phuong_an_A": "Hình thanh",
    "phuong_an_B": "Hội ý",
    "phuong_an_C": "Chỉ sự vật",
    "phuong_an_D": "Giả tá",
    "dap_an_dung": "B"
  },
  {
    "id": 11,
    "cau_hoi": "Bổ ngữ kết quả trong câu 我看完了书 là?",
    "phuong_an_A": "看",
    "phuong_an_B": "书",
    "phuong_an_C": "完",
    "phuong_an_D": "了",
    "dap_an_dung": "C"
  },
  {
    "id": 12,
    "cau_hoi": "Từ nghi vấn 哪 dùng để hỏi?",
    "phuong_an_A": "Ai",
    "phuong_an_B": "Đâu/ nào",
    "phuong_an_C": "Gì",
    "phuong_an_D": "Sao",
    "dap_an_dung": "B"
  },
  {
    "id": 13,
    "cau_hoi": "一件衣服 - lượng từ 件 dùng cho loại vật gì?",
    "phuong_an_A": "Người",
    "phuong_an_B": "Động vật",
    "phuong_an_C": "Quần áo/ đồ vật nhỏ",
    "phuong_an_D": "Phương tiện",
    "dap_an_dung": "C"
  },
  {
    "id": 14,
    "cau_hoi": "Chữ 囚 (tù nhân) gồm người trong khung. Đây là chữ?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự vật",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Giả tá",
    "dap_an_dung": "C"
  },
  {
    "id": 15,
    "cau_hoi": "Chữ 水 (nước) - hình dạng giống dòng nước. Đây là chữ?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Chỉ sự vật",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "A"
  },
  {
    "id": 16,
    "cau_hoi": "Trong câu 你比我高, 比 biểu thị?",
    "phuong_an_A": "So sánh ngang bằng",
    "phuong_an_B": "So sánh hơn kém",
    "phuong_an_C": "Địa điểm",
    "phuong_an_D": "Thời gian",
    "dap_an_dung": "B"
  },
  {
    "id": 17,
    "cau_hoi": "Câu 你要茶还是咖啡? là dạng câu hỏi gì?",
    "phuong_an_A": "Hỏi 吗",
    "phuong_an_B": "Hỏi lựa chọn A还是B",
    "phuong_an_C": "Hỏi 呢",
    "phuong_an_D": "Hỏi 吧",
    "dap_an_dung": "B"
  },
  {
    "id": 18,
    "cau_hoi": "Cấu trúc 是... de dùng để?",
    "phuong_an_A": "Nhấn mạnh thời gian",
    "phuong_an_B": "Nhấn mạnh địa điểm",
    "phuong_an_C": "Nhấn mạnh cách thức/ đối tượng/ thời gian trong quá khứ",
    "phuong_an_D": "Nhấn mạnh tần suất",
    "dap_an_dung": "C"
  },
  {
    "id": 19,
    "cau_hoi": "Chữ 众 (đám đông) gồm ba người 人. Loại chữ này?",
    "phuong_an_A": "Hình thanh",
    "phuong_an_B": "Chỉ sự vật",
    "phuong_an_C": "Hội ý",
    "phuong_an_D": "Giả tá",
    "dap_an_dung": "C"
  },
  {
    "id": 20,
    "cau_hoi": "Chữ 湖 (hồ) có bộ thủy 氵 và 胡. Đây là chữ?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Hội ý",
    "phuong_an_C": "Hình thanh",
    "phuong_an_D": "Chỉ sự vật",
    "dap_an_dung": "C"
  },
  {
    "id": 21,
    "cau_hoi": "一本书 - lượng từ 本 dùng cho?",
    "phuong_an_A": "Sách vở - Băng đĩa",
    "phuong_an_B": "Quần áo",
    "phuong_an_C": "Xe cộ",
    "phuong_an_D": "Con vật",
    "dap_an_dung": "A"
  },
  {
    "id": 22,
    "cau_hoi": "Trợ từ động thái 着 biểu thị?",
    "phuong_an_A": "Hành động hoàn thành",
    "phuong_an_B": "Hành động đang tiếp diễn/ trạng thái tồn tại",
    "phuong_an_C": "Hành động sắp xảy ra",
    "phuong_an_D": "Hành động kinh nghiệm",
    "dap_an_dung": "B"
  },
  {
    "id": 23,
    "cau_hoi": "Trong câu 我去过北京, 过 biểu thị?",
    "phuong_an_A": "Hành động đang xảy ra",
    "phuong_an_B": "Hành động đã có kinh nghiệm",
    "phuong_an_C": "Hành động hoàn thành",
    "phuong_an_D": "Hành động tương lai",
    "dap_an_dung": "B"
  },
  {
    "id": 24,
    "cau_hoi": "Chữ 歪 (xiên) gồm 不 + 正. Loại chữ này?",
    "phuong_an_A": "Tượng hình",
    "phuong_an_B": "Hội ý",
    "phuong_an_C": "Hình thanh",
    "phuong_an_D": "Giả tá",
    "dap_an_dung": "B"
  },
  {
    "id": 25,
    "cau_hoi": "Câu hỏi ......，好吗? dùng để?",
    "phuong_an_A": "Hỏi thông tin",
    "phuong_an_B": "Đề nghị/ xin ý kiến",
    "phuong_an_C": "Hỏi lý do",
    "phuong_an_D": "Hỏi địa điểm",
    "dap_an_dung": "B"
  },
  {
    "id": 26,
    "cau_hoi": "Chữ 本 gốc là hình cây có gốc đánh dấu. Nghĩa gốc?",
    "phuong_an_A": "Ngọn cây",
    "phuong_an_B": "Thân cây",
    "phuong_an_C": "Gốc cây",
    "phuong_an_D": "Rễ cây",
    "dap_an_dung": "C"
  },
  {
    "id": 27,
    "cau_hoi": "Cặp quan hệ từ 因为...所以... biểu thị?",
    "phuong_an_A": "Điều kiện - kết quả",
    "phuong_an_B": "Nhượng bộ",
    "phuong_an_C": "Nguyên nhân - kết quả",
    "phuong_an_D": "Tương phản",
    "dap_an_dung": "C"
  },
  {
    "id": 28,
    "cau_hoi": "Bổ ngữ xu hướng trong câu 他走进教室 là?",
    "phuong_an_A": "走",
    "phuong_an_B": "进",
    "phuong_an_C": "走进",
    "phuong_an_D": "教室",
    "dap_an_dung": "B"
  },
  {
    "id": 29,
    "cau_hoi": "Chữ 武 (võ) bị cho là loại chữ?",
    "phuong_an_A": "Hội ý",
    "phuong_an_B": "Giả tá",
    "phuong_an_C": "Chỉ sự vật",
    "phuong_an_D": "Hình thanh",
    "dap_an_dung": "A"
  },
  {
    "id": 30,
    "cau_hoi": "Trong câu 你唱得真好, trợ từ kết cấu 得 đứng sau?",
    "phuong_an_A": "Động từ",
    "phuong_an_B": "Tính từ",
    "phuong_an_C": "Tân ngữ",
    "phuong_an_D": "Chủ ngữ",
    "dap_an_dung": "A"
  }
];
