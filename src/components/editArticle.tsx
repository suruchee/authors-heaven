import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ApiArticle, ArticleData } from "../types/article";

import { Redirect } from 'react-router';
import { updateArticle } from "../redux/actions";
import { AddArticleForm } from "./forms";


interface Props {
  onUpdate: (...args: Parameters<typeof updateArticle>) => void;
  updatedArticle?: ApiArticle;
  article?: ApiArticle
}
export const EditArticle: React.FC<Props> = ({ updatedArticle, onUpdate, article }) => {
  const { pathname: url } = useLocation();
  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false
    
  };

  const [form, setForm] = useState<ArticleData>({...initialValues, ...article });

  const editUrl = url.replace("/edit", "")

  const handleSubmit = (e: any) => {e.preventDefault(); onUpdate(editUrl,form );}

  if (updatedArticle) {
    return <Redirect to='/articles/' />
  }
  return (
    <section>
      <h2>Edit Article</h2>
      <AddArticleForm onSubmit={handleSubmit} form={form} setForm={setForm} context='Edit' />
    </section>
  );
};
