import React from "react";
import { Typography, Grid, useMediaQuery, useTheme, Card } from "@mui/material";

export default function Project() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
            <Grid item md={4} sm={6} xs={12}>
              <Card></Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
