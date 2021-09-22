import { connect } from 'react-redux';
import { AppState } from "../types";
import { getSingleArticle } from "../redux/actions";
import { ArticleDetails } from "../components/ArticleDetails";



const mapStateToProps = (state: AppState) => ({
  article: state.articles?.article
});
const mapDispatchToProps = { fetchArticle: getSingleArticle };

export const ArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetails);
