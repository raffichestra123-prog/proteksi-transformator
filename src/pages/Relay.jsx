import Navbar from "../components/Navbar";
import { useState } from "react";
import { relayData } from "../data/relayData.jsx";
export default function Relay() {
  const [selectedRelay, setSelectedRelay] = useState(relayData[0]);

  return (
    <div className="min-h-screen bg-[#020F2B] text-white">
      <Navbar />

      <section className="max-w-[1800px] mx-auto px-8 pt-28 pb-10">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-6xl font-black">
            Relay <span className="text-cyan-400">Proteksi Trafo</span>
          </h1>

          <p className="text-gray-400 text-xl mt-4">
            Mempelajari fungsi, ANSI Code, prinsip kerja,
            area proteksi dan karakteristik relay transformator.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-[320px_1fr] gap-8">

          {/* SIDEBAR */}
          <div className="bg-[#071734] rounded-[30px] p-6 border border-white/10">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Jenis Relay
            </h2>

            <div className="space-y-4">

              {relayData.map((relay) => (
                <button
                  key={relay.id}
                  onClick={() => setSelectedRelay(relay)}
                  className={`
                    w-full
                    flex items-center gap-4
                    px-6 py-4
                    rounded-2xl
                    border
                    transition-all
                    text-left

                    ${
                      selectedRelay.id === relay.id
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                        : "border-white/10 hover:border-cyan-400/30"
                    }
                  `}
                >
                  {relay.icon}

                  <span className="font-semibold">
                    {relay.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-[#071734] rounded-[30px] p-8 border border-white/10">

            <h2 className="text-4xl font-black text-cyan-400 mb-8">
              {selectedRelay.title}
            </h2>

            {/* TOP SECTION */}

<div className="grid lg:grid-cols-[500px_1fr] gap-8 mb-8">

  {/* GAMBAR */}
  <div className="bg-black/20 rounded-3xl p-6 flex items-center justify-center">

    <img
      src={selectedRelay.image}
      alt={selectedRelay.title}
      className="w-full max-h-[420px] object-contain"
    />

  </div>

  {/* INFO KANAN */}
  <div className="flex flex-col gap-6">

    {/* ANSI */}
    <div className="bg-[#081E45] border border-cyan-400/20 rounded-3xl p-6">

      <h3 className="text-cyan-400 font-bold text-lg mb-4">
        ANSI Code
      </h3>

      <span className="inline-block px-5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 font-bold text-xl">
        {selectedRelay.ansi}
      </span>

    </div>

    {/* AREA */}
    <div className="bg-[#081E45] border border-cyan-400/20 rounded-3xl p-6 flex-1">

      <h3 className="text-cyan-400 font-bold text-lg mb-4">
        Area Proteksi
      </h3>

      <p className="text-gray-200 leading-relaxed">
        {selectedRelay.protection}
      </p>

    </div>

  </div>

</div>
            {/* DETAIL */}
            {/* DETAIL CARD */}

<div className="grid md:grid-cols-2 gap-6">


</div>

{/* FUNGSI */}
<div className="bg-[#081E45] border border-cyan-400/20 rounded-3xl p-6 mt-6">
  <h3 className="text-cyan-400 font-bold text-xl mb-4">
    Fungsi
  </h3>

  <p className="text-gray-200 leading-relaxed">
    {selectedRelay.function}
  </p>
</div>


{/* PRINSIP KERJA */}

<div className="bg-[#081E45] border border-cyan-400/20 rounded-3xl p-6 mt-6">

  <h3 className="text-cyan-400 font-bold text-xl mb-6">
    Prinsip Kerja
  </h3>

  <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

    {/* KOLOM KIRI */}
    <div>

      <p className="text-gray-200 leading-relaxed">
        {selectedRelay.principle}
      </p>

      {selectedRelay.steps && (
        <>
          <h4 className="mt-6 font-semibold text-cyan-300">
            Alur Proses:
          </h4>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-200">
            {selectedRelay.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </>
      )}

    </div>

    {/* KOLOM KANAN */}
    <div className="bg-black/20 rounded-2xl p-4">

      {selectedRelay.principleImage && (
        <img
          src={selectedRelay.principleImage}
          alt="Relay Schematic"
          className="w-full max-h-[250px] object-contain"
        />
      )}

    </div>

  </div>

</div>

{/* KELEBIHAN */}
<div className="bg-[#081E45] border border-cyan-400/20 rounded-3xl p-6 mt-6">
  <h3 className="text-cyan-400 font-bold text-xl mb-4">
    Kelebihan
  </h3>

  <p className="text-gray-200 leading-relaxed">
    {selectedRelay.advantage}
  </p>
</div>
            

          </div>

        </div>

      </section>
    </div>
  );
}