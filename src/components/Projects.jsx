const projects = [
  {
    id: 1,
    name: "React Portfolio",
    description:
      "A modern portfolio website built with React and Tailwind CSS.",
    image:
      "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    github: "https://github.com/yourusername/react-portfolio",
  },
  {
    id: 2,
    name: "Weather App",
    description: "A simple weather app using OpenWeatherMap API.",
    image:
      "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    id: 3,
    name: "Blog Platform",
    description: "A full-stack blog platform with authentication and CRUD.",
    image:
      "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
    github: "https://github.com/yourusername/blog-platform",
  },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-blue-600 via-blue-950 to-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pt-3 mx-auto max-w-2xl lg:mx-100">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            GitHub Projects
          </h2>
          <p className="text-center mt-2 text-white/80">
            Check out some of my open source work!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative flex w-85 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {project.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {project.description}
                </p>
              </div>
              <div className="p-6 pt-0 flex gap-2 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View
                </a>
                <a
                  href={project.site || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
