import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersList from "./pages/UsersList/UsersList";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Grid container justify="center" alignItems="center">
        <Router>
          <Switch>
            <Route exact path="/">
              <UsersList />
            </Route>
            <Route path="/user">
              <div>Hey</div>
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}
