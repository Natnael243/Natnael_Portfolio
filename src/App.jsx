import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from "./components/Timeline.jsx";
import Projects from "./components/Projects.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
  );
}

export default App;
