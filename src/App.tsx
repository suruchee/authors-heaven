import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { requireAnonymous, requireAuthenticated } from "./auth";

import {
  AddArticlePage,
  ArticlePage,
  ArticlesPage,
  ConnectedHeader,
  SignIn,
  SignUp,
  PublishedArticlesPage,
  PublishedArticlePage,
  EditPublishedArticlePage,
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
          <Route exact path="/signup/" component={requireAnonymous(SignUp)} />
          <Route exact path="/signin/" component={requireAnonymous(SignIn)} />
          <Route
            path="/articles/published/:slug/edit"
            component={requireAuthenticated(EditPublishedArticlePage)}
          />
          <Route
            path="/articles/published/:slug"
            component={requireAuthenticated(PublishedArticlePage)}
          />
          <Route
            path="/articles/new"
            component={requireAuthenticated(AddArticlePage)}
          />
          <Route
            path="/articles/published"
            component={requireAuthenticated(PublishedArticlesPage)}
          />
          <Route
            path="/articles/:slug"
            component={requireAuthenticated(ArticlePage)}
          />
          <Route
            exact
            path="/articles/"
            component={requireAuthenticated(ArticlesPage)}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
