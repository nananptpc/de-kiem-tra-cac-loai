// data.js - sẽ được thay thế bởi convert.html
const QUESTIONS = [];
const TOTAL_QUESTIONS = 0;
// ========== DỮ LIỆU TỪ CSV ==========
const QUESTIONS = [
  {
    "id": 1,
    "text": "Chữ \"妈\" gồm bộ 女 và 马. Loại chữ này là?",
    "options": [
      "Chữ tượng hình",
      "Chữ chỉ sự vật",
      "Chữ hội ý",
      "Chữ hình thanh"
    ],
    "correct": "D"
  },
  {
    "id": 2,
    "text": "Chữ \"林\" (rừng) gồm hai cây 木. Đây là chữ?",
    "options": [
      "Tượng hình",
      "Hội ý",
      "Giả tá",
      "Hình thanh"
    ],
    "correct": "B"
  },
  {
    "id": 3,
    "text": "Chữ \"休\" (nghỉ) gồm người 亻dựa vào cây 木. Đây là chữ?",
    "options": [
      "Tượng hình",
      "Chỉ sự vật",
      "Hội ý",
      "Hình thanh"
    ],
    "correct": "C"
  },
  {
    "id": 4,
    "text": "Chữ \"上\" (trên) có nét chỉ vị trí phía trên đường. Đây là chữ?",
    "options": [
      "Tượng hình",
      "Chỉ sự vật",
      "Hội ý",
      "Giả tá"
    ],
    "correct": "B"
  },
  {
    "id": 5,
    "text": "Chữ \"江\" (sông) gồm bộ thủy 氵 và 工. Loại chữ này là?",
    "options": [
      "Hình thanh",
      "Hội ý",
      "Tượng hình",
      "Chỉ sự vật"
    ],
    "correct": "A"
  },
  {
    "id": 6,
    "text": "Trong câu \"我吃了饭\"",
    "options": [
      "trợ từ \"了\" biểu thị điều gì?",
      "Hành động đang xảy ra",
      "Hành động đã hoàn thành",
      "Hành động sắp xảy ra"
    ],
    "correct": "HÀNH ĐỘNG THƯỜNG XUYÊN"
  },
  {
    "id": 7,
    "text": "Trong câu \"我在吃饭\"",
    "options": [
      "\"在\" biểu thị?",
      "Địa điểm",
      "Thời gian",
      "Hành động đang tiếp diễn"
    ],
    "correct": "PHƯƠNG HƯỚNG"
  },
  {
    "id": 8,
    "text": "Cấu trúc \"越来越 + adj\" có nghĩa là?",
    "options": [
      "Càng ngày càng...",
      "Vừa... vừa...",
      "Cũng... cũng...",
      "Tuy... nhưng..."
    ],
    "correct": "A"
  },
  {
    "id": 9,
    "text": "Câu \"他是学生吗?\" dùng \"吗\" để làm gì?",
    "options": [
      "Hỏi lựa chọn",
      "Hỏi nghi vấn",
      "Hỏi số lượng",
      "Hỏi nguyên nhân"
    ],
    "correct": "B"
  },
  {
    "id": 10,
    "text": "Chữ \"明\" (sáng) gồm mặt trời 日 và mặt trăng 月. Loại chữ này?",
    "options": [
      "Hình thanh",
      "Hội ý",
      "Chỉ sự vật",
      "Giả tá"
    ],
    "correct": "B"
  },
  {
    "id": 11,
    "text": "Bổ ngữ kết quả trong câu \"我看完了书\" là?",
    "options": [
      "看",
      "书",
      "完",
      "了"
    ],
    "correct": "C"
  },
  {
    "id": 12,
    "text": "Từ nghi vấn \"哪\" dùng để hỏi?",
    "options": [
      "Ai",
      "Đâu/ nào",
      "Gì",
      "Sao"
    ],
    "correct": "B"
  },
  {
    "id": 13,
    "text": "\"一件衣服\" - lượng từ \"件\" dùng cho loại vật gì?",
    "options": [
      "Người",
      "Động vật",
      "Quần áo/ đồ vật nhỏ",
      "Phương tiện"
    ],
    "correct": "C"
  },
  {
    "id": 14,
    "text": "Chữ \"囚\" (tù nhân) gồm người trong khung. Đây là chữ?",
    "options": [
      "Tượng hình",
      "Chỉ sự vật",
      "Hội ý",
      "Giả tá"
    ],
    "correct": "C"
  },
  {
    "id": 15,
    "text": "Chữ \"水\" (nước) – hình dạng giống dòng nước. Đây là chữ?",
    "options": [
      "Tượng hình",
      "Chỉ sự vật",
      "Hội ý",
      "Hình thanh"
    ],
    "correct": "A"
  },
  {
    "id": 16,
    "text": "Trong câu \"你比我高\"",
    "options": [
      "\"比\" biểu thị?",
      "So sánh ngang bằng",
      "So sánh hơn kém",
      "Địa điểm"
    ],
    "correct": "THỜI GIAN"
  },
  {
    "id": 17,
    "text": "Câu \"你要茶还是咖啡?\" là dạng câu hỏi gì?",
    "options": [
      "Hỏi \"吗\"",
      "Hỏi lựa chọn \"A还是B\"",
      "Hỏi \"呢\"",
      "Hỏi \"吧\""
    ],
    "correct": "B"
  },
  {
    "id": 18,
    "text": "Cấu trúc \"是...的\" dùng để?",
    "options": [
      "Nhấn mạnh thời gian",
      "Nhấn mạnh địa điểm",
      "Nhấn mạnh cách thức/ đối tượng/ thời gian trong quá khứ",
      "Nhấn mạnh tần suất"
    ],
    "correct": "C"
  },
  {
    "id": 19,
    "text": "Chữ \"众\" (đám đông) gồm ba người 人. Loại chữ này?",
    "options": [
      "Hình thanh",
      "Chỉ sự vật",
      "Hội ý",
      "Giả tá"
    ],
    "correct": "C"
  },
  {
    "id": 20,
    "text": "Chữ \"湖\" (hồ) có bộ thủy 氵 và 胡. Đây là chữ?",
    "options": [
      "Tượng hình",
      "Hội ý",
      "Hình thanh",
      "Chỉ sự vật"
    ],
    "correct": "C"
  },
  {
    "id": 21,
    "text": "\"一本书\" – lượng từ \"本\" dùng cho?",
    "options": [
      "Sách vở",
      "Băng đĩa",
      "Quần áo",
      "Xe cộ"
    ],
    "correct": "CON VẬT"
  },
  {
    "id": 22,
    "text": "Trợ từ động thái \"着\" biểu thị?",
    "options": [
      "Hành động hoàn thành",
      "Hành động đang tiếp diễn/ trạng thái tồn tại",
      "Hành động sắp xảy ra",
      "Hành động kinh nghiệm"
    ],
    "correct": "B"
  },
  {
    "id": 23,
    "text": "Trong câu \"我去过北京\"",
    "options": [
      "\"过\" biểu thị?",
      "Hành động đang xảy ra",
      "Hành động đã có kinh nghiệm",
      "Hành động hoàn thành"
    ],
    "correct": "HÀNH ĐỘNG TƯƠNG LAI"
  },
  {
    "id": 24,
    "text": "Chữ \"歪\" (xiên) gồm 不 + 正. Loại chữ này?",
    "options": [
      "Tượng hình",
      "Hội ý",
      "Hình thanh",
      "Giả tá"
    ],
    "correct": "B"
  },
  {
    "id": 25,
    "text": "Câu hỏi \"......，好吗?\" dùng để?",
    "options": [
      "Hỏi thông tin",
      "Đề nghị/ xin ý kiến",
      "Hỏi lý do",
      "Hỏi địa điểm"
    ],
    "correct": "B"
  },
  {
    "id": 26,
    "text": "Chữ \"本\" gốc là hình cây có gốc đánh dấu. Nghĩa gốc?",
    "options": [
      "Ngọn cây",
      "Thân cây",
      "Gốc cây",
      "Rễ cây"
    ],
    "correct": "C"
  },
  {
    "id": 27,
    "text": "Cặp quan hệ từ \"因为...所以...\" biểu thị?",
    "options": [
      "Điều kiện - kết quả",
      "Nhượng bộ",
      "Nguyên nhân - kết quả",
      "Tương phản"
    ],
    "correct": "C"
  },
  {
    "id": 28,
    "text": "Bổ ngữ xu hướng trong câu \"他走进教室\" là?",
    "options": [
      "走",
      "进",
      "走进",
      "教室"
    ],
    "correct": "B"
  },
  {
    "id": 29,
    "text": "Chữ \"武\" (võ) bị cho là loại chữ?",
    "options": [
      "Hội ý",
      "Giả tá",
      "Chỉ sự vật",
      "Hình thanh"
    ],
    "correct": "A (MỘT SỐ QUAN ĐIỂM: HỘI Ý TỪ CHỈ VÕ LỰC)"
  },
  {
    "id": 30,
    "text": "Trong câu \"你唱得真好\"",
    "options": [
      "trợ từ kết cấu \"得\" đứng sau?",
      "Động từ",
      "Tính từ",
      "Tân ngữ"
    ],
    "correct": "CHỦ NGỮ"
  }
];

const TOTAL_QUESTIONS = QUESTIONS.length;
