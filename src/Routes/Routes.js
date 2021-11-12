import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../modules/Home";
import Signup from "../modules/auth/signup";
import Login from "../modules/auth/login";
import DashBoard from "../modules/dashboard";
import Profile from "../modules/dashboard/Profile";
import Notifications from "../modules/dashboard/Notifications";
import Happners from "../modules/dashboard/Happners";
import Messages from "../modules/dashboard/Messages";

let token = localStorage.getItem("accessToken");

const Router = () => {
	return (
		<Switch>
			{token ? (
				<>
					<Route exact path="/dashboard" component={DashBoard} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/notifications" component={Notifications} />
					<Route exact path="/happners" component={Happners} />
					<Route exact path="/messages" component={Messages} />
					<Route  path="">
						<Redirect to="/dashboard" />
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
