import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import AppRoutes from "./routes/AppRoutes";
import BackgroundMusic from "./components/BackgroundMusic";
import LoadingScreen from "./components/LoadingScreen";
import useClickSound from "./hooks/useClickSound";

function App() {

  const [loading, setLoading] = useState(true);
  !sessionStorage.getItem("appLaded")

  useClickSound();
useEffect(() => {

  if (!loading) return;

  const timer = setTimeout(() => {

    sessionStorage.setItem(
      "appLoaded",
      "true"
    );

    setLoading(false);

  }, 3000);

  return () => clearTimeout(timer);

}, [loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <BackgroundMusic />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;