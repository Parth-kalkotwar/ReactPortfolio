import React, { useState } from "react";
import { Grid, Avatar, Typography, Box, isWidthDown } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "2px auto",
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "2rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    widht: "100%",
    transform: "translate(-50%,-50%)",
    zIndex: "1",
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Avatar src={avatar} alt="avatar" className={classes.avatar} />
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Parth Kalkotwar"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["My Expertise Are"]} typeSpeed={40} />
      </Typography>

      <br />
      <Typography variant="h5" className={classes.subtitle}>
        <Typed
          strings={["MERN Stack", "Web Development", "Python", "Django"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
};

export default Header;
