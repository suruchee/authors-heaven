import {
  GOOGLE_LOGIN,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  REGISTER_ACTION,
} from "../constants/actionTypes";
import { toast } from "react-toastify";
import { UserData } from "../../types/user";
import UserService from "../../services/userService";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export const logout = () => {
  return function (dispatch: Function) {
    dispatch(typedAction(LOGOUT_ACTION));
    localStorage.clear();
  };
};
export const googlelogin = (user: {} | null) => {
  return function (dispatch: Function) {
    dispatch(typedAction(GOOGLE_LOGIN, user));
    toast.success("Login Successful");
  };
};
export function registerUser(data: UserData) {
  return function (dispatch: Function) {
    return UserService.signUp(data)
      .then(({ data }) => {
        const { user } = data;
        dispatch(typedAction(REGISTER_ACTION, user));
        toast.success("Registration Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Registration Failed");
      });
  };
}
export function loginUser(data: UserData) {
  return function (dispatch: Function) {
    return UserService.signIn(data)
      .then(({ data }) => {
        const { user } = data;
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(typedAction(LOGIN_ACTION, user));
        toast.success("Login Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error("login Failed");
      });
  };
}
