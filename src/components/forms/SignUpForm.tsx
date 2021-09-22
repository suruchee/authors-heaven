import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles } from "@material-ui/core";

import { UserData } from "../../types/user";
import { registerUser } from "../../redux/actions/userActions";
import { ChangeEvent, useState } from "react";

const useStyles = makeStyles({
  form: {
    marginTop: "2vh",
  },
  submit: {
    marginTop: "2vh",
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
