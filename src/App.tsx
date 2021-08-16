import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Header from "./components/Header";
import ArticlesListing from "./components/ArticlesListing";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/signUp/">
            <SignUp />
          </Route>
          <Route exact path="/signIn/">
            <SignIn />
          </Route>
          <Route exact path="/signOut/">
            <SignOut />
          </Route>
          <Route exact path="/">
            <ArticlesListing/>
          </Route>
          <Route exact path="/article/:articleId">
            <ArticleDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
