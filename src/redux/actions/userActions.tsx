import { ActionTypes } from "../constants/actionTypes";
export const request = (user: any) => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
    payload: user,
  };
};
export const success = (user: any) => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    payload: user,
  };
};
export const failure = (error: any) => {
  return {
    type: ActionTypes.REGISTER_FAILURE,
    payload: error,
  };
};

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
