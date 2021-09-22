import { UserState } from "../../types/user";
import { AnyAction } from "redux";
import {
  GOOGLE_LOGIN,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  REGISTER_ACTION,
} from "../constants/userActionTypes";

const initialState: UserState = { isLoggedIn: false };

export function userReducer(
  state = initialState,
  action: AnyAction
): UserState {
  switch (action.type) {
    case REGISTER_ACTION:
      return { ...state, user: action.payload };
    case LOGIN_ACTION:
      return { ...state, user: action.payload, isLoggedIn: true };
    case LOGOUT_ACTION:
      return { ...state, user: undefined, isLoggedIn: false };
    case GOOGLE_LOGIN:
      return { ...state, isLoggedIn: true, firebaseAuth: action.payload };
    default:
      return state;
  }
}
