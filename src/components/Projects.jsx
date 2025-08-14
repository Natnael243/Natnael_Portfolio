import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "SWAJ Trading Web development",
    image: "assets/project/image.png",
    description:
      "A modern company website for SWAJ Trading PLC, showcasing their services and products. It features a responsive design and is built with HTML5 and Bootstrap.",
    techStack: "React, Tailwind CSS",
    github: "https://github.com/yourusername/Natnael_Portfolio",
    live: "https://swajtrading.com/",
  },
  {
    title: "Ethiosocial workers website",
    image: "assets/project/image1.png",
    description:
      "A community-driven platform for Ethiosocial workers to connect and share resources. and has a blog and registration with admin panel to manage users registration.",
    techStack: "JavaScript, API",
    github: "https://github.com/yourusername/weather-app",
    live: "https://ethiosocialworker.org/",
  },
  {
    title: "portfolio website",
    image: "assets/project/image2.png",
    description:
      "A personal portfolio website to showcase my skills and projects. It includes a project section and a contact form. It is built with React and Tailwind CSS. It is responsive and has a modern design.",
    techStack: "Node.js, MongoDB, React",
    github: "https://github.com/yourusername/blog-platform",
    live: "https://natnael243.github.io/Natnael_Portfolio/",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-4   bg-gradient-to-b  from-black via-purple-900 to-indigo-700">
      <div className="pb-12 mx-auto max-w-2xl lg:mx-100">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          My Projects
        </h2>
        <p className="text-center mt-2 text-white/80">
          Here are some of the projects I've worked on recently. Click on the
          cards to learn more about each project.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
