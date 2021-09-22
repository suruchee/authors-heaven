import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { userReducer } from "./userReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const rootReducer = combineReducers({
  auth: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  articles: articleReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
