import React from 'react';
import './Section.css';
import { Typography, Grid2 } from '@mui/material';

const WorkExperience = () => {
  return (
    <section className="section WorkExperience">
      <Typography variant='h5' align='left'><b>Work Experience</b></Typography>
      <div >
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <Typography variant='h6' align='left'><b>GlobalLogic India Private Limited</b></Typography>
            <Typography variant='body1' align='left'>Senior Software Engineer</Typography>
            <Typography variant='body2' align='left'>Dec 2020 - July 2023</Typography>
            <Typography variant='body2' align='left'><b>Key Responsibilities:</b></Typography>
            <ul>
              <li>
                <Typography variant='body2' align='left'>Developed modular, user-interactive web applications using React.js, Node.js, and Java Spring Boot Microservices.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Built and optimized RESTful APIs to improve backend performance and maintainability.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Led Scrum ceremonies as Scrum Master, facilitating Sprint Planning, Daily Standups, and Retrospectives.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Collaborated with Product Managers and cross-functional teams to define system requirements and align development with business goals.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Refactored legacy codebases, improving maintainability and reducing technical debt by 25%.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Developed comprehensive unit, integration, regression, and smoke tests utilizing Jest, Mocha, JUnit, and Cypress, resulting in an impressive 95% test coverage.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Executed performance testing with Apache JMeter to validate the application's capability to support over 5,000 concurrent users.</Typography>
              </li>
            </ul>
          </Grid2>
          <Grid2 item xs={12}>
            <Typography variant='h6' align='left'><b>IFB Automotive Private Limited</b></Typography>
            <Typography variant='body1' align='left'>Intern</Typography>
            <Typography variant='body2' align='left'>Jan 2020 - Feb 2020</Typography>
            <Typography variant='body2' align='left'><b>Key Responsibilities:</b></Typography>
            <ul>
              <li>
                <Typography variant='body2' align='left'>Contributed to the analysis of Network attacks and created comprehensive documentation.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Identified and reported vulnerabilities by performing random checks on systems.</Typography>
              </li>
            </ul>
          </Grid2>
        </Grid2>
      </div>
    </section>
  );
};

export default WorkExperience;