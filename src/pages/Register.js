import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Register() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h2>Register/ SignUp</h2>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="confirm_password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Register
          </Button>
          <a href="/Register">Already a User?</a>
        </form>
      </div>
    </div>
  );
}

export default Register;
