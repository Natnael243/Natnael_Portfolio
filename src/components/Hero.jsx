import React, { useState } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const texts = [
    " \nFull Stack Developer.",
    " \nGraphics Designer.",
    " \nOTA Coordinator.",
    " \nIT Specialist.",
  ];
  const typingSpeed = 60;
  const pauseTime = 600; // reduced pause time
  const deleteSpeed = 40;

  React.useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentText = texts[textIndex];
      if (!isDeleting) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentText.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            type();
          }, pauseTime);
          return;
        }
      } else {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      timer = setTimeout(type, isDeleting ? deleteSpeed : typingSpeed);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <section className="pt-24 bg-gradient-to-b from-blue-950 via-blue-600 to-blue-500">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-10 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4 order-2 lg:order-1">
              <h1 className="text-3xl font-bold text-shadow-white sm:text-4xl xl:text-5xl whitespace-pre-line">
                I'm Natnael Zelalem {displayedText}
              </h1>
              <p className="mt-5 text-base font-medium leading-7 text-white/80">
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
                  title="Download CV"
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-blue-950 border border-transparent rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button"
                >
                  <span className="mr-2">Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="self-end lg:col-span-5 order-1 lg:order-2">
              <img
                className="w-full mx-auto"
                src="/assets/nhatty.png"
                alt="Natnael Zelalem"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
