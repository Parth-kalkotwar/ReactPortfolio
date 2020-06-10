import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});

const Index = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
            },
          },
        }}
      />
    </>
  );
};

export default Index;
