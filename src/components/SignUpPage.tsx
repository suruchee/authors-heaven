import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  makeStyles,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { registerUser } from "../redux/actions/userActions";
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
  linkSignIn: {
    marginTop: "2vh",
    textAlign: "center",
  },
});

interface Props {
  registerUser: (...args: Parameters<typeof registerUser>) => void;
  username?: string;
}
export const SignUpPage: React.FC<Props> = ({ username, registerUser }) => {
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
          <Link to="/signin">Already have an account? Login Now!</Link>
        </Grid>
      </div>
    </Container>
  );
};
