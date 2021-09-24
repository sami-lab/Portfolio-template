import React from "react";
import { Card, Grid, Typography } from "@mui/material";

import Man from "../assets/man.jpg";
export default function About() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item style={{ padding: "5em 3em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "5em 2em",
            backgroundColor: "#F6F5FA",
            borderRadius: 20,
          }}
        >
          {/* Main row */}
          <Grid container justifyContent="center" wrap="nowrap">
            {/* For image */}
            <Grid item>
              <img src={Man} />
            </Grid>
            {/* for Text */}
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="body2">Hello, I'm Jphnns</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "4.5em" }}>
                  <Typography variant="h4">Welcome to my World!</Typography>
                </Grid>
                <Grid item container justifyContent="center">
                  <Typography
                    variant="body2"
                    color="#2978B5"
                    style={{ width: "30%" }}
                  >
                    Adipisicing sit fugit ullam unde aliquid sequi Facilis
                    soluta facilis perspiciatis corporis nulla aspernatur. Autem
                    eligendi rerum delectus modi quisquam? Illo ut quasi nemo
                    ipsa cumque perspiciatis! Maiores minima consectetur.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
