import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles, Typography } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    margin: "2vh",
  },
  form: {
    marginTop: "2vh",
  },
  submit: {
    marginTop: "2vh",
  },
});

export default function AddArticle() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.image}>
        <MenuBookIcon color="primary" fontSize="large" />
      </div>
      <Typography component="h1" variant="h5">
        Add Article
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <TextField
              autoComplete="title"
              name="Title"
              variant="outlined"
              required
              fullWidth
              id="title"
              label="Title"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="detail"
              label="Detail"
              name="Detail"
              autoComplete="Detail"
              multiline
              rows={20}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Submit{" "}
        </Button>
      </form>
    </div>
  );
}
