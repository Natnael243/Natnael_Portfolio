import React from "react";

const listNav = ["Home", "About", "Services", "projects", "Blog"];

const Navbar = () => {
  return (
    <div className="fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md opacity-90 text-white shadow-lg z-10">
      <ul className="flex gap-8">
        {listNav.map((item) => (
          <li className="relative cursor-pointer group">
            {item}
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-blue-500 to-green-400  py-1 px-5 rounded-4xl shadow-2xl text-white texxt-lg font-semibold  hover:to-blue-600  hover:from-green-500 hover:shadow-fuchsia-950 shadow-blue-600">
        Contact
      </button>
    </div>
  );
};

export default Navbar;
