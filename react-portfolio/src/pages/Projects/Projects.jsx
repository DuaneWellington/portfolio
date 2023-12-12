// PATH: 'src/pages/Projects/Projects.jsx'


import React, { useState, useEffect } from "react";
import useScrollToTop from "../../useScrollToTop";

function Projects(props) {
  useScrollToTop
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    try {
      const response = await fetch("./projects.json");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching Projects data: ", error);
    }
  };

  useEffect(() => {
    getProjectsData();
  
    const projectsSection = document.getElementById("ProjectsSection");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behaviour: "smooth",
      });
    }
  }, []);

  const loaded = () => {
    return projects.map((project) => (
      <div key={project.id}>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
  