import { authenticatedInstance } from "../http";
import { ArticleData } from "../types/article";

const getAllArticles = () => {
  return authenticatedInstance.get("/articles/");
};

const getArticle = (slug: string) => {
  return authenticatedInstance.get(`/articles/${slug}`);
};

const createArticle = (data: ArticleData) => {
  return authenticatedInstance.post(`/articles/`, data);
};
const editArticle = (slug: string) => {
  return authenticatedInstance.put(`/articles/${slug}`);
};

const deleteArticle = (slug: string) => {
  return authenticatedInstance.delete(`/articles/${slug}`);
};

const ArticleService = {
  getAllArticles,
  getArticle,
  createArticle,
  editArticle,
  deleteArticle,
};

export default ArticleService;
