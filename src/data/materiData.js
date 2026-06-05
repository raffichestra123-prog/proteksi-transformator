export const materiData = [
  {
    id: "tujuan",
    title: "⚡ Tujuan Proteksi",

    description:
      "Transformator daya adalah salah satu alat penting dalam jaringan listrik yang berfungsi untuk menaikkan atau menurunkan voltase sesuai dengan kebutuhan jaringan. Dengan nilai investasi yang besar dan peran kuncinya dalam distribusi energi listrik, transformator perlu dilengkapi dengan sistem proteksi yang dapat mendeteksi dan memisahkan gangguan dengan cepat dan tepat. Sistem perlindungan pada transformator dibuat untuk mengurangi dampak dari gangguan, menghindari kerusakan yang lebih serius, melindungi keselamatan staf, serta menjamin kelangsungan pelayanan listrik kepada pelanggan. Berikut adalah beberapa tujuan utama dari proteksi transformator:",

    details: [
      {
        title: "🛡️ Keselamatan (Safety)",
        text:
          "Keselamatan adalah prioritas utama dari sistem perlindungan transformator. Masalah seperti hubung singkat, kerusakan isolasi, atau arus berlebih bisa mengakibatkan peningkatan suhu yang ekstrem yang dapat berisiko menyebabkan kebakaran, ledakan, atau kerusakan alat. Dengan sistem perlindungan, gangguan dapat teridentifikasi lebih awal dan komponen yang bermasalah dapat langsung dipisahkan dari sistem, sehingga risiko bagi operator, teknisi, dan lingkungan sekitar dapat diminimalkan."
      },

      {
        title: "⚙️ Keandalan (Reliability)",
        text:
          "Sistem perlindungan yang efektif dapat memastikan transformator berfungsi dengan baik baik dalam keadaan normal maupun saat ada gangguan. Perlindungan yang tepat dapat meminimalkan risiko kerusakan yang tidak dapat diperbaiki pada transformator, memperpanjang masa guna alat, dan menjaga stabilitas sistem kelistrikan secara keseluruhan."

      },

      {
        title: "⚡ Kontinuitas Pelayanan ",
        text:
          "Kontinuitas layanan adalah kemampuan dari sistem kelistrikan untuk tetap memberikan pasokan energi listrik kepada konsumen meskipun ada gangguan di salah satu bagiannya. Sistem perlindungan berperan dalam mencapai tujuan ini dengan cara memisahkan area yang terganggu tanpa menghentikan seluruh jaringan, sehingga penyediaan listrik di wilayah lain masih bisa dipertahankan."
      },

      {
        title: "💰 Ekonomis",
        text:
          "Kerusakan pada transformator bisa menimbulkan pengeluaran besar untuk perbaikan serta kerugian akibat terhentinya distribusi listrik. Dengan menggunakan sistem perlindungan yang sesuai, masalah dapat diselesaikan lebih cepat sehingga biaya untuk pemeliharaan, penggantian bagian, dan kerugian dalam operasi bisa diminimalkan."
      }
    ]
  },

  {
    id: "zona",
    title: "🛡️ Zona Proteksi",

    description:
      "Zona perlindungan adalah area kerja dari suatu sistem perlindungan yang dibatasi oleh pemasangan transformator arus atau Current Transformer (CT). Setiap relay perlindungan hanya memiliki tanggung jawab terhadap gangguan yang terjadi dalam area yang telah ditetapkan.Tujuan dari penerapan zona perlindungan adalah untuk meningkatkan selektivitas sistem, sehingga hanya bagian yang mengalami gangguan yang akan terputus, sementara bagian lainnya tetap dapat berfungsi secara normal.",

    details: [
  {
    title: "Fungsi Zona Proteksi",

    text:
      "Zona perlindungan berperan untuk menetapkan ruang lingkup tanggung jawab sebuah relay dalam mendeteksi dan melindungi terhadap gangguan. Dengan adanya pemisahan zona yang tegas, relay dapat beroperasi secara selektif dan hanya memberikan sinyal pemutusan pada perangkat yang termasuk dalam area operasionalnya."
  },

  {
    title: "Keuntungan",

    text:
      "Pelaksanaan zona perlindungan dapat meningkatkan selektivitas, mempercepat pemutusan gangguan, dan mengurangi trip yang tidak diperlukan."
  },

  {
    title: "Batas Zona Proteksi",

    text:
      "Batas dari sebuah zona perlindungan ditetapkan berdasarkan tempat pemasangan Current Transformer (CT) dalam jaringan listrik. Gangguan yang muncul di antara CT yang membentuk suatu zona akan dianggap sebagai gangguan internal dan harus diatasi oleh relay yang bertanggung jawab terhadap zona tersebut."
  },

  {
    title: "Overlapping Zone",

    text:
      "Untuk mencegah adanya wilayah yang tidak tercover, biasanya diterapkan sistem zona tumpang tindih atau overlapping zone pada perlindungan. Pendekatan ini menjamin bahwa setiap elemen dalam sistem kelistrikan tetap berada dalam ruang lingkup perlindungan sehingga tidak ada area yang terabaikan dari pengawasan relay."
  }
]
  },

  {
    id: "alur",
    title: "🔄 Alur Kerja Proteksi",

    description:
      "Sistem perlindungan transformator beroperasi secara otomatis melalui serangkaian langkah yang dimulai dari pengukuran kondisi sistem, analisis gangguan, hingga pemutusan bagian yang mengalami masalah. Tujuan utama dari proses ini adalah untuk menghindari kerusakan pada peralatan dan menjaga stabilitas sistem kelistrikan. Berikut adalah alur kerja umum dari sistem perlindungan transformator:",

    details: [
      {
        title: "1. Deteksi",

        text:
          "Current Transformer (CT) dan Voltage Transformer (VT) secara terus-menerus mengukur parameter listrik seperti arus dan tegangan. Jika terjadi perubahan yang tidak wajar akibat gangguan, sinyal hasil pengukuran akan dikirim ke relay proteksi untuk analisis lebih lanjut."
      },

      {
        title: "2. Analisis",

        text:
          "Relay perlindungan membandingkan hasil pengukuran dengan nilai pengaturan yang telah ditentukan sebelumnya.Jika parameter yang diukur melebihi ambang yang diperbolehkan, relay akan mendeteksi keadaan tersebut sebagai sebuah gangguan dan akan menyiapkan langkah-langkah pengamanan"
      },

      {
        title: "3. Trip",

        text:
          "Setelah adanya gangguan yang terdeteksi, relay akan mengirimkan sinyal pemutusan kepada pemutus sirkuit. Tujuan dari perintah ini adalah untuk menghentikan aliran listrik ke bagian sistem yang terkena gangguan agar kerusakan tidak semakin memburuk"
      },

      {
        title: "4. Isolasi",

        text:
          "Pemutus sirkuit membuka koneksi pemutus agar bagian yang terkena masalah terpisah dari jaringan listrik. Dengan memisahkan area yang bermasalah, sistem yang berfungsi baik bisa terus berjalan dan perbaikan dapat dilakukan dengan lebih aman."
      }
    ]
  }
];