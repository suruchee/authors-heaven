import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ApiArticle, ArticleData } from "../types/article";

import { Redirect } from "react-router";
import { getSingleArticle, updateArticle } from "../redux/actions";
import { AddArticleForm } from "./forms";

interface Props {
  onUpdate: (...args: Parameters<typeof updateArticle>) => void;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
  resetEditArticle: () => void;
  updatedArticle?: ApiArticle;
  article?: ApiArticle;
}
export const EditArticle: React.FC<Props> = ({
  updatedArticle,
  onUpdate,
  fetchArticle,
  resetEditArticle,
  article,
}) => {
  const { pathname: url } = useLocation();
  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false,
  };

  const [form, setForm] = useState<ArticleData>({
    ...initialValues,
    ...article,
  });

  const editUrl = url.replace("/edit", "");

  useEffect(() => resetEditArticle, []); // eslint-disable-line

  useEffect(() => {
    fetchArticle(editUrl);
  }, [url, fetchArticle]); // eslint-disable-line

  useEffect(() => setForm({...initialValues, ...article }), [article]); // eslint-disable-line

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onUpdate(article?.slug as string, form);
  };

  if (updatedArticle) {
    return <Redirect to="/articles/" />;
  }
  return (
    <section>
      <header title={`Editing ${article?.title}`} />
      <AddArticleForm
        onSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        context="Edit"
      />
    </section>
  );
};
