export const faultData = [

{
  id: "overview",
  title: "Jenis Gangguan",
  overview: true,
},
    

  {
    id: "short-circuit",
    title: "Hubung Singkat Internal", 
    status: "TRIP",

    description:
      "Hubung singkat (short circuit) merupakan gangguan yang terjadi ketika dua penghantar dengan beda potensial saling terhubung secara langsung sehingga menghasilkan arus yang sangat besar. Pada transformator, gangguan ini dapat terjadi antar lilitan dalam satu fasa, antar fasa, maupun antara lilitan dengan tanah (ground). Hubung singkat termasuk gangguan yang paling berbahaya karena dapat menyebabkan kerusakan serius dalam waktu yang sangat singkat.",

    cause:
      "Kerusakan atau penuaan isolasi, tegangan lebih, Kelembaban dan kesalahan instalasi atau kegagalan komponen internal.",

    impact:
      "Dapat menyebabkan kerusakan permanen pada winding trafo, Kenaikan temperatur yang ekstrem dan gangguan pada kestabilan sistem tenaga listrik.",

    protection:
      "Differential Relay 87T dan OCR 50/51",
  },

  {
    id: "overcurrent",
    title: "Arus Lebih",
    status: "WARNING",

    description:
      "Arus lebih terjadi saat arus melebihi rating nominal transformator.",

    cause:
      "Beban berlebih atau gangguan eksternal.",

    impact:
      "Menyebabkan pemanasan berlebih pada belitan.",

    protection:
      "OCR 50/51",
  },

  {
    id: "overvoltage",
    title: "Tegangan Lebih",
    status: "ALARM",

    description:
      "Tegangan lebih dapat merusak isolasi transformator.",

    cause:
      "Petir atau switching sistem tenaga.",

    impact:
      "Mempercepat degradasi isolasi.",

    protection:
      "Relay Tegangan Lebih 59",
  },

];