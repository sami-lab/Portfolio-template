import React from 'react';
import { Card, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import Man from '../assets/man.jpg';
import CustomCard from './card';
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
        style={{ paddingTop: matchesSM ? '2em' : '3em' }}
      >
        <Grid item xs={10}>
          <CustomCard>
            {/* Main row */}
            <Grid
              container
              justifyContent="center"
              wrap={matchesSM ? 'wrap' : 'nowrap'}
            >
              {/* For image */}
              <Grid item>
                <img src={Man} />
              </Grid>
              {/* for Text */}
              <Grid item>
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <Typography variant="body1">Hello, I'm Jphnns</Typography>
                  </Grid>
                  <Grid item style={{ marginLeft: '4.5em' }}>
                    <Typography variant="h4">Welcome to my World!</Typography>
                  </Grid>
                  <Grid item container justifyContent="center">
                    <Typography
                      variant="body2"
                      color="#2978B5"
                      style={{
                        width: matchesSM ? '80%' : '50%',
                        marginTop: '2em',
                      }}
                    >
                      Adipisicing sit fugit ullam unde aliquid sequi Facilis
                      soluta facilis perspiciatis corporis nulla aspernatur.
                      Autem eligendi rerum delectus modi quisquam? Illo ut quasi
                      nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
