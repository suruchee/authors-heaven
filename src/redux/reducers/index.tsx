import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";

const reducers = combineReducers({
  allArticles: articleReducer,
});
export type RootState = ReturnType<typeof reducers>

export default reducers;




