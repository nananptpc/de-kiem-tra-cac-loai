// ========== DỮ LIỆU TỪ CSV ==========
const QUESTIONS = [
  {
    "id": 1,
    "text": "\"Chữ \"\"妈\"\" gồm bộ 女 và 马. Loại chữ này là?\"",
    "options": [
      "A. Chữ tượng hình",
      "B. Chữ chỉ sự vật",
      "C. Chữ hội ý",
      "D. Chữ hình thanh"
    ],
    "correct": "D"
  },
  {
    "id": 2,
    "text": "\"Chữ \"\"林\"\" (rừng) gồm hai cây 木. Đây là chữ?\"",
    "options": [
      "A. Tượng hình",
      "B. Hội ý",
      "C. Giả tá",
      "D. Hình thanh"
    ],
    "correct": "B"
  },
  {
    "id": 3,
    "text": "\"Chữ \"\"休\"\" (nghỉ) gồm người 亻 dựa vào cây 木. Đây là chữ?\"",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự vật",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "C"
  },
  {
    "id": 4,
    "text": "\"Chữ \"\"上\"\" (trên) có nét chỉ vị trí phía trên đường. Đây là chữ?\"",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự vật",
      "C. Hội ý",
      "D. Giả tá"
    ],
    "correct": "B"
  },
  {
    "id": 5,
    "text": "\"Chữ \"\"江\"\" (sông) gồm bộ thủy 氵 và 工. Loại chữ này là?\"",
    "options": [
      "A. Hình thanh",
      "B. Hội ý",
      "C. Tượng hình",
      "D. Chỉ sự vật"
    ],
    "correct": "A"
  },
  {
    "id": 6,
    "text": "\"Trong câu \"\"我吃了饭\"\"",
    "options": [
      "A. trợ từ \"\"了\"\" biểu thị điều gì?\"",
      "B. Hành động đang xảy ra",
      "C. Hành động đã hoàn thành",
      "D. Hành động sắp xảy ra"
    ],
    "correct": "HÀNH ĐỘNG THƯỜNG XUYÊN"
  },
  {
    "id": 7,
    "text": "\"Trong câu \"\"我在吃饭\"\"",
    "options": [
      "A. \"\"内\"\" biểu thị?\"",
      "B. Địa điểm",
      "C. Thời gian",
      "D. Hành động đang tiếp diễn"
    ],
    "correct": "PHƯƠNG HƯỚNG"
  },
  {
    "id": 8,
    "text": "\"Cấu trúc \"\"越来越 + adj\"\" có nghĩa là?\"",
    "options": [
      "A. Càng ngày càng...",
      "B. Vừa... vừa...",
      "C. Cũng... cũng...",
      "D. Tuy... nhưng..."
    ],
    "correct": "A"
  },
  {
    "id": 9,
    "text": "\"Câu \"\"他是学生吗?\"\" dùng \"\"吗\"\" để làm gì?\"",
    "options": [
      "A. Hỏi lựa chọn",
      "B. Hỏi nghi vấn",
      "C. Hỏi số lượng",
      "D. Hỏi nguyên nhân"
    ],
    "correct": "B"
  },
  {
    "id": 10,
    "text": "\"Chữ \"\"明\"\" (sáng) gồm mặt trời 日 và mặt trăng 月. Loại chữ này?\"",
    "options": [
      "A. Hình thanh",
      "B. Hội ý",
      "C. Chỉ sự vật",
      "D. Giả tá"
    ],
    "correct": "B"
  },
  {
    "id": 11,
    "text": "\"Bổ ngữ kết quả trong câu \"\"我看完了书\"\" là?\"",
    "options": [
      "A. 看",
      "B. 书",
      "C. 完",
      "D. 了"
    ],
    "correct": "C"
  },
  {
    "id": 12,
    "text": "\"Từ nghi vấn \"\"哪\"\" dùng để hỏi?\"",
    "options": [
      "A. Ai",
      "B. Đâu/ nào",
      "C. Gì",
      "D. Sao"
    ],
    "correct": "B"
  },
  {
    "id": 13,
    "text": "\"\"\"一件衣服\"\" - lượng từ \"\"件\"\" dùng cho loại vật gì?\"",
    "options": [
      "A. Người",
      "B. Động vật",
      "C. Quần áo/ đồ vật nhỏ",
      "D. Phương tiện"
    ],
    "correct": "C"
  },
  {
    "id": 14,
    "text": "\"Chữ \"\"囚\"\" (tù nhân) gồm người trong khung. Đây là chữ?\"",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự vật",
      "C. Hội ý",
      "D. Giả tá"
    ],
    "correct": "C"
  },
  {
    "id": 15,
    "text": "\"Chữ \"\"水\"\" (nước) - hình dạng giống dòng nước. Đây là chữ?\"",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự vật",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "A"
  },
  {
    "id": 16,
    "text": "\"Trong câu \"\"你比我高\"\"",
    "options": [
      "A. \"\"比\"\" biểu thị?\"",
      "B. So sánh ngang bằng",
      "C. So sánh hơn kém",
      "D. Địa điểm"
    ],
    "correct": "THỜI GIAN"
  },
  {
    "id": 17,
    "text": "\"Câu \"\"你要茶还是咖啡?\"\" là dạng câu hỏi gì?\"",
    "options": [
      "A. \"Hỏi \"\"吗\"\"\"",
      "B. \"Hỏi lựa chọn \"\"A还是B\"\"\"",
      "C. \"Hỏi \"\"呢\"\"\"",
      "D. \"Hỏi \"\"吧\"\"\""
    ],
    "correct": "B"
  },
  {
    "id": 18,
    "text": "\"Cấu trúc \"\"是... de\"\" dùng để?\"",
    "options": [
      "A. Nhấn mạnh thời gian",
      "B. Nhấn mạnh địa điểm",
      "C. Nhấn mạnh cách thức/ đối tượng/ thời gian trong quá khứ",
      "D. Nhấn mạnh tần suất"
    ],
    "correct": "C"
  },
  {
    "id": 19,
    "text": "\"Chữ \"\"众\"\" (đám đông) gồm ba người 人. Loại chữ này?\"",
    "options": [
      "A. Hình thanh",
      "B. Chỉ sự vật",
      "C. Hội ý",
      "D. Giả tá"
    ],
    "correct": "C"
  },
  {
    "id": 20,
    "text": "\"Chữ \"\"湖\"\" (hồ) có bộ thủy 氵 và 胡. Đây là chữ?\"",
    "options": [
      "A. Tượng hình",
      "B. Hội ý",
      "C. Hình thanh",
      "D. Chỉ sự vật"
    ],
    "correct": "C"
  },
  {
    "id": 21,
    "text": "\"\"\"一本书\"\" - lượng từ \"\"本\"\" dùng cho?\"",
    "options": [
      "A. Sách vở - Băng đĩa",
      "B. Quần áo",
      "C. Xe cộ",
      "D. Con vật"
    ],
    "correct": "A"
  },
  {
    "id": 22,
    "text": "\"Trợ từ động thái \"\"着\"\" biểu thị?\"",
    "options": [
      "A. Hành động hoàn thành",
      "B. Hành động đang tiếp diễn/ trạng thái tồn tại",
      "C. Hành động sắp xảy ra",
      "D. Hành động kinh nghiệm"
    ],
    "correct": "B"
  },
  {
    "id": 23,
    "text": "\"Trong câu \"\"我去过北京\"\"",
    "options": [
      "A. \"\"过\"\" biểu thị?\"",
      "B. Hành động đang xảy ra",
      "C. Hành động đã có kinh nghiệm",
      "D. Hành động hoàn thành"
    ],
    "correct": "HÀNH ĐỘNG TƯƠNG LAI"
  },
  {
    "id": 24,
    "text": "\"Chữ \"\"歪\"\" (xiên) gồm 不 + 正. Loại chữ này?\"",
    "options": [
      "A. Tượng hình",
      "B. Hội ý",
      "C. Hình thanh",
      "D. Giả tá"
    ],
    "correct": "B"
  },
  {
    "id": 25,
    "text": "\"Câu hỏi \"\"......，好吗?\"\" dùng để?\"",
    "options": [
      "A. Hỏi thông tin",
      "B. Đề nghị/ xin ý kiến",
      "C. Hỏi lý do",
      "D. Hỏi địa điểm"
    ],
    "correct": "B"
  },
  {
    "id": 26,
    "text": "\"Chữ \"\"本\"\" gốc là hình cây có gốc đánh dấu. Nghĩa gốc?\"",
    "options": [
      "A. Ngọn cây",
      "B. Thân cây",
      "C. Gốc cây",
      "D. Rễ cây"
    ],
    "correct": "C"
  },
  {
    "id": 27,
    "text": "\"Cặp quan hệ từ \"\"因为...所以...\"\" biểu thị?\"",
    "options": [
      "A. Điều kiện - kết quả",
      "B. Nhượng bộ",
      "C. Nguyên nhân - kết quả",
      "D. Tương phản"
    ],
    "correct": "C"
  },
  {
    "id": 28,
    "text": "\"Bổ ngữ xu hướng trong câu \"\"他走进教室\"\" là?\"",
    "options": [
      "A. 走",
      "B. 进",
      "C. 走进",
      "D. 教室"
    ],
    "correct": "B"
  },
  {
    "id": 29,
    "text": "\"Chữ \"\"武\"\" (võ) bị cho là loại chữ?\"",
    "options": [
      "A. Hội ý",
      "B. Giả tá",
      "C. Chỉ sự vật",
      "D. Hình thanh"
    ],
    "correct": "A"
  },
  {
    "id": 30,
    "text": "\"Trong câu \"\"你唱得真好\"\"",
    "options": [
      "A. trợ từ kết cấu \"\"得\"\" đứng sau?\"",
      "B. Động từ",
      "C. Tính từ",
      "D. Tân ngữ"
    ],
    "correct": "CHỦ NGỮ"
  }
];

const TOTAL_QUESTIONS = QUESTIONS.length;
