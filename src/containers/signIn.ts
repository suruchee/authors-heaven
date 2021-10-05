import { connect } from "react-redux";
import { AppState } from "../types";
import { logout, googleLogin, loginUser } from "../redux/actions/userActions";
import { SignInPage } from "../components/SignInPage";

const mapStateToProps = (state: AppState) => ({
  username: state.auth.user?.username,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = { loginUser, logout, googleLogin };

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInPage);
