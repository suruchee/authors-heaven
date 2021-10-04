import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Link } from "@material-ui/core";
import { ApiArticle, ArticleData } from "../../types/article";
import { useHistory } from "react-router";

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
    marginLeft: "10vh",
    width: "80%",
  },
  submit: {
    marginTop: "2vh",
  },
  button: {
    margin: "8vh",
    marginTop: "5vh",
    width: "20%",
    height: "5vh",
  },
});
interface Props {
  onSubmit: Function;
  newArticle?: ApiArticle;
  form: ArticleData;
  setForm: Function;
  context?: string;
}
export const AddArticleForm: React.FC<Props> = ({
  onSubmit,
  form,
  setForm,
  context,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    onSubmit(form);
  };
  return (
    <form className={classes.form}>
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
            onChange={handleTextAreaChange}
          />
        </Grid>
      </Grid>
      <div>
        <button
          className={classes.button}
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        >
          Cancel
        </button>
        <button className={classes.button}>
          <Link href="/articles/">Cancel</Link>
        </button>
        {context === "Edit" ? (
          form.published ? (
            <button className={classes.button} onClick={(e) => onSubmit(e)}>
              Update Article
            </button>
          ) : (
            <>
              <button className={classes.button} onClick={(e) => handleSave(e)}>
                Update as Draft
              </button>
              <button className={classes.button} onClick={(e) => onSubmit(e)}>
                Update And Publish
              </button>
            </>
          )
        ) : (
          <>
            <button className={classes.button} onClick={(e) => handleSave(e)}>
              Save as Draft
            </button>
            <button className={classes.button} onClick={(e) => onSubmit(e)}>
              Submit And Publish
            </button>
          </>
        )}
      </div>
    </form>
  );
};
