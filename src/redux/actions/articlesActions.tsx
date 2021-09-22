import ArticleService from "../../services/articleService";
import { ArticleData } from "../../types/article";
import { toast } from "react-toastify";
import {
  DELETE_ARTICLE_ACTION,
  CREATE_ARTICLE,
  GET_ARTICLES_ACTION,
  GET_ARTICLE_ACTION,
} from "../constants/articleActionTypes";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export const createArticle = (data: ArticleData) => {
  return function (dispatch: Function) {
    return ArticleService.createArticle(data)
      .then((response) => {
        dispatch(typedAction(CREATE_ARTICLE, data));
        toast.success("Article Created");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Failure to create article");
      });
  };
};

export function fetchAllArticles() {
  return function (dispatch: Function) {
    return ArticleService.getAllArticles()
      .then(({ data }) => {
        dispatch(typedAction(GET_ARTICLES_ACTION, data));
      })
      .catch((e) => {
        console.log(e);
        toast.error("Error Loading Articles");
      });
  };
}

export function getSingleArticle(slug: string) {
  return function (dispatch: Function) {
    return ArticleService.getArticle(slug)
      .then(({ data }) => {
        dispatch(typedAction(GET_ARTICLE_ACTION, data));
      })
      .catch((e) => {
        console.log(e);
        toast.error("Error Loading Article");
      });
  };
}

export const deleteArticle = () => {
  return function (dispatch: Function) {
    dispatch(typedAction(DELETE_ARTICLE_ACTION));
  };
};
