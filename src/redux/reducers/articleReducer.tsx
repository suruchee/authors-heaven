import { ActionTypes } from "../constants/actionTypes";
const intitialState = {
  articles:[],
};
// @ts-ignore
export const articleReducer = (state = intitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return {...state, articles:payload};
    //return {...state, articles:payload}
    default:
      return state;
  }
};

// @ts-ignore
export const selectedArticleReducer = (state={},{type,payload}) =>{
  switch (type) {
    case ActionTypes.SELECTED_ARTICLE:
      return {...state,...payload};
    case ActionTypes.REMOVE_SELECTED_ARTICLE:
      return {};
    default:
      return state;
  }
}
