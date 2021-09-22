import {
  GET_ARTICLES_ACTION,
  DELETE_ARTICLE_ACTION,
} from "../constants/articleActionTypes";

// @ts-ignore
export const articleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES_ACTION:
      return { ...state, ...payload };
    case DELETE_ARTICLE_ACTION:
      return {};
    default:
      return state;
  }
};
