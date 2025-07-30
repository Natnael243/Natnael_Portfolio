import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="min-h-screen w-full relative bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
