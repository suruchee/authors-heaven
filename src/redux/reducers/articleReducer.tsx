import {
  GET_ARTICLES_ACTION,
  DELETE_ARTICLE_ACTION,
  CREATE_ARTICLE_ACTION,
  GET_ARTICLE_ACTION,
  EDIT_ARTICLE_ACTION
} from "../constants/articleActionTypes";
import { ArticlesState } from "../../types/article";
import { AnyAction } from "redux";

const initialState: ArticlesState = { articles: { results: [], count: 0 } };

export function articleReducer(
  state = initialState,
  action: AnyAction
): ArticlesState {
  switch (action.type) {
    case CREATE_ARTICLE_ACTION:
      return { ...state, newArticle: action.payload };
    case GET_ARTICLES_ACTION:
      return { ...state, articles: action.payload, newArticle: undefined, updatedArticle:undefined };
    case GET_ARTICLE_ACTION:
      return { ...state, article: action.payload ,updatedArticle:undefined};
    case EDIT_ARTICLE_ACTION:
      return { ...state, updatedArticle: action.payload };
    case DELETE_ARTICLE_ACTION:
      return { ...state };
    default:
      return state;
  }
}
