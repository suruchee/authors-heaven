import  {unAuthenticatedInstance} from "../http";
import {ArticleData} from "../types/article";

const getAllArticles = (data:ArticleData) =>{
  return unAuthenticatedInstance.get("/articles/");
};

const getArticle = (data:ArticleData) =>{
  return unAuthenticatedInstance.get(`/articles/`);
};
const setArticle = (data:ArticleData) =>{
  return unAuthenticatedInstance.post(`/articles/`,data);
};
const editArticle = (data:ArticleData) =>{
  return unAuthenticatedInstance.put(`/articles/`,data);
};
const deleteArticle = (data:ArticleData) =>{
  return unAuthenticatedInstance.delete(`/articles/`);
};

const ArticleService = {
  getAllArticles,
  getArticle,
  setArticle,
  editArticle,
  deleteArticle
};

export default ArticleService;
