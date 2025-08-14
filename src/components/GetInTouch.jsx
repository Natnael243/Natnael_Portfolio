import React from "react";
import Skills from "./skills.jsx";
const Form = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 px-6 py-16 bg-gradient-to-b from-black via-purple-900 to-black">
      
      {/* Form Section */}
      <div className="flex-1 max-w-lg bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 border-2 border-transparent p-10 rounded-2xl relative">
        <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-300 mb-6">
          Have a project or idea? Let’s make it happen!
        </p>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-400 font-semibold text-sm">
              How Can We Help You?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-2/5 py-3 px-5 bg-gray-800 text-gray-400 font-semibold rounded-lg border border-gray-700 hover:bg-white hover:text-gray-800 transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Side Text Section */}
      <div className="flex-1 max-w-md flex flex-col gap-4 text-left px-4">
        <h3 className="text-2xl font-bold text-lime-500 mb-2">Why Contact Us?</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          We love turning ideas into reality! Whether it’s a website, app, or animation, we’re here to help you bring your vision to life.
        </p>
        <Skills />
      </div>

    </div>
  );
};

export default Form;
