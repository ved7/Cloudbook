import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Login() {
  const classes = useStyles();
  const [name, setName] = React.useState("Cat in the Hat");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h2>Login</h2>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Login
        </Button>
        <a href="/Register">New User?</a>
      </form>
    </div>
  );
}

export default Login;
