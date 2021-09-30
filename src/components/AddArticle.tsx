import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { createArticle } from "../redux/actions";
import { ApiArticle, ArticleData } from "../types/article";
import { Redirect } from "react-router-dom";
import { AddArticleForm } from "./forms/AddArticleForm";

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

interface Props {
  onSubmit: (...args: Parameters<typeof createArticle>) => void;
  newArticle?: ApiArticle;
}

export const AddArticle: React.FC<Props> = ({ newArticle, onSubmit }) => {
  const classes = useStyles();

  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false,
  };

  const [form, setForm] = useState<ArticleData>(initialValues);

  const publishedForm = { ...form, published: true };
  const handlePublish = (e: any) => {
    e.preventDefault();
    onSubmit(publishedForm);
  };

  if (newArticle) {
    return <Redirect to="/articles" />;
  }

  return (
    <div className={classes.paper}>
      <div className={classes.image}>
        <MenuBookIcon color="primary" fontSize="large" />
      </div>
      <Typography component="h1" variant="h5">
        Add Article
      </Typography>
      <AddArticleForm
        newArticle={newArticle}
        onSubmit={handlePublish}
        form={form}
        setForm={setForm}
      />
    </div>
  );
};
