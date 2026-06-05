import Navbar from "../components/Navbar";
import { useState } from "react";

import {
  Zap,
  Flame,
  ShieldAlert,
  Thermometer,
  Droplets,
  AlertTriangle,
} from "lucide-react";

import gangguanImg from "../assets/gangguan-trafo.png";

const faultData = [
{
  id: "overview",
  title: "Jenis Gangguan",
  icon: <ShieldAlert size={28} />,
  color: "text-cyan-400",
  border: "border-cyan-400/70",
  overview: true,
},
  {
    title: "Hubung Singkat",
    icon: <Zap size={28} />,
    color: "text-red-400",
    border: "border-red-400/70",

    desc:
      "Hubung singkat (short circuit) merupakan gangguan yang terjadi ketika dua penghantar dengan beda potensial saling terhubung secara langsung sehingga menghasilkan arus yang sangat besar. Pada transformator, gangguan ini dapat terjadi antar lilitan dalam satu fasa, antar fasa, maupun antara lilitan dengan tanah (ground). Hubung singkat termasuk gangguan yang paling berbahaya karena dapat menyebabkan kerusakan serius dalam waktu yang sangat singkat",

    cause:
      "Kerusakan atau penuaan isolasi belitan, Tegangan lebih yang merusak isolasi, Kelembaban yang masuk ke dalam transformator,Gaya mekanis akibat gangguan sebelumnya. Kesalahan instalasi atau kegagalan komponen internal",

    impact:
      "Dapat menyebabkan kerusakan permanen pada winding trafo, Kenaikan temperatur yang ekstrem, dan Gangguan pada kestabilan sistem tenaga listrik.",

    relay:
      "Differential Relay 87T dan OCR 50/51",

    status: "TRIP",
  },

  {
    title: "Arus Lebih",
    icon: <AlertTriangle size={28} />,
    color: "text-yellow-400",
    border: "border-yellow-400/30",

    desc:
      "Arus lebih (overcurrent) adalah kondisi ketika arus yang mengalir melebihi nilai nominal transformator dalam jangka waktu tertentu. Gangguan ini dapat terjadi akibat beban berlebih maupun gangguan pada sistem tenaga yang menyebabkan peningkatan arus secara signifikan",

    cause:
      "Overload beban atau ketidakseimbangan beban.",

    impact:
      "Meningkatkan temperatur dan mempercepat penuaan isolasi.",

    relay:
      "OCR Relay 50/51",

    status: "WARNING",
  },

  {
    title: "Tegangan Lebih",
    icon: <Zap size={28} />,
    color: "text-cyan-400",
    border: "border-cyan-400/30",

    desc:
      "Tegangan lebih (overvoltage) adalah kondisi ketika tegangan sistem melebihi batas operasi normal transformator. Tegangan lebih dapat bersifat sementara maupun sesaat dan berpotensi merusak sistem isolasi transformator.",

    cause:
      "Sambaran petir pada jaringan transmisi, Switching sistem tenaga, atau Pelepasan beban secara mendadak.",

    impact:
      "Merusak isolasi dan kerusakan komponen internal trafo.",

    relay:
      "Over Voltage Relay 59",

    status: "ALERT",
  },

  {
    title: "Kegagalan Isolasi",
    icon: <ShieldAlert size={28} />,
    color: "text-purple-400",
    border: "border-purple-400/30",

    desc:
      "Kegagalan isolasi merupakan kondisi ketika kemampuan material isolasi dalam memisahkan bagian bertegangan mengalami penurunan atau kerusakan. Gangguan ini dapat menyebabkan kebocoran arus hingga terjadinya hubung singkat internal",

    cause:
      "Penuaan isolasi, Kelembaban yang masuk ke dalam transformator, Kontaminasi oleh partikel asing, atau Tegangan lebih yang merusak isolasi.",

    impact:
      "Menimbulkan flashover, hubung singkat internal dan kerusakan komponen pada transformator.",

    relay:
      "Differential Relay dan REF",

    status: "CRITICAL",
  },

  {
    title: "Kegagalan Pendinginan",
    icon: <Flame size={28} />,
    color: "text-orange-400",
    border: "border-orange-400/30",

    desc:
      "Kegagalan pendinginan terjadi ketika sistem pendingin transformator tidak mampu membuang panas yang dihasilkan selama operasi. Akibatnya temperatur transformator meningkat melebihi batas yang diizinkan",

    cause:
      "Kerusakan kipas pendingin, kerusakan pompa minyak, gangguan pada sistem pendingin udara dan kekuranan minyak transformator.",

    impact:
      "Trafo mengalami overheating, Penurunan kualitas minyak dan mempercepat kerusakan peralatan.",

    relay:
      "Thermal Relay 49",

    status: "WARNING",
  },

  {
    title: "Overheating",
    icon: <Thermometer size={28} />,
    color: "text-pink-400",
    border: "border-pink-400/30",

    desc:
      "Overheating adalah kondisi ketika temperatur transformator meningkat melebihi batas operasi normal akibat pembebanan berlebih atau gangguan pada sistem pendinginan. Kondisi ini harus segera ditangani karena dapat mempercepat kerusakan isolasi.",

    cause:
      "Beban berlebih, sistem pendingin tidak berfungsi optimal dan ventilasi yang buruk.",

    impact:
      "Penurunan umur isolasi, penurunan perfoma transformator dan resiko kerusakan belitan.",

    relay:
      "Thermal Relay 49",

    status: "HOT",
  },

  {
    title: "Level Minyak Rendah",
    icon: <Droplets size={28} />,
    color: "text-blue-400",
    border: "border-blue-400/30",

    desc:
      "Level minyak rendah merupakan kondisi ketika volume minyak isolasi dan pendingin pada transformator berada di bawah batas aman operasi. Minyak transformator berfungsi sebagai media isolasi sekaligus media pendingin",

    cause:
      "Kebocoran tangki, penguapan akibat temperatur tinggi dan kerusakan gasket atau seal.",

    impact:
      "Mengurangi kemampuan pendinginan dan isolasi, meningkatkan risiko overheating dan kerusakan internal transformator.",

    relay:
      "Oil Level Relay 71",

    status: "LOW OIL",
  },

  {
    title: "Akumulasi Gas Buchholz",
    icon: <AlertTriangle size={28} />,
    color: "text-green-400",
    border: "border-green-400/30",

    desc:
      "Akumulasi gas Buchholz merupakan indikasi adanya gangguan internal pada transformator yang menyebabkan dekomposisi minyak isolasi dan menghasilkan gas. Gas tersebut akan terkumpul pada relay Buchholz yang dipasang di antara tangki utama dan konservator",

    cause:
      "Percikan internal, Hot spot pada belitan dan kerusakan isolasi.",

    impact:
      "Menandakan adanya kerusakan internal trafo, menurunkan kualitas minyak isolasi dan mengurangi keandalan transformator.",

    relay:
      "Buchholz Relay 63",

    status: "GAS DETECTED",
  },

];

