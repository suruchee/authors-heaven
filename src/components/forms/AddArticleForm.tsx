import React, { useState, ChangeEvent } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles } from "@material-ui/core";
import { createArticle } from "../../redux/actions";
import { ApiArticle, ArticleData } from "../../types/article";

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
 interface Props{
   onSubmit:(
     ...args: Parameters<typeof createArticle>
   ) => void;
   newArticle?: ApiArticle;
 };

export const AddArticleForm: React.FC<Props> = ({ newArticle, onSubmit }) => {
  const classes = useStyles();
const initialValues: ArticleData={
  title:"",
  description:"",
  body:"",
  favourited:false,
  published:false
};
const[form, setForm] = useState<ArticleData>(initialValues);

const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
  const {name, value} =  event.target;
  setForm({...form, [name]:value });
}

const formToSubmit = {...form, published:true }

  return (
        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); onSubmit(formToSubmit); }}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <TextField
              id="title"
              name="title"
              label="Title"
              required
              variant="outlined"
              fullWidth
              autoFocus
              value={form.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="Description"
              value={form.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="body"
              label="Body"
              name="body"
              multiline
              rows={20}
              value={form.body}
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
          Submit{" "}
        </Button>
      </form>
  );
}
