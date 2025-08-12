import React, { useState, useEffect } from "react";

// Menu items with matching section IDs
const listNav = [
  { name: "Home", id: "hero" },
  { name: "Projects", id: "projects" },
  { name: "Timeline", id: "timeline" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed bg-black flex justify-between items-center py-3 px-6 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md opacity-90 text-white shadow-lg z-50 w-[90vw] max-w-5xl">
        {/* Logo */}
        <div className="font-bold text-lg">Natnael</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {listNav.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer group text-white text-base"
            >
              <a href={`#${item.id}`}>{item.name}</a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-blue-500 to-green-400 py-1 px-5 rounded-4xl shadow-2xl text-white text-lg font-semibold hover:to-blue-600 hover:from-green-500 hover:shadow-fuchsia-950 shadow-blue-600"
        >
          Contact
        </a>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 px-4 transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "opacity-100 scale-100 z-[9999]"
            : "opacity-0 scale-95 pointer-events-none z-[-1]"
        }`}
      >
        {/* Mobile Nav Items */}
        <ul className="flex flex-col gap-5 text-white text-lg text-center">
          {listNav.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer group"
              onClick={() => setMenuOpen(false)}
            >
              <a href={`#${item.id}`}>{item.name}</a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-gradient-to-r from-blue-500 to-green-400 py-2 px-6 rounded-full shadow-2xl text-white text-base font-semibold hover:to-blue-600 hover:from-green-500 hover:shadow-fuchsia-950 shadow-blue-600"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
