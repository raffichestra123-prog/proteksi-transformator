import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
export default function Simulation() {

  const [status, setStatus] = useState("NORMAL");
  const [temperature, setTemperature] = useState(68);
  const [current, setCurrent] = useState(245);
  const [relay, setRelay] = useState("ACTIVE");
  const [breaker, setBreaker] = useState("CLOSED");
  const [alarm, setAlarm] = useState(false);
  const [fault, setFault] = useState(false);
  const [protectionStep, setProtectionStep] =
  useState(0);
  const [eventLog, setEventLog] = useState([
  "System Ready"
]);

  // OVERLOAD

 const overloadSimulation = () => {

  setStatus("OVERLOAD");
  setTemperature(110);
  setCurrent(520);
  setRelay("WARNING");

  setEventLog([
    "Overload Detected",
    "Relay Warning Activated",
    "Thermal Monitoring Active"
  ]);
};

  // SHORT CIRCUIT
const shortCircuitSimulation = () => {
  setFault(true);

  setProtectionStep(1);

  setStatus("FAULT");

  setCurrent(1200);

  setTemperature(180);

  setAlarm(true);

  setEventLog([
    "Short Circuit Detected"
  ]);

  setTimeout(() => {

    setRelay("PICKUP");

    setProtectionStep(2);

    setEventLog(prev => [
      ...prev,
      "Relay Pickup"
    ]);

  }, 1000);

  setTimeout(() => {

    setRelay("TRIP");

    setProtectionStep(3);

    setEventLog(prev => [
      ...prev,
      "Relay Trip"
    ]);

  }, 2000);

  setTimeout(() => {

    setBreaker("OPEN");

    setProtectionStep(4);

    setEventLog(prev => [
      ...prev,
      "Circuit Breaker Open"
    ]);

  }, 3000);

  setTimeout(() => {

    setStatus("TRIP");

    setProtectionStep(5);

    setEventLog(prev => [
      ...prev,
      "Transformer Isolated"
    ]);

  }, 4000);

};

  // RESET

  const resetSystem = () => {
    setFault(false);
    setProtectionStep(0);
    setStatus("NORMAL");
    setTemperature(68);
    setCurrent(245);

    setRelay("ACTIVE");
    setBreaker("CLOSED");

    setAlarm(false);

    setEventLog([
  "System Ready"
]);
  };

  return (
    <div className="scada-bg min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-36 pb-20">

        {/* TITLE */}
<Link to="/">

  <button className="
    mb-6
    px-6 py-3
    rounded-2xl
    glass
    border border-cyan-500/20
    hover:border-cyan-400
    transition
    font-semibold
  ">
    ← Kembali ke Home
  </button>

</Link>
        <div className="mb-10">

          <h1 className="text-6xl font-black">
            Simulasi
            <span className="text-cyan-400">
              {" "}Proteksi
            </span>
          </h1>

          <p className="text-gray-400 text-xl mt-4">
            Monitoring sistem proteksi transformator daya realtime
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT PANEL */}

          <div className="glass rounded-[35px] p-8">

            <h2 className="text-3xl font-black text-cyan-400 mb-8">
              Control Panel
            </h2>

            {/* STATUS */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-black/30 rounded-3xl p-6">
                <p className="text-gray-400">
                  Status
                </p>

                <h2 className={`
                  text-4xl font-black mt-3
                 ${status === "NORMAL" && "text-green-400"}

                  ${status === "OVERLOAD" && "text-yellow-400"}

                  ${status === "FAULT" && "text-orange-400 animate-pulse"}

                  ${status === "TRIP" && "text-red-500 animate-pulse"}
                `}>
                  {status}
                </h2>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <p className="text-gray-400">
                  Relay
                </p>

                <h2 className={`
                  text-4xl font-black mt-3
                  ${relay === "ACTIVE" && "text-green-400"}
                  ${relay === "WARNING" && "text-yellow-400"}
                  ${relay === "PICKUP" && "text-orange-400 animate-pulse"}
                  ${relay === "TRIP" && "text-red-500"}
                `}>
                  {relay}
                </h2>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <p className="text-gray-400">
                  Current
                </p>

                <h2 className="text-cyan-400 text-4xl font-black mt-3">
                  {current} A
                </h2>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <p className="text-gray-400">
                  Temperature
                </p>

                <h2 className="text-orange-400 text-4xl font-black mt-3">
                  {temperature}°C
                </h2>
              </div>

              <div className="bg-black/30 rounded-3xl p-6 col-span-2">
                <p className="text-gray-400">
                  Circuit Breaker
                </p>

                <h2 className={`
                  text-4xl font-black mt-3
                  ${breaker === "CLOSED" && "text-green-400"}
                  ${breaker === "OPEN" && "text-red-500"}
                `}>
                  {breaker}
                </h2>
              </div>

            </div>
<div className="mt-8">

  <h3 className="text-cyan-400 font-bold mb-3">
    Event Log
  </h3>

  <div className="bg-black/30 rounded-2xl p-4 h-40 overflow-auto">

    {eventLog.map((log, index) => (

      <div
        key={index}
        className="
          text-sm
          text-green-300
          mb-2
          border-b border-white/10
          pb-1
        "
      >
        ▶ {log}
      </div>

    ))}

  </div>

</div>

<div className="mt-6">

  <div
    className={`
      p-4
      rounded-2xl
      text-center
      font-bold
      transition

      ${
        alarm
          ? "bg-red-500 text-white animate-pulse"
          : "bg-green-500/20 text-green-400"
      }
    `}
  >
    {alarm
      ? "⚠ PROTECTION ALARM ACTIVE"
      : "✓ SYSTEM NORMAL"}
  </div>

</div>
            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button
                onClick={overloadSimulation}
                className="
                  px-8 py-4 rounded-2xl
                  bg-yellow-500
                  hover:bg-yellow-400
                  font-bold
                  transition
                "
              >
                Overload
              </button>

              <button
                onClick={shortCircuitSimulation}
                className="
                  px-8 py-4 rounded-2xl
                  bg-red-600
                  hover:bg-red-500
                  font-bold
                  transition
                "
              >
                Short Circuit
              </button>

              <button
                onClick={resetSystem}
                className="
                  px-8 py-4 rounded-2xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  font-bold
                  transition
                "
              >
                Reset System
              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className={`
            glass rounded-[35px] p-8
            flex items-center justify-center
            relative overflow-hidden
            transition duration-500
            ${status === "TRIP" && "bg-red-500/10"}
          `}>

           <div className="relative z-10 flex flex-col items-center">

  <h3 className="text-xl font-bold text-cyan-400 mb-8">
    Single Line Diagram
    <div
  className="
    mb-8
    w-full
    bg-black/20
    rounded-2xl
    p-4
  "
>

  <h4 className="text-cyan-400 font-bold mb-3">
    Protection Sequence
  </h4>

  <div className="space-y-2 text-sm">

    <div>
      {protectionStep >= 1 ? "✅" : "⚪"} Fault Detection
    </div>

    <div>
      {protectionStep >= 2 ? "✅" : "⚪"} Relay Pickup
    </div>

    <div>
      {protectionStep >= 3 ? "✅" : "⚪"} Relay Trip
    </div>

    <div>
      {protectionStep >= 4 ? "✅" : "⚪"} Circuit Breaker Open
    </div>

    <div>
      {protectionStep >= 5 ? "✅" : "⚪"} Transformer Isolated
    </div>

  </div>

</div>
  </h3>

  {/* GRID */}
  <div className="text-white font-bold">
    GRID
  </div>

 <div className="relative h-12 w-1 bg-cyan-400 overflow-hidden">

  {breaker === "CLOSED" && (

   <motion.div
  className="
    absolute
    w-8 h-8
    rounded-full
    bg-cyan-300/70
    -left-3.5
    blur-[2px]
    shadow-[0_0_30px_#22d3ee]
  "
  animate={{
    y: [0, 40],
    scale: [0.7, 1.2, 0.7],
    opacity: [0.5, 1, 0.5]
  }}
  transition={{
    repeat: Infinity,
    duration: 1,
    ease: "linear"
  }}
/>

  )}

</div>

  {/* CT */}
  <div className="
    px-4 py-2
    rounded-xl
    bg-cyan-500/20
    border border-cyan-400
    font-bold
    text-cyan-300
  ">
    CT
  </div>

 <div className="relative h-12 w-1 bg-cyan-400 overflow-hidden">

  {breaker === "CLOSED" && (

    <motion.div
      className="
        absolute
        w-3 h-3
        rounded-full
        bg-cyan-300
        -left-1
      "
      animate={{
        y: [0, 40]
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear"
      }}
    />

  )}

</div>

  {/* CB */}

<div
  className={`
    px-6 py-3
    rounded-xl
    font-bold
    text-center
    transition-all duration-500

    ${
      breaker === "CLOSED"
        ? "bg-green-500/20 border border-green-400 text-green-300"
        : "bg-red-500/20 border border-red-400 text-red-300 animate-pulse"
    }
  `}
>
  <div>CB</div>

  <div className="text-[10px] mt-1">
    {breaker}
  </div>
</div>

<div className="relative h-12 w-1 bg-cyan-400">

  <div
  className={`
    relative
    h-12
    w-1
    transition-all duration-500

    ${
      breaker === "OPEN"
        ? "bg-red-500"
        : "bg-cyan-400"
    }
  `}
></div>
</div>

{fault && (

  <div
    className="
      text-5xl
      animate-pulse
      mb-2
    "
  >
    ⚡
  </div>

)}
  {/* TRAFO */}
  <div className={`
    px-8 py-6
    rounded-2xl
    font-bold
    transition

    ${status === "NORMAL" && "bg-cyan-500 text-black"}
    ${status === "OVERLOAD" && "bg-yellow-500 text-black"}
    ${status === "TRIP" &&
  "bg-red-500 text-white animate-pulse opacity-60"}
  `}>
    TRAFO
  </div>

 <div className="relative h-12 w-1 bg-cyan-400">

  <div
    className="
      absolute
      w-3 h-3
      rounded-full
      bg-cyan-300
      -left-1
      motion.div
    "
  />

</div>

{/* LOAD */}

<div className="relative h-12 w-1 bg-cyan-400">

  <div
    className="
      absolute
      w-3 h-3
      rounded-full
      bg-cyan-300
      -left-1
      animate-pulse
    "
  />

</div>

<div className="text-white font-bold">
  LOAD
</div>

</div>

          </div>

        </div>

      </section>

    </div>
  );
}