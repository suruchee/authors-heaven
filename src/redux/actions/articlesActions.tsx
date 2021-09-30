import ArticleService from "../../services/articleService";
import { ArticleData } from "../../types/article";
import { toast } from "react-toastify";
import {
  DELETE_ARTICLE_ACTION,
  CREATE_ARTICLE_ACTION,
  GET_ARTICLES_ACTION,
  GET_ARTICLE_ACTION, EDIT_ARTICLE_ACTION
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
        dispatch(typedAction(CREATE_ARTICLE_ACTION, data));
        toast.success("Article Created");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Failure to create article");
      });
  };
};

export function fetchAllArticles(url: string) {
  return function(dispatch: Function) {
    return ArticleService.getAllArticles(url)
      .then(({ data }) => {
        dispatch(typedAction(GET_ARTICLES_ACTION, data.articles));
      })
      .catch(e => {
        console.log(e);
        toast.error('Error While Fetching')
      });
  };
};

export function getSingleArticle(url: string) {
  return function (dispatch: Function) {
    return ArticleService.getArticle(url)
      .then(({ data }) => {
        dispatch(typedAction(GET_ARTICLE_ACTION, data.article));
      })
      .catch((e) => {
        console.log(e);
        toast.error("Error Loading Article");
      });
  };
}

export function updateArticle(url: string, data: ArticleData) {
  return function(dispatch: Function) {
    return ArticleService.editArticle(url, data)
      .then((response) => {
        dispatch(typedAction(EDIT_ARTICLE_ACTION, data));
        toast.success('Article Updated');
      })
      .catch(e => {
        console.log(e);
        toast.error('Failure to update article')
      });
  };
};


export const deleteArticle = (url:string) => {
  return function (dispatch: Function) {
    return ArticleService.deleteArticle(url)
      .then((response) => {
        dispatch(typedAction(DELETE_ARTICLE_ACTION));
        toast.warning('Article Deleted');
      })
      .catch(e => {
        console.log(e);
        toast.error('Failure to delete article')
      });
  };
};