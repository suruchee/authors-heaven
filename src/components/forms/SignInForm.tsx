import React, { useState, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from "@material-ui/core";
import { loginUser } from "../../redux/actions/userActions";
import { UserData } from "../../types/user";

const useStyles = makeStyles({
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
        id="password"
        name="password"
        label="Password"
        required
        type="password"
        value={form.password}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" fullWidth variant="contained" className="submit">
        Sign In
      </Button>
    </form>
  );
};
