import { connect } from "react-redux";
import { AppState } from "../types";
import { deleteArticle, fetchAllArticles } from "../redux/actions";
import { ArticlesListing } from "../components/ArticlesListing";
import { getLoggedUser } from "../auth";

const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles,
  email: getLoggedUser(state),
});
const mapDispatchToProps = { fetchAllArticles, deleteArticle };

export const PublishedArticlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesListing);
