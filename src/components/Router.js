import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import App from "../App";
import Description from "./Description/Description";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/description/:id" component={Description} />
    </Switch>
  );
}
export default Router;
