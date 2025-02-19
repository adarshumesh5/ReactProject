import React from 'react';
import './Section.css';

const WorkExperience = () => {
  return (
    <section className="section work-experience">
      <h2>Work Experience</h2>
      <div className="section-content">
        <div className="item">
          <h3>Company Name</h3>
          <p>Position</p>
          <p>Duration</p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;