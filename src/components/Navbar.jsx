import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import LightningTransition from "./LightningTransition";

export default function Navbar() {
const [mobileMenu, setMobileMenu] = useState(false);
const [showAuthor, setShowAuthor] = useState(false);
const [showLightning, setShowLightning] = useState(false);

const navigate = useNavigate();

const [musicOn, setMusicOn] = useState(
localStorage.getItem("musicEnabled") !== "false"
);

const toggleMusic = () => {
const newValue = !musicOn;

```
setMusicOn(newValue);

localStorage.setItem(
  "musicEnabled",
  newValue
);

window.dispatchEvent(
  new Event("musicChanged")
);
```

};

const handleNavigate = (path) => {
setShowLightning(true);

```
setTimeout(() => {
  navigate(path);
  setShowLightning(false);
}, 500);
```

};

const handleMobileNavigate = (path) => {
setMobileMenu(false);
handleNavigate(path);
};

return (
<>
{showLightning && ( <LightningTransition />
)}

```
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
        max-w-7xl
        mx-auto
        px-4
        md:px-8
        py-4
      "
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div>
          <h1
            className="
              text-cyan-400
              text-2xl
              md:text-3xl
              font-black
            "
          >
            PROTEKSI TRAFO
          </h1>

          <p className="text-gray-400 text-xs md:text-sm">
            Media Pembelajaran Interaktif
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <button
            onClick={() => setShowAuthor(true)}
            className="
              text-xs
              px-3 py-1
              rounded-lg
              border border-white/10
              bg-white/5
            "
          >
            Author
          </button>

          <button
            onClick={toggleMusic}
            className="
              text-xs
              px-3 py-1
              rounded-lg
              border border-white/10
              bg-white/5
            "
          >
            {musicOn ? "🔊 ON" : "🔇 OFF"}
          </button>

          <button onClick={() => handleNavigate("/")}>
            Home
          </button>

          <button onClick={() => handleNavigate("/materi")}>
            Materi
          </button>

          <button onClick={() => handleNavigate("/gangguan")}>
            Gangguan
          </button>

          <button onClick={() => handleNavigate("/relay")}>
            Relay
          </button>

          <button onClick={() => handleNavigate("/simulation")}>
            Simulasi
          </button>

          <button onClick={() => handleNavigate("/quiz")}>
            Quiz
          </button>

          <button onClick={() => handleNavigate("/video")}>
            Video
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-4
            mt-4
            px-4
            pb-4
            bg-[#08142d]
            rounded-xl
          "
        >
          <button onClick={() => handleMobileNavigate("/")}>
            Home
          </button>

          <button onClick={() => handleMobileNavigate("/materi")}>
            Materi
          </button>

          <button onClick={() => handleMobileNavigate("/gangguan")}>
            Gangguan
          </button>

          <button onClick={() => handleMobileNavigate("/relay")}>
            Relay
          </button>

          <button onClick={() => handleMobileNavigate("/simulation")}>
            Simulasi
          </button>

          <button onClick={() => handleMobileNavigate("/quiz")}>
            Quiz
          </button>

          <button onClick={() => handleMobileNavigate("/video")}>
            Video
          </button>

          <button onClick={() => setShowAuthor(true)}>
            Author
          </button>

          <button onClick={toggleMusic}>
            {musicOn ? "🔊 ON" : "🔇 OFF"}
          </button>
        </div>
      )}
    </div>
  </nav>

  {/* POPUP AUTHOR */}
  {showAuthor && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
      <div className="bg-[#08142d] border border-cyan-500/20 p-8 rounded-3xl w-[90%] max-w-[420px] shadow-2xl">

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
