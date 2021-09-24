import React from 'react';
import {
  Card,
  Grid,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
  useTheme,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from 'react-router-dom';

import Man from '../assets/man.jpg';

export default function AppBar(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const mobile = (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={props.openDrawer}
      onClose={() => props.setOpenDrawer(false)}
      onOpen={() => props.setOpenDrawer(true)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100vw',
        },
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%', position: 'relative' }}
        spacing={2}
      >
        <div style={{ position: 'absolute', top: 15, right: 2 }}>
          <IconButton onClick={() => props.setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid item>
          <Link to="/about" onClick={() => props.setOpenDrawer(false)}>
            <Typography variant="h5">About</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/skills" onClick={() => props.setOpenDrawer(false)}>
            <Typography variant="h5">Skills</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/project" onClick={() => props.setOpenDrawer(false)}>
            <Typography variant="h5">Project</Typography>
          </Link>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
  if (matchesSM) {
    return mobile;
  }
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="end"
        // alignItems="center"
        style={{
          paddingRight: matchesSM ? 0 : '8em',
          paddingTop: matchesSM ? '2em' : '2em',
          // border: "2px solid blue",
          display: 'flex',
          // justifyContent: "flex-end"
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          style={
            {
              // border: "2px solid blue",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center"
            }
          }
        >
          <Card
            style={{
              boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
              //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: matchesSM ? '3em 1em' : '1.5em 2em',
              backgroundColor: '#F6F5FA',
              borderRadius: 20,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: '3em',
              paddingLeft: '3em',
            }}
          >
            {/* first card */}
            <Card
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '16%',
                // boxShadow: "9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
                boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? '3em 1em' : '0.2em 0',
                backgroundColor: '#F6F5FA',
                borderRadius: 20,
              }}
            >
              <Typography variant="body1">
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  About
                </Link>
                {/* About */}
              </Typography>
            </Card>

            {/* second card */}
            <Card
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '16%',
                boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? '3em 1em' : '0.2em 0',
                backgroundColor: '#F6F5FA',
                borderRadius: 20,
              }}
            >
              <Typography>
                <Link to="/project" style={{ textDecoration: 'none' }}>
                  Project
                </Link>
              </Typography>
            </Card>

            {/* third card */}
            <Card
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '16%',
                boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: matchesSM ? '3em 1em' : '0.2em 0',
                backgroundColor: '#F6F5FA',
                borderRadius: 20,
              }}
            >
              <Typography>
                <Link to="/skills" style={{ textDecoration: 'none' }}>
                  Skills
                </Link>
              </Typography>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
