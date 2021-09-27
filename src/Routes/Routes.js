import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../modules/Home";
import Signup from "../modules/auth/signup";
import Login from "../modules/auth/login";
import DashBoard from "../modules/dashboard";
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={DashBoard} />
    </Switch>
  );
};

export default Router;
