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
        <div className="mx-auto max-w-2xl lg:mx-100">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            GitHub Projects
          </h2>
          <p className="text-center mt-2 text-white/80">
            Check out some of my open source work!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="relative flex w-85 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
              <div className="p-6 pt-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
