import { connect } from "react-redux";
import { AppState } from "../types";
import { fetchAllArticles } from "../redux/actions";
import { ArticlesListing } from "../components/ArticlesListing";

const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles,
});
const mapDispatchToProps = { fetchAllArticles };

export const PublishedArticlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesListing);
