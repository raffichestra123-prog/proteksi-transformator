import {
  NavLink,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

import LightningTransition from "./LightningTransition";

export default function Navbar() {
  const [showAuthor, setShowAuthor] = useState(false);
  const [showLightning, setShowLightning] =
  useState(false);

const navigate = useNavigate();

  const [musicOn, setMusicOn] = useState(
  localStorage.getItem("musicEnabled") !== "false"
);
const toggleMusic = () => {
  const newValue = !musicOn;

  setMusicOn(newValue);

  localStorage.setItem(
    "musicEnabled",
    newValue
  );

  window.dispatchEvent(
    new Event("musicChanged")
  );
};
const handleNavigate = (path) => {

  setShowLightning(true);

  setTimeout(() => {

    navigate(path);

    setShowLightning(false);

  }, 500);

};
  const navStyle = ({ isActive }) =>
    isActive
      ? `
        text-cyan-400
        border-b-2
        border-cyan-400
        pb-1
        drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
      `
      : `
        text-white
        hover:text-cyan-300
        transition
      `;

  return (
    <>
    {showLightning && (
  <LightningTransition />
)}
      {/* NAVBAR */}
      <nav
        className="
          fixed top-0 left-0
          w-full z-50
          glass
          border-b border-cyan-500/10
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            px-8 py-5
            flex justify-between items-center
          "
        >
          {/* LOGO */}
          <div>
            <h1
              className="
                text-cyan-400
                text-3xl
                font-black
              "
            >
              PROTEKSI TRAFO
            </h1>

            <p className="text-gray-400 text-sm">
              Media Pembelajaran Interaktif
            </p>
          </div>

          {/* AUTHOR BUTTON */}
          <button
            onClick={() => setShowAuthor(true)}
            className="
              text-xs
              text-gray-500
              hover:text-cyan-400
              transition
              px-3 py-1
              rounded-lg
              border border-white/10
              bg-white/5
            "
          >
            Author
          </button>
          
          {/* MUSIC TOGGLE */}
          <button
            onClick={toggleMusic}
            className="
              text-xs
              text-gray-500
              hover:text-cyan-400
              transition
              px-3 py-1
              rounded-lg
              border border-white/10
              bg-white/5
            "
          >
            {musicOn ? "🔊 ON" : "🔇 OFF"}
          </button>

          {/* MENU */}
          <div
            className="
              flex items-center gap-10
              text-lg font-semibold
            "
          >
           <button
  onClick={() => handleNavigate("/")}
  className="
    text-white
    hover:text-cyan-300
    transition
  "
>
  Home
</button>

<button
  onClick={() =>
    handleNavigate("/materi")
  }
  className="
    text-white
    hover:text-cyan-300
    transition
  "
>
  Materi
</button>

          <button
  onClick={() => handleNavigate("/gangguan")}
  className="
    text-white
    hover:text-cyan-300
    transition
  "
>
  Gangguan
</button>

<button
  onClick={() => handleNavigate("/relay")}
  className="
    text-white
    hover:text-cyan-300
    transition
  "
>
  Relay
</button>

           <button
  onClick={() => handleNavigate("/simulation")}
  className="
    text-white
    hover:text-cyan-300
    transition
  "
>
  Simulation
</button>

            <button
  onClick={() => handleNavigate("/quiz")}
  className="
    text-white
    hover:text-cyan-300
    transition
  "
>
  Quiz
</button>

          </div>
        </div>
      </nav>

      {/* POPUP AUTHOR */}
      {showAuthor && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
          <div className="bg-[#08142d] border border-cyan-500/20 p-8 rounded-3xl w-[420px] shadow-2xl">

            <h2 className="text-cyan-400 text-3xl font-bold mb-6 text-center">
              Author
            </h2>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white">
                  Raffi Ahmad Maulana
                </p>
                <p className="text-sm text-gray-400">
                  Frontend Developer, UI/UX Designer
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Doni Wardo Sitanggang
                </p>
                <p className="text-sm text-gray-400">
                  Content Developer
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Rahmat Hidayat
                </p>
                <p className="text-sm text-gray-400">
                  Simulation Developer
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Josua Fourman Gultom
                </p>
                <p className="text-sm text-gray-400">
                  Content Developer
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAuthor(false)}
                className="
                  px-6 py-2
                  bg-cyan-500
                  hover:bg-cyan-400
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}