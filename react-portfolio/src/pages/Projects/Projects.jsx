// PATH: 'src/pages/Projects/Projects.jsx'

import React, { useState, useEffect } from "react";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import { FaGithub, FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects(props) {
  useScrollToTop();
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
  }, []);
  
const renderProjectCards = () => {
  return projects.map((project) => (
    <Link key={project.id} to={`projects/${project.id}`} className="project-card-link">
      <div className="project-card">
        <img src={project.image} alt={project.name} className="project-image" />
        <div className="project-details">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="buttons">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <button className="live-button">
                <FaServer className="icon" /> Live Link
              </button>
            </a>
            <a href={project.git} target="_blank" rel="noopener noreferrer">
            <button className="github-button">
                <FaGithub className="icon" /> Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </Link>
  ));
};

  return projects ? <div className="project-container">{renderProjectCards()}</div> : <h1>Loading...</h1>;
}

export default Projects;
  