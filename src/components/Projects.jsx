import React from 'react';
import Card from './Card';

const projects = [
  {
    title: 'React Portfolio',
    image: 'assets/project/image.png',
    description: 'A modern portfolio website built with React and Tailwind CSS.',
    techStack: 'React, Tailwind CSS',
    github: 'https://github.com/yourusername/react-portfolio',
    live: 'https://portfolio.netlify.app',
  },
  {
    title: 'Weather App',
    image: 'assets/project/image1.png',
    description: 'A simple weather app using OpenWeatherMap API.',
    techStack: 'JavaScript, API',
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://weather.netlify.app',
  },
  {
    title: 'Blog Platform',
    image: 'assets/project/image2.png',
    description: 'A full-stack blog platform with authentication and CRUD.',
    techStack: 'Node.js, MongoDB, React',
    github: 'https://github.com/yourusername/blog-platform',
    live: 'https://blog.netlify.app',
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-4  bg-gradient-to-b from-blue-600 via-blue-950 to-black">
      <div className="pb-12 mx-auto max-w-2xl lg:mx-100">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          My Journey
        </h2>
        <p className="text-center mt-2 text-white/80">
          A timeline of my professional and educational experiences.
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
