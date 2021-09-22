import  {unAuthenticatedInstance} from "../http";
import {UserData} from "../types/user";

const signUp = (data:UserData) =>{
  return unAuthenticatedInstance.post("/auth/users/register",data);
};

const signIn = (data:UserData) =>{
  return unAuthenticatedInstance.post("/auth/users/login", data);
};

const UserService = {
  signUp,
  signIn
};

export default UserService;
