import React from 'react';
import './Section.css';
import { Typography, Grid2 } from '@mui/material';

const Education = () => {
  return (
    <section className="section education">
      <Typography variant='h5' align='left'><b>Education</b></Typography>
      <div className="section-content">
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <Typography variant='h6' align='left'><b>California State University, Northridge</b></Typography>
            <Typography variant='body1' align='left'>Master of Science - Engineering Management</Typography>
            <Typography variant='body2' align='left'>Fall 2023 - Ongoing</Typography>
            <Typography variant='body2' align='left'><b>CGPA:</b> 3.43/4</Typography>
            <Typography variant='body2' align='left'><b>Coursework:</b> Product Design, Leadership of Engineering Professionals, Operations Management, Lean Manufacturing, Decision Tools, Tech Entrepreneurship, Data Analytics, Data Visualization, Engineering Economics, Project Management</Typography>
          </Grid2>
          <Grid2 item xs={12}>
            <Typography variant='h6' align='left'><b>CMR Institute of Technology</b></Typography>
            <Typography variant='body1' align='left'>Bachelor of Engineering in Electronics and Communication</Typography>
            <Typography variant='body2' align='left'>Aug 2016 - Aug 2020</Typography>
            <Typography variant='body2' align='left'><b>CGPA:</b> 6.71/10</Typography>
            <Typography variant='body2' align='left'><b>Coursework:</b> Network Theory, Programming in C, C++, and Java, Digital Signal Processing, Control Systems</Typography>
          </Grid2>
        </Grid2>
      </div>
    </section>
  );
};

export default Education;