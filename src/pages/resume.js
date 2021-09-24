import React from 'react';
import { Card, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import Man from '../assets/man.jpg';
export default function About() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: matchesSM ? '2em' : '5em' }}
      >
        <Grid item xs={10}>
          <Card
            style={{
              boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
              //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: matchesSM ? '3em 1em' : '6em 2em',
              backgroundColor: '#F6F5FA',
              borderRadius: 20,
            }}
          >
            {/* Main row */}
            <Grid
              container
              justifyContent="center"
              wrap={matchesSM ? 'wrap' : 'nowrap'}
            >
              {/* For image */}
              <Grid item xs={6}></Grid>
              {/* for Text */}
              <Grid item xs={6}></Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
