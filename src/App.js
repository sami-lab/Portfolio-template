import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import About from "./pages/about";
import {
  Grid,
  Paper,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Skills from "./pages/skills";
import Project from "./pages/project";
import AppBar from "./pages/AppBar";

import profile from "./assets/profile.jpg";
import logo from "./assets/ed.png";
import map from "./assets/map.png";
import hand from "./assets/hand.gif";
import location from "./assets/location.jpg";
import book from "./assets/book.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function App() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container style={{ backgroundColor: "#F6F5FA", minHeight: "100vh" }}>
      {/* left bar */}
      <Grid item lg={3} xs={12}>
        <Grid
          container
          direction={"column"}
          alignItems={matchesSM ? "center" : undefined}
        >
          {/* logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} />
          </div>

          {/* left div */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Grid
              container
              direction={matchesSM ? "row" : "column"}
              elevation={0}
              style={{
                borderRadius: 20,
                paddingBottom: "1em",
                boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: matchesSM ? "90%" : "50%",
                marginTop: "2em",
                backgroundColor: "#F6F5FA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Grid item>
                {" "}
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
                        height: "50px",
                      }}
                    />
                  </span>
                  <img
                    src={profile}
                    style={{
                      border: "3px solid white",
                      borderRadius: 20,
                      width: "100px",
                      height: "85px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item>
                {" "}
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
                        height: "50px",
                      }}
                    />
                  </span>
                  <img
                    src={map}
                    style={{
                      border: "3px solid white",
                      borderRadius: 20,
                      width: "100px",
                      height: "85px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item>
                {" "}
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
                        marginTop: "1em",
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
                      height: "70px",
                    }}
                  >
                    <Typography variant="body1">hello</Typography>

                    <Typography variant="body1">
                      icon here Software Enginer
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item>
                {/* fourth image div */}
                <div
                  style={{
                    margin: "1em 0px",
                    borderRadius: 20,
                    overflow: "hidden",
                    // border: "3px solid white",
                    backgroundColor: "#EDF2F8",
                    width: "130px",
                    height: "85px",
                  }}
                >
                  {/* <img src={map} style={{ width: "100px", height: "85px" }} /> */}
                </div>{" "}
              </Grid>
              <Grid item>
                {" "}
                {/* bottom button */}
                <div
                  style={{
                    marginTop: "1em",
                    // borderRadius: 20,
                    // overflow: "hidden",
                    // border: "3px solid white"
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "white",
                      border: "1px solid gray",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "0.8em",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      View Resume
                    </Typography>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* right bar */}
      <Grid
        item
        lg={9}
      >

        <AppBar />

        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/" exact>
              <Redirect
                to={{
                  pathname: "/about",
                  // state: { from: location }
                }}
              />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/project">
              <Project />
            </Route>

            <Route path="/skills">
              <Skills />
            </Route>

            <Route path="*">
              <h1>
                not found
              </h1>
            </Route>
          </Switch>
        </div>

      </Grid>
    </Grid>
  );
}
