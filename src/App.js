import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import About from "./pages/about";
import { Grid, Paper, Button, Typography } from "@mui/material";
import Skills from "./pages/skills";
import Project from "./pages/project"
import AppBar from "./pages/AppBar"

import profile from "./assets/profile.jpg"
import logo from "./assets/ed.png"
import map from "./assets/map.png"
import hand from "./assets/hand.gif"
import location from "./assets/location.jpg"
import book from "./assets/book.png"

export default function App() {
  return (
    <Grid container style={{ backgroundColor: "#F6F5FA", minHeight: "100vh" }}>
      {/* left bar */}
      <Grid item lg={3}>
        {/* logo */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={logo} />
        </div>


        {/* left div */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

          <Paper
            elevation={0}
            style={{
              borderRadius: 20,
              paddingBottom: "1em",
              boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
              //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              width: "50%",
              marginTop: "2em",
              backgroundColor: "#F6F5FA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >

            {/* first image div */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1em 0px",
                overflow: "hidden",
              }}
            >
              <span>
                <img
                  src={hand}
                  style={{
                    // border: "3px solid white",
                    // borderRadius: 20,
                    width: "50px",
                    height: "50px"
                  }}
                />
              </span>
              <img
                src={profile}
                style={{
                  border: "3px solid white",
                  borderRadius: 20,
                  width: "100px",
                  height: "85px"
                }}
              />

            </div>

            {/* second image div */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                margin: "1em 0px",
                overflow: "hidden",
              }}
            >
              <span>
                <img
                  src={location}
                  style={{
                    // border: "3px solid white",
                    // borderRadius: 20,
                    width: "50px",
                    height: "50px"
                  }}
                />
              </span>
              <img
                src={map}
                style={{
                  border: "3px solid white",
                  borderRadius: 20,
                  width: "100px",
                  height: "85px"
                }}
              />
            </div>

            {/* third image div */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                margin: "1em 0px",
                overflow: "hidden",
              }}
            >
              <span>
                <img
                  src={book}
                  style={{
                    // border: "3px solid white",
                    // borderRadius: 20,
                    width: "30px",
                    height: "30px",
                    marginTop: "1em"
                  }}
                />
              </span>

              <div
                style={{
                  // border: "3px solid white",
                  backgroundColor: "#EDF2F8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  flexDirection: "column",
                  width: "120px",
                  height: "70px"
                }}
              >
                <Typography variant="body1">
                  hello
                </Typography>

                <Typography variant="body1">
                  icon here
                  Software Enginer
                </Typography>

              </div>

            </div>

            {/* fourth image div */}
            <div style={{
              margin: "1em 0px",
              borderRadius: 20,
              overflow: "hidden",
              // border: "3px solid white",
              backgroundColor: "#EDF2F8",
              width: "130px",
              height: "85px"
            }}
            >
              {/* <img src={map} style={{ width: "100px", height: "85px" }} /> */}

            </div>

            {/* bottom button */}
            <div style={{
              marginTop: "1em",
              // borderRadius: 20,
              // overflow: "hidden",
              // border: "3px solid white"
            }}
            >
              <Button style={{ backgroundColor: "white" }}>
                <Typography variant="body1">
                  View Resume
                </Typography>
              </Button>
            </div>

          </Paper>

        </div>

      </Grid>

      {/* right bar */}
      <Grid item lg={9}>
        <AppBar />
        <About />
        <Skills />
        <Project />
      </Grid>

    </Grid>
  )
}
