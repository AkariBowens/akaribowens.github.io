import React from "react";

function Projects() {
  function PortfolioProject(name, image, deployedLink, gHub, desc) {
    this.name = name;
    this.image = image;
    this.link = deployedLink;
    this.gHub = gHub;
    this.desc = desc;
  }

  const quickTip = new PortfolioProject(
    "QuickTip",
    " ",
    "https://akaribowens.github.io/QuickTip/",
    "https://github.com/AkariBowens/QuickTip",
    "This is an app that allows users to quickly calculate tip. I built it using the react framework and deployed it using Github Pages"
  );

  const ProjectsArr = [
    // {
    //   name: "QuickTip",
    //   image: " ",
    //   link: "https://akaribowens.github.io/QuickTip/",
    //   gHub: "https://github.com/AkariBowens/QuickTip",
    //   description:
    //     "This is an app that allows users to quickly calculate tip. I built it using the react framework and deployed it using Github Pages",
    // },
    // quickTip,
  ];

  return (
    <div className="projects">
      {/* {ProjectsArr.map((project) => {
        <h2>{project.name}</h2>;
        <button>
          <a href={project.gHub}>Github</a>
        </button>;
        <button>
          <a href={project.link}>Live demo</a>
        </button>;
        <p>{project.desc}</p>;
      })} */}
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="quickTip projects__card">
          <h2>QuickTip</h2>
          <img src="src\assets\QuickTip.png" width="300px" />

          <p>
            This is an app that allows users to quickly calculate tip. I built
            it using the react framework and deployed it using Github Pages
          </p>
          <div className="projects__card--links">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className="quickTip projects__card">
          <h2>QuickTip</h2>
          <img src="src\assets\QuickTip.png" width="300px" />

          <p>
            This is an app that allows users to quickly calculate tip. I built
            it using the react framework and deployed it using Github Pages
          </p>
          <div className="projects__card--links">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className="quickTip projects__card">
          <h2>QuickTip</h2>
          <img src="src\assets\QuickTip.png" width="300px" />

          <p>
            This is an app that allows users to quickly calculate tip. I built
            it using the react framework and deployed it using Github Pages
          </p>
          <div className="projects__card--links">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
