import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";

export default function SignUp() {
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
    <div>
      <Grid container spacing={2}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
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
          <Grid container>
            <Grid item xs>
              <Link to="/signUp">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signUp">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <div>OR</div>

      <GoogleLoginButton onClick={glogin} />
    </div>
  );
}
