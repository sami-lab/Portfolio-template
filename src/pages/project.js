import React from "react";
import { Typography, Grid, useMediaQuery, useTheme, Card } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./project.css";
export default function Project() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const projectsArr = [
    {
      name: "Project 1",
      tech: ["SASS", "TypeScript", "React"],
      gitUrl: "https://github.com",
    },
    {
      name: "Project 2",
      tech: ["SASS", "TypeScript", "React"],
      gitUrl: "https://github.com",
    },
    {
      name: "Project 3",
      tech: ["SASS", "TypeScript", "React"],
      gitUrl: "https://github.com",
    },
  ];
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ paddingTop: matchesSM ? "2em" : "5em" }}
      spacing={3}
    >
      <Grid item>
        <Typography
          variant="h3"
          style={{
            textTransform: "uppercase",
            color: "#444444",
            lineHeight: 1.2,
          }}
        >
          PROJECTS
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item xs={10}>
          <Grid container spacing={2}>
            {projectsArr.map((pro) => (
              <Grid item md={4} sm={6} xs={12} key={pro.name}>
                <Card
                  elevation={0}
                  style={{
                    boxShadow: "0 3px 3px 0 rgb(0 0 0 / 15%)",
                    padding: "2em",
                    cursor: "pointer",
                  }}
                  className="card"
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{ height: "15em" }}
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        style={{
                          textTransform: "uppercase",
                          color: "#444444",
                          lineHeight: 1.2,
                        }}
                      >
                        {pro.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <Grid container spacing={2}>
                            {pro.tech.map((t) => (
                              <Grid item key={t}>
                                <Typography
                                  variant="body1"
                                  style={{ cursor: "pointer" }}
                                >
                                  {" "}
                                  {t}
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                              <a
                                href="http://github.com"
                                style={{
                                  textDecoration: "none",

                                  color: "inherit",
                                }}
                              >
                                <GitHubIcon fontSize="large" />
                              </a>
                            </Grid>
                            <Grid item>
                              <a
                                href="http://github.com"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <LaunchIcon fontSize="large" />
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
        </Grid>
      </Grid>
    </Grid>
  );
}
