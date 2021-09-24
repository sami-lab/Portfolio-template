import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import About from "./pages/about";
import { Grid, Paper } from "@mui/material";
import logo from "./assets/ed.png"
import man from "./assets/man.png"
import map from "./assets/man.png"
import Skills from "./pages/skills";
import Project from "./pages/project"

export default function App() {
  return (
    <Grid container style={{ backgroundColor: "#F6F5FA", minHeight: "100vh" }}>
      {/* left bar */}
      <Grid item lg={3}>
        {/* logo */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={logo} />
        </div>


        {/* left paper */}
        <Paper style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

          {/* first image div */}
          <Paper>
            <img src={man} style={{ width: "90px", height: "90px" }} />
          </Paper>

          {/* second image Paper */}
          <Paper>
            <img src={map} style={{ width: "90px", height: "90px" }} />
          </Paper>

        </Paper>

      </Grid>

      {/* right bar */}
      <Grid item lg={9}>

        <About />
        <Skills />
        <Project />
      </Grid>

    </Grid>
  )
}
