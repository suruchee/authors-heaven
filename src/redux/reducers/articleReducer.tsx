import {
  GET_ARTICLES_ACTION,
  DELETE_ARTICLE_ACTION,
  CREATE_ARTICLE,
  GET_ARTICLE_ACTION,
} from "../constants/articleActionTypes";
import { ArticlesState } from "../../types/article";
import { AnyAction } from "redux";

const initialState: ArticlesState = { articles: [] };

export function articleReducer(
  state = initialState,
  action: AnyAction
): ArticlesState {
  switch (action.type) {
    case CREATE_ARTICLE:
      return { ...state, newArticle: action.payload };
    case GET_ARTICLES_ACTION:
      return { ...state, articles: action.payload, newArticle: undefined };
    case GET_ARTICLE_ACTION:
      return { ...state, article: action.payload };
    case DELETE_ARTICLE_ACTION:
      return { ...state, article: undefined };
    default:
      return state;
  }
}
