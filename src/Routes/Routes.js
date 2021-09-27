import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../modules/Home";
import Signup from "../modules/auth/signup";
import Login from "../modules/auth/login";
import DashBoard from "../modules/dashboard";

let token = localStorage.getItem("accessToken");

const Router = () => {
	return (
		<Switch>
			{token ? (
				<>
					<Route exact path="/" component={DashBoard} />
					<Route exact path="/login">
						<Redirect to="/" />
					</Route>
					<Route exact path="/signup">
						<Redirect to="/" />
					</Route>
				</>
			) : (
				<>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
				</>
			)}
		</Switch>
	);
};

export default Router;
