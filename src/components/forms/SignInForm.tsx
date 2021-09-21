import React, { useState, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  Button,
  Checkbox,
  makeStyles,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { loginUser } from "../../redux/actions/userActions";
import { UserData } from "../../types/user";

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
  user?: string;
}
export const SignInForm: React.FC<Props> = ({ user, loginUser }) => {
  const initialValues: UserData = {
    email: "",
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
        loginUser(form);
      }}
    >
      <TextField
        helperText="e.g example@gmail.com"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={form.email}
        onChange={handleInputChange}
        autoFocus
      />
      <TextField
        helperText="Please choose a strong password with numbers, uppercase and special characters"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={form.password}
        onChange={handleInputChange}
      />
      <Button type="submit" fullWidth variant="contained" className="submit">
        Sign In
      </Button>
    </form>
  );
};
