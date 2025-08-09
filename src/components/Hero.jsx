import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import nhatty from "/assets/nhatty.png";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer.",
      "Graphics Designer.",
      "OTA Coordinator.",
      "IT Specialist.",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="">
      <section className="pt-24 bg-gradient-to-b from-black via-blue-950 to-blue-600">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4 order-2 lg:order-1">
              <h1 className="text-center text-3xl font-bold text-white sm:text-4xl xl:text-4xl">
                Hey 👋 I am Natnael !<br />
                <span className="text-center text-3xl font-bold text-green-500 sm:text-4xl xl:text-4xl">
                  {text}
                  <Cursor cursorColor="green" />
                </span>
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-white/80">
                I create beautiful and functional web applications that provide
                an exceptional user experience. My passion for coding and design
                drives me to deliver high-quality solutions tailored to your
                needs.
              </p>
              <div className="relative inline-flex mt-9 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <a
                  href="/CV/Natnael-cv.pdf"
                  download
                  title="CV Download"
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3 order-3 py-4">
              <p className="text-xs font-bold tracking-widest text-white/80 uppercase">
                ⚡️ Latest projects
              </p>

              <div className="mt-6 space-y-6 lg:space-y-8">
                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <a href="#" title="">
                        Nib Tech Solution በቅርቡ ወደስራ የሚገባ በ React እና tailwind CSS
                        የተሰራ ድህረገጽ።
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <a href="#" title="">
                        How a visual artist redefines success in graphic design
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <a href="#" title="">
                        How a visual artist redefines success in graphic design
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="self-end lg:col-span-5 order-1">
              <img className="w-full mx-auto" src={nhatty} alt="Nhatty" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
