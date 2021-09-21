import React, { useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { setArticles } from "../redux/actions/articlesActions";

export default function ArticlesListing() {
  const articles = useSelector(
    (state: RootState) => state.allArticles.articles
  );
  const dispatch = useDispatch();
  const fetchArticles = async () => {
    const response = await axios
      .get("http://authors-social-platform.herokuapp.com/api/v1/articles/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setArticles(response));
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles);
  return (
    <div>
      <Article />
    </div>
  );
}
