import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";
import Certifications from "./components/Certifications";



export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container-full"><Hero /></div>
        </section>

        <section className="section" id="skills">
          <div className="container-full">
            <h2 className="section-title">Skills</h2>
            <Skills />
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container-full">
            <h2 className="section-title">Projects</h2>
            <Projects />
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container-full fade-up">
            <h2 className="section-title">Certifications</h2>
            <Certifications />
          </div>
        </section>



        <section className="section" id="resume">
          <div className="container-full">
            <h2 className="section-title">Resume</h2>
            <ResumeSection />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container-full">
            <h2 className="section-title">Contact</h2>
            <Contact />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
