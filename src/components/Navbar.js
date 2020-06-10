import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Dehaze,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    background: "#511",
    width: 250,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  list: {
    color: "white",
    fontWeight: "700",
  },
  toggler: {
    position: "absolute",
    top: "7px",
    right: "1%",
  },
}));

const menuIcons = [
  { listItem: <Home />, listText: "Home", link: "/" },
  { listItem: <Apps />, listText: "Apps", link: "/portfolio" },
  { listItem: <AssignmentInd />, listText: "Resume", link: "/resume" },
  { listItem: <ContactMail />, listText: "Contacts", link: "/contact" },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const classes = useStyles();

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider("right", false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      <Divider />
      <List className={classes.list}>
        {menuIcons.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.link}>
            <ListItemIcon>{item.listItem}</ListItemIcon>
            <ListItemText primary={item.listText}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar position="relative">
            <Typography variant="h5">PORTFOLIO</Typography>
            <MobilRightMenuSlider
              open={state.right}
              anchor="right"
              onClick={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
            <IconButton
              className={classes.toggler}
              onClick={toggleSlider("right", true)}
            >
              <Dehaze style={{ color: "tomato" }}></Dehaze>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
