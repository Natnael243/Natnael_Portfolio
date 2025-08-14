import React from "react";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import Timeline from "../components/Timeline.jsx";
import Footer from "../components/Footer.jsx";
import GetInTouch from "../components/GetInTouch.jsx";

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
      <section id="contact">
        <GetInTouch />
      </section>
      <section id="timeline">
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
