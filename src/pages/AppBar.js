import React from "react";
import { Card, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

import Man from "../assets/man.jpg";
export default function AppBar() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: matchesSM ? "2em" : "2em" }}
      >
        <Grid item xs={10} md={8}>
          <Card
            style={{
              boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
              //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: matchesSM ? "3em 1em" : "1.5em 2em",
              backgroundColor: "#F6F5FA",
              borderRadius: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {/* first card */}
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "16%",
                boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? "3em 1em" : "0.2em 0",
                backgroundColor: "#F6F5FA",
                borderRadius: 20,
              }}
            >
              <Typography variant="body1">
                About
              </Typography>
            </Card>

            {/* second card */}
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "16%",
                boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? "3em 1em" : "0.2em 0",
                backgroundColor: "#F6F5FA",
                borderRadius: 20,
              }}
            >
              <Typography>
                Project
              </Typography>
            </Card>

            {/* third card */}
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "16%",
                boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? "3em 1em" : "0.2em 0",
                backgroundColor: "#F6F5FA",
                borderRadius: 20,
              }}
            >
              <Typography>
                Skills
              </Typography>
            </Card>

          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
