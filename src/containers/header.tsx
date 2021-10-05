import { connect } from "react-redux";
import { AppState } from "../types";
import { logout } from "../redux/actions/userActions";
import { Header } from "../components/Header";

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user?.username,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = { logout };
export const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
