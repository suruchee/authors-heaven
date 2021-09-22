import { connect } from "react-redux";
import { AppState } from "../types";
import { ArticlesListing } from "../components/ArticlesListing";
import { fetchAllArticles } from "../redux/actions";

const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles,
});
const mapDispatchToProps = { fetchAllArticles };

export const ArticlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesListing);
