import React from 'react';
import {
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  Button,
  Divider,
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
          <CustomCard style={{ padding: matchesSM ? '1em' : '2em 4em' }}>
            <Grid container direction="column" spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="h4">Project!</Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item xs={6}>
                  <Divider />
                </Grid>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item xs={10}>
                  <Typography
                    variant="body2"
                    color="#2978B5"
                    style={{
                      marginTop: '0.6em',
                    }}
                    align="center"
                  >
                    Adipisicing sit fugit ullam unde aliquid sequi Facilis
                    soluta facilis
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                {projectsArr.map((pro) => (
                  <Grid item md={4} sm={6} xs={12} key={pro.name}>
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
                        alignItems="center"
                        justifyContent="space-between"
                        style={{ height: '10em' }}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            style={{
                              textTransform: 'uppercase',
                              color: '#444444',
                              lineHeight: 1.2,
                            }}
                          >
                            {pro.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container direction="column" spacing={2}>
                            <Grid item>
                              <Grid
                                container
                                spacing={2}
                                justifyContent="center"
                              >
                                {pro.tech.map((t) => (
                                  <Grid item key={t}>
                                    <Typography
                                      variant="body2"
                                      style={{ cursor: 'pointer' }}
                                    >
                                      {' '}
                                      {t}
                                    </Typography>
                                  </Grid>
                                ))}
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                justifyContent="center"
                                spacing={2}
                              >
                                <Grid item>
                                  <a
                                    href="http://github.com"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'inherit',
                                    }}
                                  >
                                    <GitHubIcon
                                      fontSize="large"
                                      sx={{
                                        transition:
                                          'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        '&:hover': {
                                          color: '#42B9FC',
                                          borderBottom: '3px solid #42B9FC',
                                        },
                                      }}
                                    />
                                  </a>
                                </Grid>
                                <Grid item>
                                  <a
                                    href="http://github.com"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'inherit',
                                    }}
                                  >
                                    <LaunchIcon
                                      fontSize="large"
                                      sx={{
                                        transition:
                                          'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        '&:hover': {
                                          color: '#42B9FC',
                                          borderBottom: '3px solid #42B9FC',
                                        },
                                      }}
                                    />
                                  </a>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
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
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
