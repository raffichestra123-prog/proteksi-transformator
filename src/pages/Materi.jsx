
import Navbar from "../components/Navbar";
import { useState } from "react";
import { materiData } from "../data/materiData";

export default function Materi() {
 const [activeSection, setActiveSection] =
  useState(materiData[0]);
  return (
  <div className="min-h-screen bg-[#020F2B] text-white">

    <Navbar />

    <section className="max-w-[1600px] mx-auto px-8 pt-28 pb-10">

      {/* HERO */}

      <div className="
        bg-[#071734]
        rounded-3xl
        border border-cyan-500/20
        p-12
        mb-10
      ">

        <h1 className="text-6xl font-black mb-6">

          PROTEKSI
          <br />

          <span className="text-cyan-400">
            TRANSFORMATOR DAYA
          </span>

        </h1>

        <p className="text-gray-300 text-xl max-w-3xl">

          Memahami prinsip perlindungan transformator
          untuk menjaga keandalan, keselamatan,
          dan kontinuitas sistem tenaga listrik.

        </p>

      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-10">

  {materiData.map((item) => (

    <button
      key={item.id}
      onClick={() => setActiveSection(item)}
      className={`
        p-6
        rounded-3xl
        border
        text-left
        transition-all

        ${
          activeSection.id === item.id
            ? "border-cyan-400 bg-cyan-500/10"
            : "border-white/10 hover:border-cyan-400/40"
        }
      `}
    >

      <h3 className="text-2xl font-bold">
        {item.title}
      </h3>

    </button>

  ))}

</div>

<div className="
bg-[#071734]
rounded-3xl
p-10
border border-white/10
">

  <h2 className="
  text-4xl
  font-black
  text-cyan-400
  mb-6
  ">
    {activeSection.title}
  </h2>

  <p className="
  text-gray-300
  text-lg
  mb-8
  ">
    {activeSection.description}
  </p>
  {activeSection.id === "zona" && (

  <div className="mb-10 flex justify-center">

    <img
      src="/images/zona-proteksi.png"
      alt="Zona Proteksi Transformator"
      className="
        w-full
        max-w-5xl
        rounded-3xl
        border
        border-cyan-500/20
        shadow-xl
      "
    />

  </div>

)}

  <div className="grid md:grid-cols-2 gap-6">

  {activeSection.details.map((detail, index) => (

    <div
      key={index}
      className="
        bg-black/20
        rounded-2xl
        p-6
      "
    >

      <h3 className="
      text-xl
      font-bold
      text-cyan-300
      mb-3
      ">
        {detail.title}
      </h3>

      <p className="text-gray-300">
        {detail.text}
      </p>

    </div>

  ))}

</div>

<div className="mt-10 text-center">

  {activeSection.id === "tujuan" && (

    <button
      onClick={() => {
        setActiveSection(materiData[1]);
      }}
      className="
        px-8
        py-4
        rounded-2xl
        bg-cyan-500
        text-black
        font-bold
        hover:scale-105
        transition
      "
    >
      Lanjut ke Zona Proteksi ➜
    </button>

  )}

  {activeSection.id === "zona" && (

    <button
      onClick={() => {
        setActiveSection(materiData[2]);
      }}
      className="
        px-8
        py-4
        rounded-2xl
        bg-cyan-500
        text-black
        font-bold
        hover:scale-105
        transition
      "
    >
      Lanjut ke Alur Kerja Proteksi ➜
    </button>

  )}

</div>

</div>

    </section>

  </div>
);
}