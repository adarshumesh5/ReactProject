import React from 'react';
import './Section.css';

const Projects = () => {
  return (
    <section className="section projects">
      <h2>Projects</h2>
      <div className="section-content">
        <div className="item">
          <h3>Project Name</h3>
          <p>Description</p>
          <p>Technologies Used</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;