import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="min-h-screen w-full relative bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <Navbar />
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          doloribus eaque nobis debitis modi inventore saepe blanditiis
          recusandae eligendi cum. Cupiditate, doloremque sapiente et dolore
          ipsum qui harum obcaecati consectetur.
        </h1>
      </div>
    </>
  );
}

export default App;
