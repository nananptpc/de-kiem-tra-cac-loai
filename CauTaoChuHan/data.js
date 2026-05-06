// ========== DỮ LIỆU TỪ CSV ==========
const QUESTIONS = [
  {
    "id": 1,
    "text": "\"Loại chữ 日 (mặt trời)",
    "options": [
      "A. 山 (núi) là loại chữ gì?\"",
      "B. Chữ tượng hình",
      "C. Chữ chỉ sự",
      "D. Chữ hội ý"
    ],
    "correct": "CHỮ HÌNH THANH"
  },
  {
    "id": 2,
    "text": "Chữ 上 (trên) và 下 (dưới) thuộc loại chữ nào?",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "B"
  },
  {
    "id": 3,
    "text": "Chữ 休 (nghỉ ngơi) = 人 (người) + 木 (cây) là ví dụ của loại chữ gì?",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "C"
  },
  {
    "id": 4,
    "text": "Chữ 妈 (mẹ) gồm bộ 女 (nữ) và 马 (mã). Đây là loại chữ gì?",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "D"
  },
  {
    "id": 5,
    "text": "\"Trong chữ hình thanh",
    "options": [
      "A. bộ phận nào thường biểu thị ý nghĩa?\"",
      "B. Bộ chỉ âm",
      "C. Bộ chỉ nghĩa (bộ thủ)",
      "D. Cả hai đều biểu thị ý nghĩa"
    ],
    "correct": "KHÔNG BỘ NÀO"
  },
  {
    "id": 6,
    "text": "Chữ 林 (rừng) = 木 (cây) + 木 (cây) được tạo theo cách nào?",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "C"
  },
  {
    "id": 7,
    "text": "Đặc điểm của chữ tượng hình là gì?",
    "options": [
      "A. Biểu thị ý niệm trừu tượng",
      "B. Vẽ hình dáng sự vật",
      "C. Kết hợp nhiều chữ đơn",
      "D. Có bộ chỉ âm và nghĩa"
    ],
    "correct": "B"
  },
  {
    "id": 8,
    "text": "\"Bộ thủ 氵 trong chữ 河 (sông)",
    "options": [
      "A. 海 (biển) cho biết điều gì?\"",
      "B. Liên quan lửa",
      "C. Liên quan nước",
      "D. Liên quan đất"
    ],
    "correct": "LIÊN QUAN KIM LOẠI"
  },
  {
    "id": 9,
    "text": "Chữ nào sau đây KHÔNG phải là chữ tượng hình?",
    "options": [
      "A. 山 (núi)",
      "B. 水 (nước)",
      "C. 休 (nghỉ)",
      "D. 火 (lửa)"
    ],
    "correct": "C"
  },
  {
    "id": 10,
    "text": "Loại chữ nào chiếm tỷ lệ nhiều nhất trong chữ Hán (khoảng 80-90%)?",
    "options": [
      "A. Tượng hình",
      "B. Chỉ sự",
      "C. Hội ý",
      "D. Hình thanh"
    ],
    "correct": "D"
  }
];

const TOTAL_QUESTIONS = QUESTIONS.length;
