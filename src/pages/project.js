import React from "react";
import { Typography, Grid, useMediaQuery, useTheme, Card } from "@mui/material";

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
      <Grid item></Grid>
      <Grid item container justifyContent="center">
        <Grid item xs={10}>
          <Grid container>
            {projectsArr.map((pro) => (
              <Grid item md={4} sm={6} xs={12} key={pro.name}>
                <Card
                  style={{
                    boxShadow: "0 3px 3px 0 rgb(0 0 0 / 15%)",
                    padding: "2em",
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{ height: "10em" }}
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
                          {pro.tech.map((t) => (
                            <Typography variant="body1" key={t}>
                              {" "}
                              {t}
                            </Typography>
                          ))}
                        </Grid>
                        <Grid item></Grid>
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
