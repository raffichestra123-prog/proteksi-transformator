import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../pages/Home";
import Simulation from "../pages/Simulation";
import Gangguan from "../pages/Gangguan";
import Relay from "../pages/Relay";
import Quiz from "../pages/Quiz";
import Materi from "../pages/Materi";
import Video from "../pages/Video";

import RouteFlash from "../components/RouteFlash";

import LightningTransition from "../components/LightningTransition";

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
    <RouteFlash />
    
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />

        <Route
          path="/simulation"
          element={
            <AnimatedPage>
              <Simulation />
            </AnimatedPage>
          }
        />

        <Route
          path="/gangguan"
          element={
            <AnimatedPage>
              <Gangguan />
            </AnimatedPage>
          }
        />

        <Route
          path="/relay"
          element={
            <AnimatedPage>
              <Relay />
            </AnimatedPage>
          }
        />

        <Route
          path="/materi"
          element={
            <AnimatedPage>
              <Materi />
            </AnimatedPage>
          }
        />

        <Route
          path="/quiz"
          element={
            <AnimatedPage>
              <Quiz />
            </AnimatedPage>
          }
        />

        <Route
          path="/video"
          element={
            <AnimatedPage>
              <Video />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
    </>
  );
}