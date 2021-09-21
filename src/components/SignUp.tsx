import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Button,
  makeStyles,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { loginUser } from "../redux/actions";
import { SignUpForm } from "./forms/SignUpForm";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "2vh",
    backgroundColor: "blue",
  },
  form: {
    marginTop: "2vh",
  },
  submit: {
    marginTop: "2vh",
  },
  linkSignIn: {
    marginTop: "2vh",
    textAlign: "center",
  },
});

interface Props {
  registerUser: (...args: Parameters<typeof loginUser>) => void;
  username?: string;
}
export const SignUp: React.FC<Props> = ({ username, registerUser }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm user={username} registerUser={registerUser} />
        <Grid item className={classes.linkSignIn}>
          <Link to="/signIn">Already have an account? Login Now!</Link>
        </Grid>
      </div>
    </Container>
  );
};
