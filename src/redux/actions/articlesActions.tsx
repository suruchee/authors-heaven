import { ActionTypes } from "../constants/actionTypes";

export const setArticles = (articles: any) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

export const selectedArticles = (articles: any) => {
  return {
    type: ActionTypes.SELECTED_ARTICLES,
    payload: articles,
  };
};
