import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersList from "./pages/UsersList/UsersList";
import UserProfile from "./pages/UserProfile/UserProfile";

import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Grid item container justify="center">
        <Router>
          <Switch>
            <Route exact path="/">
              <UsersList />
            </Route>
            <Route path="/:user">
              <UserProfile />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}
