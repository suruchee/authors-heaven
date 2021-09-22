import { connect } from "react-redux";
import { AppState } from "../types";
import { logout, googleLogin, loginUser } from "../redux/actions/userActions";
import { SignInPage } from "../components/SignInPage";

const mapStateToProps = (state: AppState) => {
  console.log(state, "state");
  return {
    username: state.auth.user?.username,
    isLoggedIn: state.auth.isLoggedIn,
  };
};
const mapDispatchToProps = { loginUser, logout, googleLogin };

export const signIn = connect(mapStateToProps, mapDispatchToProps)(SignInPage);
