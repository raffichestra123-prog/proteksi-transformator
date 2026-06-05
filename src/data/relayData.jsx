import {
  Shield,
  Activity,
  Zap,
  Thermometer,
  Droplets,
  AlertTriangle,
} from "lucide-react";

import differential87T from "../assets/relay/differential87T.jpeg";
import ocr5051 from "../assets/relay/ocr5051.jpeg";
import buchholz63 from "../assets/relay/buchholz63.jpeg";
import ref64 from "../assets/relay/ref64.jpeg";
import overvoltage59 from "../assets/relay/overvoltage59.jpeg";
import oillevel71 from "../assets/relay/oillevel71.png";
import thermal49 from "../assets/relay/thermal49.jpeg";
import gfr5052n from "../assets/relay/gfr5052n.jpeg";

import differentialScheme from "../assets/Schematic/differential-scheme.webp";
import ocrScheme from "../assets/Schematic/ocr-scheme.png";
import buchholzScheme from "../assets/Schematic/buchholz-scheme.png";
import thermalScheme from "../assets/Schematic/thermalrelay-scheme.jpg";
import refScheme from "../assets/Schematic/ref-scheme.jpg";
import overvoltageScheme from "../assets/Schematic/overvoltage-scheme.png";
import gfrScheme from "../assets/Schematic/gfr-scheme.png";
import oillevelScheme from "../assets/Schematic/oillevel-scheme.png";

