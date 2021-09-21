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
import { UserData } from "../../types/user";
import { registerUser } from "../../redux/actions";
import { ChangeEvent, useState } from "react";

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
  registerUser: (...args: Parameters<typeof registerUser>) => void;
  user?: string;
}

export const SignUpForm: React.FC<Props> = ({ user, registerUser }) => {
  const initialValues: UserData = {
    email: "",
    username: "",
    password: "",
  };
  const classes = useStyles();

  const [form, setForm] = useState<UserData>(initialValues);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        registerUser(form);
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <TextField
            autoComplete="username"
            name="username"
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username"
            autoFocus
            value={form.username}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
            value={form.password}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit}
      >
        Sign Up
      </Button>
    </form>
  );
};
