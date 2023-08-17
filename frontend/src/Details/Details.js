import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { MdPhone, MdPlace } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Details.css';

const Details = () => {
  return (
    <div className="root">
      <Grid container spacing={3} className="grid">
        <Grid item xs={12} sm={6} md={3} className="info">
          <IconButton className="icon">
            <MdPhone size={24} />
          </IconButton>
          <Typography>052-693-3301</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="info">
          <IconButton className="icon">
            <MdPlace size={24} />
          </IconButton>
          <Typography>Bee'r Sheva</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="info">
          <IconButton className="icon">
            <FaGithub size={24} />
          </IconButton>
          <Typography>
            <a href="https://github.com/ronmoyal" target="_blank" rel="noopener noreferrer">
              My Github
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="info">
          <IconButton className="icon">
            <FaLinkedin size={24} />
          </IconButton>
          <Typography>
            <a href="https://www.linkedin.com/in/ron-moyal-361b07247/?originalSubdomain=il" target="_blank" rel="noopener noreferrer">
              My LinkedIn
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