export const relayData = [

  {
    id: "87t",
    title: "Differential Relay",
    ansi: "87T",
    icon: <Activity size={24} />,
    image: differential87T,
    principleImage: differentialScheme,
    function:
      "Mendeteksi gangguan internal transformator dengan membandingkan arus sisi primer dan sekunder.",

    principle: 
      "Differential Relay (87T) bekerja dengan membandingkan arus yang masuk ke transformator dengan arus yang keluar dari transformator melalui Current Transformer (CT) yang dipasang pada kedua sisi. Pada kondisi normal, arus primer dan sekunder yang telah dikompensasi akan seimbang sehingga tidak ada arus diferensial yang mengalir ke relay. Jika terjadi gangguan internal pada transformator, akan muncul selisih arus yang menyebabkan relay bekerja dan mengirimkan sinyal trip.",
      steps: [
        "CT sisi primer mengukur arus masuk transformator.",
        "CT sisi sekunder mengukur arus keluar transformator.",
        "Arus dari kedua CT dikirim ke Differential Relay.",
        "Relay membandingkan kedua nilai arus.",
        "Jika arus seimbang, relay tetap standby.",
        "Jika muncul arus diferensial melebihi setting, relay pickup.",
        "Relay mengirim sinyal trip ke Circuit Breaker.",
        "Circuit Breaker membuka dan mengisolasi transformator dari sistem."
      ],

    protection:
      "Gangguan internal, antar fasa, antar lilitan, dan gangguan ke tanah.",

    advantage:
      "Sangat cepat, selektif, dan sensitif terhadap gangguan internal.",
  },

  {
    id: "5051",
    title: "Overcurrent Relay",
    ansi: "50/51",
    icon: <Zap size={24} />,
    image: ocr5051,
    principleImage: ocrScheme,
    function:
      "Mendeteksi arus lebih akibat beban berlebih atau hubung singkat.",

    principle:
      "Overcurrent Relay (OCR) melindungi transformator dari kondisi arus lebih akibat overload maupun hubung singkat. Relay menerima sinyal arus dari Current Transformer (CT) yang dipasang pada sisi transformator. Ketika arus melebihi nilai setting, relay akan bekerja dan mengirimkan sinyal trip ke Circuit Breaker",
      steps: [
        "CT mengukur arus yang mengalir menuju transformator.",
        "Arus hasil pengukuran dikirim ke OCR.",
        "Relay membandingkan arus aktual dengan nilai setting.",
        "Jika arus masih normal, relay tetap standby.",
        "Jika arus melebihi setting, relay pickup.",
        "Timer relay aktif sesuai karakteristik waktu yang ditentukan.",
        "Relay mengirimkan sinyal trip ke Trip Coil.",
        "Circuit Breaker membuka dan memutus sistem dari gangguan."
      ],

    protection:
      "Overload dan gangguan eksternal.",

    advantage:
      "Sederhana, ekonomis, dan banyak digunakan sebagai backup protection.",
  },

  {
    id: "63",
    title: "Buchholz Relay",
    ansi: "63",
    icon: <AlertTriangle size={24} />,
    image: buchholz63,
    principleImage: buchholzScheme,
    function:
      "Buchholz Relay dipasang pada pipa antara tangki utama transformator dan conservator. Relay ini mendeteksi pembentukan gas maupun aliran minyak yang tidak normal akibat gangguan internal transformator. Gangguan ringan akan menghasilkan alarm, sedangkan gangguan berat akan menghasilkan trip.",
      steps: [
        "Terjadi gangguan internal pada transformator.",
        "Minyak transformator terurai dan menghasilkan gas.",
        "Gas terkumpul pada ruang Buchholz Relay.",
        "Pelampung atas bergerak dan mengaktifkan kontak alarm.",
        "Jika gangguan semakin besar, aliran minyak menuju conservator meningkat.",
        "Pelampung bawah atau flap bergerak akibat dorongan minyak.",
        "Kontak trip aktif.",
        "Sinyal trip dikirim ke Trip Coil dan Circuit Breaker.",
        "Circuit Breaker membuka dan transformator terisolasi.",
      ],

    principle:
      "Akumulasi gas menggerakkan pelampung relay dan mengaktifkan alarm atau trip.",

    protection:
      "Gangguan internal transformator minyak.",

    advantage:
      "Mampu mendeteksi gangguan sejak tahap awal.",
  },

  {
    id: "49",
    title: "Thermal Relay",
    ansi: "49",
    icon: <Thermometer size={24} />,
    image: thermal49,
    principleImage: thermalScheme,
    function:
      "Melindungi transformator dari suhu berlebih.",

    principle:
      "Relay ini menggunakan elemen termal atau bimetal yang akan berubah posisi akibat kenaikan suhu sehingga dapat mengaktifkan alarm maupun trip",
        steps: [
          "Arus beban menyebabkan pemanasan pada transformator.",
          "Sensor termal atau elemen bimetal mendeteksi kenaikan suhu.",
          "Temperatur diteruskan ke mekanisme relay.",
          "Relay membandingkan suhu aktual dengan nilai setting.",
          "Jika suhu mencapai batas alarm, kontak alarm aktif.",
          "Jika suhu terus meningkat hingga batas trip, relay pickup.",
          "Relay mengirimkan sinyal trip ke Circuit Breaker.",
          "Circuit Breaker membuka dan melindungi transformator dari overheating.",
        ],

    protection:
      "Overheating.",

    advantage:
      "Mencegah kerusakan isolasi akibat suhu tinggi.",
  },

  {
    id: "64REF",
    title: "Restricted Earth Fault",
    ansi: "64REF",
    icon: <Shield size={24} />,
    image: ref64,
    principleImage: refScheme,
    function:
      "Mendeteksi gangguan tanah pada zona terbatas transformator.",

    principle:
      "Relay bekerja dengan membandingkan arus dari CT fasa dan CT netral untuk mendeteksi ketidakseimbangan arus akibat gangguan tanah internal. Jika arus diferensial melebihi setting, relay akan bekerja dan mengirimkan sinyal trip, sehingga hanya gangguan tanah yang terjadi dalam zona terbatas yang akan terdeteksi.",
        steps: [
          "CT pada masing-masing fasa dan CT netral memonitor arus.", 
          "Arus dari seluruh CT dikirim ke REF Relay.",
          "Relay menghitung keseimbangan arus pada zona proteksi.",
          "Jika arus seimbang, relay tetap standby.",
          "Jika terjadi gangguan tanah internal, muncul arus diferensial.",
          "Relay mendeteksi ketidakseimbangan yang melebihi setting.",
          "Relay pickup dan mengirim sinyal trip.",
          "Circuit Breaker membuka dan mengisolasi transformator."
        ],
    protection:
      "Gangguan tanah internal.",

    advantage:
      "Sangat sensitif terhadap earth fault.",
  },
{
  id: "50g51g",
  title: "Ground Fault Relay",
  ansi: "50G/51G",
  image: gfr5052n,
  principleImage: gfrScheme,
  icon: <Shield size={24} />,

  function:
    "Mendeteksi gangguan tanah pada transformator tanpa zona terbatas.",

  principle:
    "Relay menerima sinyal dari CT dan bekerja ketika arus gangguan tanah melebihi nilai setting yang telah ditentukan. Ground Fault Relay (GFR) dapat mendeteksi gangguan tanah baik internal maupun eksternal pada transformator, sehingga memberikan perlindungan yang lebih luas dibandingkan dengan Restricted Earth Fault (REF) Relay, meskipun dengan sensitivitas yang mungkin lebih rendah untuk gangguan tanah internal.",
    steps: [
      "Terjadi gangguan antara penghantar fasa dan tanah.",
      "Arus gangguan mengalir menuju ground.",
      "CT mendeteksi ketidakseimbangan arus sistem.",
      "Arus residual dikirim ke GFR.",
      "Relay membandingkan nilai arus dengan setting.",
      "Jika arus melebihi setting, relay pickup.",
      "Relay mengirimkan sinyal trip ke Circuit Breaker.",
      "Circuit Breaker membuka dan memutus bagian yang terganggu."
    ],

  protection:
    "Gangguan tanah eksternal dan internal.",

  advantage:
    "Mampu mendeteksi ground fault dengan cepat dan efektif.",
},
  {
    id: "59",
    title: "Overvoltage Relay",
    ansi: "59",
    icon: <Zap size={24} />,
    image: overvoltage59,
    principleImage: overvoltageScheme,
    function:
      "Melindungi transformator dari tegangan lebih.",

    principle:
      "Pada kondisi normal, tegangan yang terukur masih berada di bawah nilai setting sehingga relay tidak bekerja. Ketika terjadi tegangan lebih (overvoltage), VT mengirimkan sinyal tegangan yang lebih tinggi ke relay 59. Relay kemudian membandingkan nilai tegangan tersebut dengan setting yang telah ditentukan",
      steps: [
        "VT mengukur tegangan pada sisi transformator.",
        "Tegangan hasil pengukuran dikirim ke Overvoltage Relay.",
        "Relay membandingkan tegangan aktual dengan nilai setting.",
        "Jika tegangan masih normal, relay tetap standby.",
        "Jika tegangan melebihi setting, relay pickup.",
        "Relay mengirimkan sinyal trip ke Circuit Breaker sisi HV.",
        "Circuit Breaker membuka dan memutus transformator dari sistem.",
        "Transformator terlindungi dari kerusakan akibat tegangan lebih."
      ],
    protection:
      "Overvoltage.",

    advantage:
      "Melindungi isolasi dan peralatan dari tegangan berlebih.",
  },

  {
    id: "71",
    title: "Oil Level Relay",
    ansi: "71",
    icon: <Droplets size={24} />,
    image: oillevel71,

    principleImage: oillevelScheme,

    function:
      "Memantau level minyak transformator.",

    principle:
      "Ketika level minyak turun akibat kebocoran atau gangguan lain, mekanisme pelampung atau sensor akan mengaktifkan kontak relay untuk memberikan alarm atau trip. Oil Level Relay (OLR) bekerja dengan menggunakan pelampung atau sensor level yang dipasang di dalam tangki transformator. Ketika level minyak turun di bawah batas yang telah ditentukan, pelampung akan bergerak atau sensor akan mendeteksi perubahan level, sehingga mengaktifkan kontak relay untuk memberikan sinyal alarm atau trip guna melindungi transformator dari kerusakan akibat kekurangan minyak.",
      steps: [
        "Relay memonitor level minyak pada conservator.",
        "Level minyak diteruskan ke mekanisme sensor atau pelampung.",
        "Jika level masih normal, relay tetap standby.",
        "Ketika level minyak turun, pelampung bergerak.",
        "Kontak alarm aktif saat mencapai batas alarm.",
        "Jika level minyak terus menurun hingga batas kritis, kontak trip aktif.",
        "Relay mengirimkan sinyal trip ke Circuit Breaker.",
        "Circuit Breaker membuka dan melindungi transformator dari kerusakan akibat kekurangan minyak."
      ],
    protection:
      "Kebocoran minyak dan kehilangan pendinginan.",

    advantage:
      "Memberikan alarm dini sebelum kerusakan serius.",
  },
];