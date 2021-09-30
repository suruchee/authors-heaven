import { connect } from "react-redux";
import { AppState } from "../types";
import { getSingleArticle } from "../redux/actions";
import { ArticleDetails } from "../components/ArticleDetails";
import { getLoggedUser } from "../auth";

const mapStateToProps = (state: AppState) => ({
  article: state.articles?.article,
  email: getLoggedUser(state),
});
const mapDispatchToProps = { fetchArticle: getSingleArticle };

export const PublishedArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetails);
