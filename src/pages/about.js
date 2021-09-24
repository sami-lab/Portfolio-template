import React from "react";
import { Card, Grid, Typography } from "@mui/material";
export default function About() {
  return (
    <Grid direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "5em 2em",
          }}
        >
          {/* Main row */}
          <Grid container justifyContent="center">
            {/* For image */}
            <Grid item></Grid>
            {/* for Text */}
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="body2">Hello, I'm Jphnns</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" align="center">
                    Welcome to my World!
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="#2978B5" align="right">
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
