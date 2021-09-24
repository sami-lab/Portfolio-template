import React from "react";
import { Card, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

import Man from "../assets/man.jpg";
export default function AppBar() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="end"

        // alignItems="center"
        style={{
          paddingRight: !matchesSM && "8em",
          paddingTop: matchesSM ? "2em" : "2em",
          // border: "2px solid blue",
          display: "flex",
          // justifyContent: "flex-end"
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          style={{
            // border: "2px solid blue",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center"
          }}
        >
          <Card
            style={{
              boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
              //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: matchesSM ? "3em 1em" : "1.5em 2em",
              backgroundColor: "#F6F5FA",
              borderRadius: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "3em",
              paddingLeft: "3em"
            }}
          >
            {/* first card */}
            <Card
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "16%",
                // boxShadow: "9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
                boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? "3em 1em" : "0.2em 0",
                backgroundColor: "#F6F5FA",
                borderRadius: 20,
              }}
            >
              <Typography variant="body1">
                <Link to="/about" style={{ textDecoration: "none" }}>About</Link>
                {/* About */}
              </Typography>
            </Card>

            {/* second card */}
            <Card
              style={{
                cursor: "pointer",
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
                <Link to="/project" style={{ textDecoration: "none" }}>Project</Link>

              </Typography>
            </Card>

            {/* third card */}
            <Card
              style={{
                cursor: "pointer",
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
                <Link to="/skills" style={{ textDecoration: "none" }}>Skills</Link>
              </Typography>
            </Card>

          </Card>
        </Grid>
      </Grid>
    </Grid >
  );
}
