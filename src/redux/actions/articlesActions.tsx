import { ActionTypes } from "../constants/actionTypes";

export const setArticles = (articles: any) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

export const selectedArticle = (articles: any) => {
  return {
    type: ActionTypes.SELECTED_ARTICLE,
    payload: articles,
  };
};
export const removeSelectedArticle = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ARTICLE,
  };
};