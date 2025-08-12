import React from "react";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import Timeline from "../components/Timeline.jsx";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
    </>
  );
};

export default LandingPage;
