import React, { useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { setArticles } from "../redux/actions/articlesActions";

export default function ArticlesListing() {
/*  const articles = useSelector(
    (state: RootState) => state.allArticles.articles
  );
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://authorsheaven.com/articles")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setArticles(response));
  };
  useEffect(() => {
    fetchProducts();
  }, []);*/
  return (
    <div>
      <Article />
    </div>
  );
}
