import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../modules/Home";
import Signup from "../modules/auth/signup";
// import Login from "../modules/auth/Login";
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Signup" component={Signup} />
      {/* <Route exact path="/Login" component={Login} /> */}
    </Switch>
  );
};

export default Router;
