import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { requireAnonymous, requireAuthenticated } from "./auth";
import { AppState } from "./types";
import { connect } from "react-redux";
import {
  AddArticlePage,
  ArticlePage,
  ArticlesPage,
  ConnectedHeader,
  SignIn,
  SignUp,
} from "./containers";

interface Props {
  isLoggedIn?: boolean;
}
const App: React.FC<Props> = () => {
  return (
    <div>
      <BrowserRouter>
        <ConnectedHeader />
        <Switch>
          <Route exact path="/" component={requireAnonymous(ArticlesPage)} />
          <Route exact path="/signup/" component={requireAnonymous(SignUp)} />
          <Route exact path="/signin/" component={requireAnonymous(SignIn)} />
          <Route
            exact
            path="/articles/"
            component={requireAuthenticated(ArticlesPage)}
          />
          <Route
            path="/article/:slug"
            component={requireAuthenticated(ArticlePage)}
          />
          <Route
            path="/articles/new"
            component={requireAuthenticated(AddArticlePage)}
          />
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
