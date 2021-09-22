import ArticleService from "../../services/articleService";
import {ArticleData} from "../../types/article"
import { DELETE_ARTICLE_ACTION, SET_ARTICLE_ACTION } from "../constants/articleActionTypes";

export function typedAction<T extends string>(type: T):{type: T};
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): {type: T, payload: P};
export function typedAction(type:string, payload?:any){
  return {type, payload};
}

export const setArticle = (data:ArticleData) => {
  return function(dispatch: Function){
    return ArticleService.setArticle(data)
      .then(({data}) =>{
        const {article} = data;
        dispatch(typedAction(SET_ARTICLE_ACTION, article));
      })
      .catch(e =>{
        console.log(e);
      });
  };
};
export const deleteArticle = () => {
  return function(dispatch: Function){
    dispatch(typedAction(DELETE_ARTICLE_ACTION))
  };
};