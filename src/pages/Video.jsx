import { useState } from "react";
import { Link } from "react-router-dom";

export default function Video() {

  const videos = [
  {
    title: "Transformers Protection System",
    category: "Proteksi Transformator",
    embed:
      "https://www.youtube.com/embed/mSwMCZRZYOU",
  },

  {
    title: "Types of Transformer Protection",
    category: "Proteksi Transformator",
    embed:
      "https://www.youtube.com/embed/IJdOuQ4r_1k",
  },

  {
    title: "Cara Kerja Current Transformer (CT)",
    category: "CT dan VT",
    embed:
      "https://www.youtube.com/embed/tR6SFXuqm3c",
  },

  {
    title: "Cara Kerja Voltage Transformer (VT)",
    category: "CT dan VT",
    embed:
      "https://www.youtube.com/embed/MInXab0pnOA",
  },

  {
    title: "CT dan VT pada Sistem Proteksi",
    category: "CT dan VT",
    embed:
      "https://www.youtube.com/embed/Q27XtzgOVUo",
  },

  {
    title: "Prinsip Kerja Relay Proteksi",
    category: "Relay Proteksi",
    embed:
      "https://www.youtube.com/embed/2miPQph6kM0",
  },

  {
    title: "Mekanisme Trip Circuit Breaker",
    category: "Circuit Breaker",
    embed:
      "https://www.youtube.com/embed/wGFnooeA6Iw",
  },
];

const [currentVideo, setCurrentVideo] = useState(0);

const nextVideo = () => {
  setCurrentVideo((prev) =>
    prev === videos.length - 1 ? 0 : prev + 1
  );
};

const prevVideo = () => {
  setCurrentVideo((prev) =>
    prev === 0 ? videos.length - 1 : prev - 1
  );
};

const getYoutubeId = (url) => {
  return url.split("/embed/")[1];
};

  return (
    <div className="min-h-screen bg-[#020f2b] text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 pt-10">

        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            text-cyan-400
            hover:text-cyan-300
            mb-10
          "
        >
          ← Kembali ke Home
        </Link>

        <h1 className="text-6xl font-black mb-3">
          Video Pembelajaran
        </h1>

        <p className="text-gray-400 text-xl">
          Pelajari sistem proteksi transformator daya melalui video interaktif.
        </p>

      </div>

      {/* Main Video */}
      <div className="max-w-6xl mx-auto px-8 mt-12">

        <div className="
          bg-[#08142d]
          rounded-3xl
          overflow-hidden
          border border-cyan-500/20
        ">

          <iframe
          className="w-full aspect-video"
          src={videos[currentVideo].embed}
          title={videos[currentVideo].title}
          allowFullScreen
        />

          <div className="p-6">

  <p className="text-cyan-400 text-sm mb-2 font-semibold">
    {videos[currentVideo].category}
  </p>

  <h2 className="text-3xl font-bold text-cyan-400">
    {videos[currentVideo].title}
  </h2>

</div>
        </div>

        {/* Slider Controls */}
        <div className="
          flex justify-center gap-6
          mt-8
        ">

          <button
            onClick={prevVideo}
            className="
              px-6 py-3
              rounded-xl
              glass
              border border-cyan-500/20
            "
          >
            ◀ Previous
          </button>

          <button
            onClick={nextVideo}
            className="
              px-6 py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
            "
          >
            Next ▶
          </button>

        </div>

      </div>

      {/* Thumbnail Section */}
      <div className="
        max-w-6xl mx-auto
        px-8
        mt-14
        pb-16
      ">

        <h3 className="text-2xl font-bold mb-6">
          Daftar Video
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {videos.map((video, index) => (

            <div
              key={index}
              onClick={() => setCurrentVideo(index)}
              className="
                cursor-pointer
                bg-[#08142d]
                rounded-2xl
                p-5
                border border-cyan-500/20
                hover:border-cyan-400
                transition
              "
            >

              <img
                src={`https://img.youtube.com/vi/${getYoutubeId(video.embed)}/mqdefault.jpg`}
                alt={video.title}
                onError={(e) => {
   e.target.src =
`https://img.youtube.com/vi/${getYoutubeId(video.embed)}/hqdefault.jpg`;
  }}
  className="w-full rounded-xl mb-4"
/>


              <p className="text-cyan-400 text-xs mb-2">
  {video.category}
</p>

<h4 className="font-semibold">
  {video.title}
</h4>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}