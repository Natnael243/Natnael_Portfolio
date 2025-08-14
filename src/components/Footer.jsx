import React from "react";
import GetInTouch from "./GetInTouch.jsx";

export default function App() {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900 to-indigo-700">
      <div className="container pt-9">
        <div className="flex justify-center">
          <GetInTouch />
        </div>
        {/* <!--Copyright section--> */}
        <div className="py-24 text-center text-neutral-500 dark:text-neutral-400">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tw-elements.com/"
          >
            TW Elements
          </a>
        </div>
      </div>
    </footer>
  );
}
