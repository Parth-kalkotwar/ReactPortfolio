import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  withStyles,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const InputField = withStyles({
  root: {
    "& label.MuiInputLabel-root": {
      color: "tomato",
    },

    "& label.Mui-focused": {
      color: "tomato",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "tomato",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "& .Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "green",
    "&:hover": {
      color: "green",
      borderColor: "white",
    },
  },
  formInput: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.formInput}>
          <Typography variant="h3" style={{ color: "white" }}>
            Contact Me!!!
          </Typography>
          <br />
          <InputField
            id="custom-css-standard-input"
            label="Name"
            fullWidth={true}
            margin="dense"
          />
          <br />
          <InputField
            id="custom-css-standard-input"
            label="Email"
            fullWidth={true}
            margin="dense"
          />
          <br />
          <InputField
            id="custom-css-standard-input"
            label="Company Name"
            margin="dense"
            fullWidth={true}
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            size="medium"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
