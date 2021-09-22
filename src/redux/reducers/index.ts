import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allArticles: articleReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof reducers>;

export default reducers;
