import { authenticatedInstance } from "../http";
import { ArticleData } from "../types/article";

const getAllArticles = (url: string) => {
  return authenticatedInstance.get(`${url}`);
};

const getArticle = (url: string) => {
  return authenticatedInstance.get(url);
};
const getPublishedArticles = (url: string) => {
  return authenticatedInstance.get(`${url}`);
};

const createArticle = (data: ArticleData) => {
  return authenticatedInstance.post(`/articles/`, data);
};
const editArticle = (slug: string | undefined, newData: ArticleData) => {
  return authenticatedInstance.put(`articles/${slug}`, newData);
};

const deleteArticle = (slug: string | undefined) => {
  return authenticatedInstance.delete(`articles/${slug}`);
};

const ArticleService = {
  getAllArticles,
  getArticle,
  createArticle,
  editArticle,
  deleteArticle,
  getPublishedArticles,
};

export default ArticleService;
