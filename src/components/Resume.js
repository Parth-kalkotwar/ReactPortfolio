import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#255",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timelineItem: {
    clear: "both",
    position: "relative",
    margin: "1rem 3rem 1rem 3rem",
    borderBottom: "2px solid tan",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.635rem",
      top: "calc(50% - 5px)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
      },
    },
  },
  timelineYear: {
    textAlign: "center",
    fontSize: "1.8rem",
    color: "white",
    maxWidth: "9.4rem",
    backgroundColor: "tomato",
    margin: "0 3rem 0 auto",
    padding: "0.5rem 1rem",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },

  heading: {
    fontWeight: "700",
    padding: "1rem",
    fontSize: "3rem",
  },
  subHeading: {
    color: "tan",
    padding: "0.5rem",
    fontSize: "2rem",
    textTransform: "uppercase",
  },

  company: {
    color: "tomato",
    fontSize: "1.5rem",
    padding: "0.1rem",
  },
  description: {
    color: "black",
    fontSize: "1.2rem",
    padding: "0.3rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box className={classes.timeLine} component="div">
          <Typography
            className={`${classes.timelineYear} ${classes.timelineItem}`}
            align="center"
            variant="h5"
          >
            2018
          </Typography>
          <Box component="div" className={classes.timelineItem}>
            <Typography
              align="center"
              varaint="h5"
              className={classes.subHeading}
            >
              Web Developer
            </Typography>
            <Typography
              align="center"
              variant="body1"
              className={classes.company}
            >
              Company
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.description}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timelineYear} ${classes.timelineItem}`}
            align="center"
            variant="h5"
          >
            2018
          </Typography>
          <Box component="div" className={classes.timelineItem}>
            <Typography
              align="center"
              varaint="h5"
              className={classes.subHeading}
            >
              Web Developer
            </Typography>
            <Typography
              align="center"
              variant="body1"
              className={classes.company}
            >
              Company
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.description}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timelineYear} ${classes.timelineItem}`}
            align="center"
            variant="h5"
          >
            2019
          </Typography>
          <Box component="div" className={classes.timelineItem}>
            <Typography
              align="center"
              varaint="h5"
              className={classes.subHeading}
            >
              Web Developer
            </Typography>
            <Typography
              align="center"
              variant="body1"
              className={classes.company}
            >
              Company
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.description}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timelineYear} ${classes.timelineItem}`}
            align="center"
            variant="h5"
          >
            2019
          </Typography>
          <Box component="div" className={classes.timelineItem}>
            <Typography
              align="center"
              varaint="h5"
              className={classes.subHeading}
            >
              Web Developer
            </Typography>
            <Typography
              align="center"
              variant="body1"
              className={classes.company}
            >
              Company
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.description}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timelineYear} ${classes.timelineItem}`}
            align="center"
            variant="h5"
          >
            2020
          </Typography>
          <Box component="div" className={classes.timelineItem}>
            <Typography
              align="center"
              varaint="h5"
              className={classes.subHeading}
            >
              Web Developer
            </Typography>
            <Typography
              align="center"
              variant="body1"
              className={classes.company}
            >
              Company
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.description}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
