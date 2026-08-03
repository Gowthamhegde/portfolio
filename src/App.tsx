import { useEffect } from "react";
import CinematicSequence from "./components/CinematicSequence";
import LaptopOS from "./components/LaptopOS";

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <CinematicSequence>
      <LaptopOS />
    </CinematicSequence>
  );
}
