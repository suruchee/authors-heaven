import {connect} from "react-redux";
import { AppState } from "../types";
import { createArticle } from "../redux/actions";
import { AddArticle } from "../components/AddArticle";

const mapStateToProps = (state:AppState) =>{
  console.log(state, 'state')
  return({
    newArticle:state.articles.newArticle
  });
};

const mapDispatchToProps = {onSubmit: createArticle};

export const AddArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);