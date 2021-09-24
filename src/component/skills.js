import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "./skill.css";
export default function Skills() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  let skillsArr = [
    "html",
    "css",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "SASS",
    "Material UI",
    "Git",
    "CI/CD",
    "Jest",
    "Enzyme",
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
          SKILLS
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item xs={6}>
          <ul
            className="skills__list"
            style={{ padding: matchesSM ? 0 : "0.8em 1.4em" }}
          >
            {skillsArr.map((s) => (
              <li className="skills__list-item btn btn--plain" key={s}>
                <Typography
                  variant="subtitle1"
                  style={{
                    textTransform: "uppercase",
                    color: "#555",
                  }}
                >
                  {s}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}
