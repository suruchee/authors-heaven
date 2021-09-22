import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  makeStyles,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { googleLogin, loginUser } from "../redux/actions/userActions";
import { SignInForm } from "./forms/SignInForm";

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

interface Props {
  loginUser: (...args: Parameters<typeof loginUser>) => void;
  googleLogin: (...args: Parameters<typeof googleLogin>) => void;
  username?: string;
  isLoggedIn?: boolean;
}
export const SignInPage: React.FC<Props> = ({
  username,
  loginUser,
  googleLogin,
  isLoggedIn,
}) => {
  const classes = useStyles();
  const glogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("user-info", JSON.stringify(result.user));
        window.location.href = "/";
      })
      .catch((error) => alert(error.message));
  };
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
        <SignInForm user={username} loginUser={loginUser} />
        <div className={classes.or}> OR</div>
        <GoogleLoginButton onClick={glogin} />
      </div>
      <Grid container className={classes.link}>
        <Grid item xs>
          <Link to="/signup">Forgot password?</Link>
        </Grid>
        <Grid item>
          <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </Container>
  );
};
