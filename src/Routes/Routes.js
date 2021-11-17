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
					<Route exact path="/profile/user/:id" component={Profile} />
					<Route exact path="/notifications" component={Notifications} />
					<Route exact path="/happners" component={Happners} />
					<Route exact path="/messages" component={Messages} />
					<Route exact path="/login">
						<Redirect to="/dashboard" />
					</Route>
					<Route exact path="/signup">
						<Redirect to="/dashboard" />
					</Route>
				</>
			) : (
				<>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					{/* Redirects to / if user tries to access other pages */}
					<Route exact path="/dashboard">
						<Redirect to="/" />
					</Route>
					<Route exact path="/profile/user/:id">
						<Redirect to="/" />
					</Route>
					<Route exact path="/notifications">
						<Redirect to="/" />
					</Route>
					<Route exact path="/happners">
						<Redirect to="/" />
					</Route>
					<Route exact path="/messages">
						<Redirect to="/" />
					</Route>
				</>
			)}
		</Switch>
	);
};

export default Router;
