import { ActionTypes } from "../constants/actionTypes";
export const request = (user: any) => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
    payload: user,
  };
};
export const success = (user: any) => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    payload: user,
  };
};
export const failure = (error: any) => {
  return {
    type: ActionTypes.REGISTER_FAILURE,
    payload: error,
  };
};
