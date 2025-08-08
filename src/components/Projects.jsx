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

export default function Projects () {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            GitHub Projects
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Check out some of my open source work!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl shadow-md flex flex-col items-center p-6"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-16 h-16 object-contain rounded-full mb-4 border border-gray-200"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
