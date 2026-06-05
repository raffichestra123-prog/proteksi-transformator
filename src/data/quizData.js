export const quizData = [
  {
    question:
      "Suatu transformator daya 150/20 kV dilengkapi proteksi diferensial (87T). Pada kondisi normal, arus primer dan sekunder yang masuk ke relay harus sama setelah kompensasi rasio CT dan pergeseran fasa. Jika relay masih mendeteksi arus diferensial besar saat tidak ada gangguan, penyebab yang paling mungkin adalah ?",
    options: [
      "Arus beban terlalu kecil",
      "Kesalahan polaritas CT atau kesalahan kompensasi vektor grup trafo",
      "Tegangan sistem terlalu rendah",
      "Relay buchholz rusak"
    ],
    correctAnswer: "Kesalahan polaritas CT atau kesalahan kompensasi vektor grup trafo",
    explanation:
    "Karena kesalahan ini dapat menyebabkan arus yang masuk ke relay tidak seimbang meskipun kondisi trafo normal, sehingga menghasilkan arus diferensial yang besar dan menyebabkan relay bekerja tanpa adanya gangguan sebenarnya."
  },

  {
    question:
      "Pada gangguan antar lilitan (inter-turn fault) yang masih ringan, proteksi yang paling mungkin gagal mendeteksi pada tahap awal adalah ?",
    options: [
      "Buchholz Relay",
      "Relay Suhu (49)",
      "Differential Relay (87T)",
      "Oil Level Relay (71)"
    ],
    correctAnswer: "Differential Relay (87T)",
    explanation:
    "Karena Inter-turn fault ringan dapat menghasilkan arus diferensial yang sangat kecil tetapi sudah menghasilkan gas akibat kerusakan isolasi"
  },

  {
    question:
      "Mengapa relay Buchholz ditempatkan di antara tangki utama dan konservator?",
    options: [
      "Untuk mengukur tekanan minyak",
      "Agar gas hasil dekomposisi minyak dapat terkumpul sebelum masuk ke konservator",
      "Untuk mengurangi rugi rugi daya",
      "Agar arus hubung singkat berkurang"
    ],
    correctAnswer: "Agar gas hasil dekomposisi minyak dapat terkumpul sebelum masuk ke konservator",
    explanation:
    "Karena posisi ini memungkinkan Buchholz untuk mendeteksi gas yang dihasilkan oleh gangguan internal sebelum gas tersebut masuk ke konservator, sehingga memberikan indikasi awal adanya masalah pada transformator"
  },

  {
    question:
      "Sebuah trafo mengalami gangguan eksternal pada jaringan distribusi sehingga arus mencapai 8 kali arus nominal. Proteksi yang seharusnya bekerja adalah ?",
    options: [
      "87T saja",
      "Buchholz Relay saja",
      "OCR 50/51 tanpa operasi 87T",
      "Thermal Relay 49 saja"
    ],
    correctAnswer: "OCR 50/51 tanpa operasi 87T",
    explanation:
    "Karena gangguan eksternal biasanya menghasilkan arus lebih besar yang dapat dideteksi oleh OCR 50/51, sementara 87T mungkin tidak mendeteksi karena arus diferensialnya kecil atau tidak ada"
  },

  {
    question:
      "Relay diferensial modern menggunakan karakteristik percentage differential restraint dengan tujuan ",
    options: [
      "Mengurangi sensitivitas terhadapa gangguan internal",
      "Mencegah salah operasi akibat kesalahan CT dan arus inrush",
      "Menghilangkan kebutuhan CT",
      "Menggantikan fungsi Buchholz Relay"
    ],
    correctAnswer: "Mencegah salah operasi akibat kesalahan CT dan arus inrush",
    explanation:
    "Karena karakteristik percentage differential restraint memungkinkan relay untuk membedakan antara arus diferensial yang disebabkan oleh gangguan internal dengan arus diferensial yang disebabkan oleh kesalahan CT atau arus inrush yang normal saat energisasi"
  },

  {
    question:
      "Arus inrush magnetisasi saat energisasi transformator sering kali menyebabkan relay diferensial tidak boleh langsung trip karena ?",
    options: [
      "Arus tersebut merupakan arus hubung singkat",
      "Arus inrush memiliki komponen harmonisa tinggi yang dapat dibedakan dari arus gangguan",
      "Tegangan menjadi nol",
      "Frekuensi naik drastis"
    ],
    correctAnswer: "Arus inrush memiliki komponen harmonisa tinggi yang dapat dibedakan dari arus gangguan"
  },

  {
    question:
      "Jika relay suhu (49) bekerja terus-menerus sementara arus beban masih normal, penyebab yang paling logis adalah ?",
    options: [
      "Hubung singkat tiga fasa",
      "Kegagalan sistem pendingin trafo",
      "Gangguan eskternal permanen",
      "Kesalahan CT diferensial"
    ],
    correctAnswer: "Kegagalan sistem pendingin trafo",
    explanation: 
    "Karena suhu meningkat meskipun arus beban normal menunjukkan masalah pada sistem pendingin atau ventilasi trafo"
  },

  {
    question:
      "Transformator mengalami kegagalan isolasi yang menyebabkan pelepasan energi sangat cepat di dalam tangki. Peralatan yang dirancang khusus untuk mencegah ledakan tangki adalah ?",
    options: [
      "Relay 50/51",
      "Relay 87T",
      "Relay REF",
      "Pressure Relief Device (PRD)"
    ],
    correctAnswer: "Pressure Relief Device (PRD)",
    explanation:
    "PRD dirancang untuk melepaskan tekanan berlebih akibat kegagalan isolasi yang cepat sehingga mencegah ledakan tangki"
  },

  {
    question:
      "Jika relay Buchholz memberikan alarm tetapi relay diferensial belum bekerja, kesimpulan yang paling tepat adalah ?",
    options: [
      "Terjadi gangguan eksternal",
      "Kemungkinan terjadi gangguan internal ringan atau awal yang menghasilkan gas tetapi belum menghasilkan arus diferensial besar",
      "Transformator kelebihan beban besar",
      "Sistem pendingin normal"
    ],
    correctAnswer: "Kemungkinan terjadi gangguan internal ringan atau awal yang menghasilkan gas tetapi belum menghasilkan arus diferensial besar"
  },

  {
    question:
      "Gangguan tanah yang terjadi sangat dekat titik netral transformator sering sulit dideteksi oleh relay diferensial karena ? ",
    options: [
      "arus gangguan relatif kecil",
      "Tegangan gangguan terlalu tinggi",
      "CT tidak bekerja",
      "Minyak isolasi meningkat"
    ],
    correctAnswer: "arus gangguan relatif kecil",
    explanation:
    "terutama jika titik gangguan dekat dengan netral sehingga arus diferensialnya kecil dan sulit dibedakan dari arus beban normal."
  },

  {
    question:
      "Proteksi REF dianggap lebih sensitif dibandingkan proteksi diferensial untuk gangguan tanah karena ?",
    options: [
      "Menggunakan lebih banyak CT",
      "Zona proteksinya lebih sempit sehingga mendeteksi arus gangguan tanah yang kecil",
      "Tidak memerlukan setting",
      "Tidak dipengaruhi arus gangguan"
    ],
    correctAnswer: "Zona proteksinya lebih sempit sehingga mendeteksi arus gangguan tanah yang kecil",
    explanation:
     "Karena proteksi REF dirancang untuk mendeteksi gangguan tanah dengan zona proteksi yang lebih kecil di sekitar titik netral, sehingga dapat mendeteksi arus gangguan tanah yang lebih kecil dibandingkan proteksi diferensial yang memiliki zona proteksi lebih luas."
  },

  {
    question:
      "Suatu transformator menunjukan gejala berikut:",

      point:  [
        "suhu naik perlahan",
        "gas mulai terdeteksi",
        "Arus beban normal"
      ],

      questionEnd: "Gaangguan yang paling mungkin adalah.....",

    options: [
      "Gangguan eksternal saluran transmisi",
      "Hubujng singkat tiga fasa eksternal",
      "Kerusakan isolasi internal yang berkembang perlahan",
      "Tegangan sistem terlalu rendah"
    ],
    correctAnswer: "Kerusakan isolasi internal yang berkembang perlahan",
    explanation:
    "Karena gejala suhu naik perlahan dan gas mulai terdeteksi menunjukkan adanya kerusakan isolasi internal yang berkembang, sementara arus beban normal menunjukkan bahwa gangguan belum menyebabkan arus diferensial yang besar."
  },

  {
    question:
      "Dalam koordinasi proteksi transformator, proteksi yang harus memiliki waktu kerja paling cepat untuk gangguan internal adalah .....",
    options: [
      "Relay suhu",
      "Relay diferensial",
      "Relay level minyak",
      "Overvoltage relay"
    ],
    correctAnswer: "Relay diferensial",
    explanation:
    "Karena relay diferensial dirancang untuk mendeteksi gangguan internal dengan cepat dan langsung memutuskan sumber gangguan, sehingga harus memiliki waktu kerja paling cepat dibandingkan proteksi lainnya yang mungkin memiliki fungsi pengawasan atau cadangan."
  },

  {
    question:
      "Jika sebuah transformator mengalami overload 130% selama beberapa jam, proteksi yang paling tepat untuk mengamankan peralatan adalah ....",
    options: [
      "49 Thermal Relay",
      "Buchholz Relay",
      "REF",
      "Overvoltage Relay 59"
    ],
    correctAnswer: "49 Thermal Relay",
    explanation:
    "Karena 49 Thermal Relay dirancang untuk mendeteksi kondisi overload dengan memperhatikan waktu dan suhu, sehingga dapat memberikan perlindungan yang tepat untuk kondisi overload yang berlangsung selama beberapa jam."
  },

  {
    question:
      "Sebuah trafo menunjukan indikasi :",
      point: [
        "Buchholz Relay memberikan alarm aktif",
        "Kandungan gas meningkat",
        "Temperatur normal",
        "Arus normal"
      ],
      questionEnd: "Tindakan yang paling tepat adalah.....",

    options: [
      "Mengabaikan alarm karena arus masih normal",
      "Menambahkan beban untuk meningkatkan arus",
      "Melakukan analisis gas terlarut untuk menentukan jenis gangguan dan mengambil tindakan perbaikan yang sesuai",
      "Mematikan relay Buchholz"
    ],
    correctAnswer: "Melakukan analisis gas terlarut untuk menentukan jenis gangguan dan mengambil tindakan perbaikan yang sesuai",
    explanation:
    "Karena alarm Buchholz dan peningkatan kandungan gas menunjukkan adanya gangguan internal yang menghasilkan gas, sehingga analisis gas terlarut diperlukan untuk mengidentifikasi jenis gangguan dan menentukan langkah perbaikan yang tepat."
  },

  {
    question:
      "Suatu transformator daya dilengkapi proteksi:",
      point: [
        "50/51 OCR",
        "87T Differential Relay",
        "63 Buchholz Relay",
        "49 Thermal Relay",
        "71 Oil Level Relay"
      ],

      questionEnd: "Terjadi gangguan yang menyebabkan terbentuknya gas secara cepat akibat flashover internal. Urutan proteksi yang PALING MUNGKIN bekerja adalah ",
    options: [
      "49 → 71 → 50/51 → 87T",
      "63 (trip) → 87T → 50/51",
      "50/51 → 87T → 63 (trip)",
      "71 → 63 → 87T → 50/51"
    ],
    correctAnswer: "63 (trip) → 87T → 50/51",
    explanation:
    "Karena gangguan yang menyebabkan terbentuknya gas secara cepat akibat flashover internal akan pertama kali terdeteksi oleh Buchholz Relay (63) yang akan memberikan trip, kemudian 87T akan mendeteksi arus diferensial akibat gangguan tersebut, dan jika arus lebih besar maka OCR 50/51 juga akan bekerja."
  },

  {
    question:
      "Mengapa proteksi diferensial tidak boleh digunakan tanpa fungsi harmonic restraint ?",
    options: [
      "Relay akan terlalu lambat merespon",
      "Relay dapat salah menganggap arus inrush sebagai gangguan internal",
      "Relay tidak bisa mendeteksi hubung singkat",
      "Relay tidak bisa membaca CT"
    ],
    correctAnswer: "Relay dapat salah menganggap arus inrush sebagai gangguan internal",
    explanation:
    "Karena arus inrush saat energisasi transformator memiliki komponen harmonisa tinggi yang dapat menyebabkan arus diferensial yang besar, sehingga tanpa fungsi harmonic restraint, relay diferensial dapat salah menganggap kondisi normal ini sebagai gangguan internal dan memberikan trip yang tidak perlu."
  },

  {
    question:
      "Sebuah transformator YNd11 mengalami kesalahan setting kompensasi sudut fasa pada relay diferensial. Dampak yang paling mungkin adalah ....",
    options: [
      "Relay menjadi lebih sensitif",
      "Relay gagal mendeteksi suhu tinggi",
      "Timbul arus diferensial semu walaupun kondisi normal",
      "Buchholz Relay tidak bekerja"
    ],
    correctAnswer: "Timbul arus diferensial semu walaupun kondisi normal",
    explanation:
    " Karena kesalahan setting kompensasi sudut fasa pada relay diferensial dapat menyebabkan arus yang masuk ke relay tidak seimbang meskipun kondisi trafo normal, sehingga menghasilkan arus diferensial semu yang dapat menyebabkan relay bekerja tanpa adanya gangguan sebenarnya."
  },

  {
    question:
      "Pada kondisi yang sama, gangguan manakah yang menghasilkan energi destruktif terbesar terhadap transformator?",
    options: [
      "Penurunan level minyak",
      "Overload ringan",
      "Hubung Singkat antar belitan",
      "Kegagalan sistem pendingin"
    ],
    correctAnswer: "Hubung Singkat antar belitan",
    explanation:
    "Karena hubung singkat antar belitan dapat menghasilkan arus yang sangat besar dalam waktu yang sangat singkat, sehingga menghasilkan energi destruktif yang jauh lebih besar dibandingkan gangguan lainnya yang mungkin berkembang lebih lambat atau memiliki arus yang lebih kecil."
  },

  {
    question:
      "Sebuah transformator 60 MVA mengalami kejadian berikut secara berurutan:",
      point: [
        "1. Gas terdeteksi oleh Buchholz Relay",
        "2. Temperatur meningkat secara perlahan",
        "3. Arus diferensial mulai muncul",
        "4. Arus gangguan meningkat secara drastis"
      ],
      questionEnd: "Urutan perkembangan kerusakan yang paling logis adalah ....",
    options: [
      "Gangguan eksternal → Overload → pendinginan gagal",
      "Penurunan level minyak → tegangan lebih → Overload",
      "Degredasi isolasi → gangguan antar lilitan → gangguan internal besar → Hubung singkat serius",
      "Hubung singkat eksternal → gangguan tanah → kegagalan sistem pendingin"
    ],
    correctAnswer: "Degredasi isolasi → gangguan antar lilitan → gangguan internal besar → Hubung singkat serius",
    explanation:
    "Karena gas terdeteksi oleh Buchholz Relay menunjukkan adanya kerusakan isolasi yang menghasilkan gas, kemudian temperatur meningkat secara perlahan menunjukkan perkembangan kerusakan isolasi, arus diferensial mulai muncul menunjukkan adanya gangguan antar lilitan, dan akhirnya arus gangguan meningkat secara drastis menunjukkan bahwa gangguan tersebut berkembang menjadi gangguan internal besar atau hubung singkat serius."
  }
];