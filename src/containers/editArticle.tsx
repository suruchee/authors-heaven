import { connect } from 'react-redux';
import { AppState } from "../types";
import { updateArticle } from "../redux/actions";
import { EditArticle } from "../components/editArticle";

const mapStateToProps = (state: AppState) => ({
    updatedArticle: state.articles.updatedArticle,
    article: state.articles.article
});
const mapDispatchToProps = { onUpdate : updateArticle };

export const EditArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticle);
