import React from 'react';
import {
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  Button,
} from '@mui/material';
import CustomCard from './card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './project.css';
export default function Project() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const projectsArr = [
    {
      name: 'Project 1',
      tech: ['SASS', 'TypeScript', 'React'],
      gitUrl: 'https://github.com',
    },
    {
      name: 'Project 2',
      tech: ['SASS', 'TypeScript', 'React'],
      gitUrl: 'https://github.com',
    },
    {
      name: 'Project 3',
      tech: ['SASS', 'TypeScript', 'React'],
      gitUrl: 'https://github.com',
    },
    {
      name: 'Project 4',
      tech: ['SASS', 'TypeScript', 'React'],
      gitUrl: 'https://github.com',
    },
  ];
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
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  {projectsArr.map((pro) => (
                    <Grid item md={6} sm={6} xs={12} key={pro.name}>
                      <Card
                        elevation={0}
                        style={{
                          boxShadow: '0 3px 3px 0 rgb(0 0 0 / 15%)',
                          padding: '2em',
                          cursor: 'pointer',
                        }}
                        className="card"
                      >
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          style={{ height: '5em' }}
                          spacing={2}
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              style={{
                                textTransform: 'uppercase',
                                color: '#19192E',
                                lineHeight: 1.2,
                              }}
                            >
                              {pro.name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              style={{
                                color: '#859FB4',
                                lineHeight: 1.2,
                              }}
                            >
                              Created with
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: '200px',
                    border: '1px solid gray',
                    opacity: 0.3,
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h4">Project!</Typography>
                  </Grid>
                  <Grid item container>
                    <Typography
                      variant="body2"
                      color="#2978B5"
                      style={{
                        marginTop: '2em',
                        width: '950%',
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
            <Grid
              container
              justifyContent="center"
              style={{ marginTop: '2em' }}
            >
              <Button
                style={{
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: 150,
                  height: 50,
                  boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
                }}
              >
                <a href="https:github.com" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: '1em',
                      color: 'black',
                      textTransform: 'capitalize',
                    }}
                  >
                    Github
                  </Typography>
                </a>
              </Button>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
