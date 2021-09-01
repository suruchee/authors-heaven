import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  Button,
  Checkbox,
  makeStyles,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: "2vh",
    backgroundColor: "blue",
  },
  title: {
    marginTop: "3vh",
    alignSelf: "center",
    fontSize: "3vh",
  },
  form: {
    marginTop: "2vh",
  },
  submit: {
    margin: "2vh",
  },
  link: {
    marginTop: "2vh",
  },
  googleLogin: {
    backgroundColor: "#8db5ec",
    margin: "2vh",
  },
  or: {
    marginTop: "4vh",
    textAlign: "center",
    fontSize: 20,
  },
});

export default function SignIn() {
  const classes = useStyles();
  const glogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        localStorage.setItem("user-info", JSON.stringify(result.user));
        window.location.href = "/home";
      })
      .catch((error) => alert(error.message));
  };
  const login = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.title}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </div>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={login}
            type="submit"
            fullWidth
            variant="contained"
            className="submit"
          >
            Sign In
          </Button>
          <Grid container className={classes.link}>
            <Grid item xs>
              <Link to="/signUp">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signUp">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
        <div className={classes.or}> OR</div>
        <GoogleLoginButton onClick={glogin} />
      </div>
    </Container>
  );
}
