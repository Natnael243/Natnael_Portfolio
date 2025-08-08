import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import About from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import HeroSection from "./components/Hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen w-full relative bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <Timeline />
        </main>
      </div>
    </>
  );
}

export default App;
