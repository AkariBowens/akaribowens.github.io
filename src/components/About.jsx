import React from "react";
import "./components.css";

function About() {
  const Skills = [
    "Node.js",
    "ReactJs",
    "HTML/CSS",
    "Adobe Suite",
    "JavaScript",
    "Git",
    "Figma",
    "REST API",
  ];
  return (
    <div className="about">
      <div className="about__intro">
        <h2 className="about__intro--name">Akari Bowens</h2>

        <p className="about__intro--paragraph">
          A highly motivated and detail-oriented front-end developer with over 5
          years of experience in HTML, CSS, and JavaScript. Strong ability to
          create responsive, user-friendly websites and applications.
          {/* Proven
          track record of working collaboratively with cross-functional teams
          and delivering projects on time.  */}
          Expertise in user experience and mobile-first design.
        </p>
      </div>
      <div className="about__skills">
        {Skills.map((skill) => (
          <p className="about__skills--item">{" " + skill + " "}</p>
        ))}
      </div>
      <div className="about__resume">{/* <ResumeForm /> */}</div>
    </div>
  );
}

export default About;
