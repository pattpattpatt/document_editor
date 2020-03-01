import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Documents from "../components/Documents";
import DocumentCreator from "../components/DocumentCreator"
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/documents" exact component={Documents} />
      <Route path="/document" exact component={DocumentCreator} /> {/* The default document creation endpoint */}
    </Switch>
  </Router>
);