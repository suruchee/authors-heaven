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
const editArticle = (url: string, newData: ArticleData) => {
  return authenticatedInstance.put(`${url}/`, newData);
};

const deleteArticle = (url: string) => {
  return authenticatedInstance.delete(`${url}/`);
};

const ArticleService = {
  getAllArticles,
  getArticle,
  createArticle,
  editArticle,
  deleteArticle,
  getPublishedArticles
};

export default ArticleService;
