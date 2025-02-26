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
                <Typography variant='body2' align='left'>Gained hands-on experience in full-stack development, focusing on front-end frameworks (ReactJS) and database management (PostgreSQL).</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Developed and tested software components, contributing to efficient feature rollouts and enhancing application stability by resolving 300+ code-related issues, increasing system reliability by 20%.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Participated in daily stand-ups and Agile ceremonies, fostering team collaboration and project visibility, while serving as Scrum Master and enhancing team productivity by 40%.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Improved user engagement by 30% through UI/UX enhancements and optimized API performance, leading to a seamless user experience.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Coordinated with cross-functional teams to ensure smooth project execution and alignment with business goals, assisting in defining technical architecture and best practices.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Designed and developed front-end and back-end integration using React Redux and Java Spring Boot, reducing development time by 20%.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Optimized application performance using Apache JMeter, achieving a throughput of 5,000 concurrent users per second with an error rate below 1%</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Implemented Agile methodologies and refined JIRA stories, improving project tracking and bug resolution.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Spearheaded the development of a weather application using ReactJS and API integrations, improving data accessibility.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Conducted unit, integration, sub-system, and end-to-end testing, ensuring high-quality software delivery.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Collaborated with the Product Manager to shape the product roadmap, translating technical concepts into strategic insights.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Worked alongside accessibility teams to implement multilingual support, expanding reach to 60+ languages and increasing engagement by 60%.
                </Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Led a team in developing scalable web applications, integrating front-end and back-end technologies for optimal performance.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Earned the Eminence Award (Q3 2022) for excellence in software development, recognizing outstanding contributions to project success.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Refactored legacy codebases, improving maintainability and reducing technical debt by 25%, ensuring long-term project sustainability.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Built and optimized RESTful APIs to improve backend performance and maintainability, resulting in a 40% reduction in API response times through caching and request batching.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Led Scrum ceremonies, facilitating Sprint Planning, Daily Standups, and Retrospectives, while monitoring team progress and sprint metrics using Jira and Confluence.</Typography>
              </li>
              <li>
                <Typography variant='body2' align='left'>Integrated third-party APIs and services to enhance application functionality and scalability, contributing to a more robust software ecosystem.</Typography>
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