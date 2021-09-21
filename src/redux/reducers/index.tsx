import { combineReducers } from "redux";
import { articleReducer, selectedArticleReducer } from "./articleReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allArticles: articleReducer,
  user:userReducer,
  article: selectedArticleReducer
});
export type RootState = ReturnType<typeof reducers>

export default reducers;




