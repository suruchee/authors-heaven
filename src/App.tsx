import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesListing from "./components/ArticlesListing";
import ArticleDetails from "./components/ArticleDetails";
import AddArticle from "./components/AddArticle";
import { requireAnonymous } from "./auth";
import { AppState } from "./types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { signIn, signUp } from "./containers";

interface Props {
  isLoggedIn?: boolean;
}
const App: React.FC<Props> = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2000} position="top-right" />
        <Switch>
          <Route exact path="/signUp/" component={requireAnonymous(signUp)} />
          <Route exact path="/signIn/" component={requireAnonymous(signIn)} />
          <Route exact path="/">
            <ArticlesListing />
          </Route>
          <Route exact path="/article/:articleId">
            <ArticleDetails />
          </Route>
          <Route exact path="/addArticle/">
            <AddArticle />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
