import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sobre from "./About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./global.css";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/sobre' component={Sobre} />
    </Switch>
  </BrowserRouter>,
  document.querySelector("body")
);
