import transformerImg from "../assets/Tranformator.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="scada-bg">

      <Navbar />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-52 md:pt-40 pb-24">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass text-cyan-300 text-sm">
              ⚡ Sistem Proteksi Gardu Induk
            </div>

           <h1
  className="
    text-5xl
    md:text-[72px]
    leading-[0.95]
    font-black
    mt-10
  "
>

              Proteksi

              <br />

              <span className="text-cyan-400">
                Transformator
              </span>

              <br />

              Daya

            </h1>

            <p className="text-gray-300 text-2xl leading-relaxed mt-10 max-w-2xl">
              pembelajaran sistem proteksi transformator daya
              dengan simulasi gangguan, relay proteksi, dan animasi trip circuit
              breaker secara real-time.
            </p>

            {/* BUTTONS */}

<div className="flex flex-wrap gap-4 mt-10 mb-10">

  <Link to="/simulation">
    <button className="
      px-8 py-4 rounded-2xl
      bg-cyan-500 hover:bg-cyan-400
      transition font-bold text-lg
      neon-glow
    ">
      Mulai Simulasi
    </button>
  </Link>

  <Link to="/materi">
    <button className="
      px-8 py-4 rounded-2xl
      glass border border-cyan-500/20
      hover:border-cyan-400
      transition font-bold text-lg
    ">
      Pelajari Materi
    </button>
  </Link>

  <Link to="/video">
    <button className="
      px-10 py-5 rounded-2xl
      glass border border-cyan-500/20
      hover:border-cyan-400
      transition font-bold text-lg
    ">
      Pelajari Video
    </button>
  </Link>

</div>      

          </div>

          {/* RIGHT */}

          <div className="glass rounded-[40px] p-10 border border-cyan-500/10 relative overflow-hidden">

            {/* DOTS */}

            <div className="absolute top-16 left-16 w-3 h-3 rounded-full bg-cyan-400"></div>
            <div className="absolute top-16 right-16 w-4 h-4 rounded-full bg-green-400"></div>
            <div className="absolute bottom-16 right-24 w-3 h-3 rounded-full bg-cyan-400"></div>

            <p className="text-gray-400 text-xl mb-4">
              Equipment
             </p>

            <h2 className="text-cyan-400 text-5xl font-black">
              Trafo Daya
            </h2>

          {/* REAL TRANSFORMER IMAGE */}

<div className="relative flex justify-center items-center py-10">

  {/* GLOW BACKGROUND */}

  <div className="
    absolute
    w-[400px]
    h-[400px]
    bg-cyan-400/20
    blur-[120px]
    rounded-full
  "></div>

  {/* IMAGE */}

  <img
    src={transformerImg}
    alt="Transformer"
    className="
      relative
      z-10
      w-full
      max-w-[500px]
      object-contain
      drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]
      hover:scale-105
      transition
      duration-500
    "
  />

</div>


            {/* BOTTOM PANEL */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-black/30 rounded-3xl p-6">
                <p className="text-gray-400 text-lg">
                  Temperature
                </p>

                <h2 className="text-orange-400 text-4xl font-black mt-3">
                  68°C
                </h2>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <p className="text-gray-400 text-lg">
                  Relay
                </p>

                <h2 className="text-green-400 text-4xl font-black mt-3">
                  ACTIVE
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass rounded-[35px] p-10 hover-card">

            <div className="text-5xl">
              ⚠️
            </div>

            <h2 className="text-cyan-400 text-4xl font-black mt-6">
              Simulasi Gangguan
            </h2>

            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              Simulasikan overload, hubung singkat, dan gangguan internal transformator secara interaktif.
            </p>

          </div>

          <div className="glass rounded-[35px] p-10 hover-card">

            <div className="text-5xl">
              🛡️
            </div>

            <h2 className="text-cyan-400 text-4xl font-black mt-6">
              Relay Proteksi
            </h2>

            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              Pelajari differential relay, OCR, Buchholz relay, dan sistem proteksi lainnya.
            </p>

          </div>

          <div className="glass rounded-[35px] p-10 hover-card">

            <div className="text-5xl">
              📊
            </div>

            <h2 className="text-cyan-400 text-4xl font-black mt-6">
              Monitoring System
            </h2>

            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              Pantau arus, tegangan, suhu, dan status breaker secara realtime.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}