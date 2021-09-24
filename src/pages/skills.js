import { Typography, Grid } from "@mui/material";
import React from "react";
import "./skill.css";
export default function Skills() {
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
    >
      <Typography
        variant="subtitle1"
        style={{
          textTransform: "uppercase",
          color: "#555",
        }}
      >
        SKILLS
      </Typography>
      <ul class="skills__list">
        {skillsArr.map((s) => (
          <li class="skills__list-item btn btn--plain" key={s}>
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
  );
}