export default function Gangguan() {

  const [selectedFault, setSelectedFault] = useState(faultData[0]);

  return (

    <div className="min-h-screen bg-[#020b1c] text-white">

      <Navbar />

      <section className="max-w-[1700px] mx-auto px-8 pt-36 pb-20">

        {/* TITLE */}

        <div className="mb-10">

          <h1 className="text-6xl font-black">
            Jenis
            <span className="text-cyan-400">
              {" "}Gangguan Trafo
            </span>
          </h1>

          <p className="text-gray-400 text-xl mt-4">
            Sistem proteksi transformator daya terhadap gangguan internal dan eksternal.
          </p>

        </div>

        {/* MAIN LAYOUT */}

        <div className="grid lg:grid-cols-[350px_1fr] gap-8">

          {/* SIDEBAR */}

          <div className="glass rounded-[35px] p-6 h-fit">

            <h2 className="text-3xl font-black text-cyan-400 mb-8">
            
               </h2>

            <div className="space-y-4">

              {faultData.map((fault) => (

                <button
                  key={fault.title}
                  onClick={() => setSelectedFault(fault)}
                  className={`
                    w-full
                    flex items-center gap-4
                    px-7 py-5
                    rounded-2xl
                    border
                    transition
                    text-left

                    ${selectedFault.title === fault.title
                      ? `${fault.border} ${fault.color} bg-cyan-500/20`
                      : "border-white/10 hover:border-cyan-400/30"}
                  `}
                >

                  {fault.icon}

                  <span className="font-semibold">
                    {fault.title}
                  </span>

                </button>

              ))}

            </div>

          </div>

          {/* CENTER IMAGE */}

          {/* CENTER CONTENT */}

          {selectedFault.overview ? (

  <div className="glass rounded-[35px] p-6">

    <img
      src={gangguanImg}
      alt="Gangguan Transformator"
      className="rounded-3xl w-full object-cover"
    />

  </div>

) : (

  <div className="glass rounded-[35px] p-8">

    <div className={`
      inline-flex
      px-5 py-2
      rounded-full
      border
      mb-8
      font-semibold

      ${selectedFault.border}
      ${selectedFault.color}
    `}>

      {selectedFault.status}

    </div>

    <h2 className={`
      text-5xl font-black mb-10
      ${selectedFault.color}
    `}>

      {selectedFault.title}

    </h2>

    <div className="space-y-10">

      <div>

        <h3 className="text-2xl font-bold mb-3">
          Deskripsi
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          {selectedFault.desc}
        </p>

      </div>

      <div>

        <h3 className="text-2xl font-bold mb-3">
          Penyebab
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          {selectedFault.cause}
        </p>

      </div>

      <div>

        <h3 className="text-2xl font-bold mb-3">
          Dampak
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          {selectedFault.impact}
        </p>

      </div>

      <div>

        <h3 className="text-2xl font-bold mb-3">
          Sistem Proteksi
        </h3>

        <div className={`
          inline-flex
          px-5 py-3
          rounded-2xl
          bg-black/30
          border

          ${selectedFault.border}
        `}>

          <span className={`
            font-bold text-lg
            ${selectedFault.color}
          `}>
            {selectedFault.relay}
          </span>

        </div>

      </div>

    </div>

  </div>

)}

</div>
        
      </section>

    </div>
  );
}