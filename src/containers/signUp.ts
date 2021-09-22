import { connect } from "react-redux";
import { AppState } from "../types";
import { registerUser } from "../redux/actions/userActions";
import { SignUpPage } from "../components/SignUpPage";

const mapStateToProps = (state: AppState) => ({
  username: state.auth.user?.username,
});
const mapDispatchToProps = { registerUser };

export const signUp = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
