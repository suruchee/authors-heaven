import { connect } from "react-redux";
import { AppState } from "../types";
import { ArticlesListing } from "../components/ArticlesListing";
import { deleteArticle, fetchAllArticles } from "../redux/actions";
import { getLoggedUser } from "../auth";

const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles,
  email: getLoggedUser(state),
});
const mapDispatchToProps = { fetchAllArticles, deleteArticle };

export const ArticlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesListing);
