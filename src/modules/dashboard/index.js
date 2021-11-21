import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Layout from "./../../components/Layout";
import SideMenu from "../../components/SideMenu";
import DashboardBanner from "../../components/DashboardBanner";
import DashboardPostCard from "../../components/DashboardPostCard";
import { stateContext } from "../../context/DNDContext";

const DashBoard = () => {
	const { setCurrentUser, dashboardPosts, setDashboardPosts } =
		useContext(stateContext);
	const userId = localStorage.getItem("userId");
	const history = useHistory();
	const PostCardData = dashboardPosts;
	const verifyDashboard = async () => {
		try {
			const res = await axios.get("/", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					accessToken: localStorage.getItem("accessToken"),
				},
				credentials: "include",
				withCredentials: true,
			});
			console.log("res" + res);
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			history.push("/login");
		}
	};

	useEffect(() => {
		verifyDashboard();
		const getUser = async () => {
			try {
				const res = await axios.get(`/api/user/${userId}`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
					},
				});
				const resPost = await axios.get(`/api/posts/${userId}/allposts`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
						userId: userId,
					},
				});
				console.log(res);
				console.log(resPost);
				setCurrentUser(res.data.data);
				setDashboardPosts(resPost.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout
			sider={<SideMenu />}
			main={
				<div>
					<DashboardBanner />
					<div className="flex flex-wrap gap-10 mt-10">
						{/*eslint-disable-next-line eqeqeq*/}
						{PostCardData == 0 ? (
							<h1 className="text-2xl mx-auto">
								<span className="font-semibold">Sorry! No Posts to show</span>😢
							</h1>
						) : (
							PostCardData?.map((card, index) => (
								<DashboardPostCard
									key={index}
									user={card.userName}
									description={card.description}
									requiredDesigner={card.designer}
									requireddeveloper={card.developer}
									date={card.createdAt.substring(0, 10)}
									heading={card.title}
									id={card._id}
									userId={card.userId}
									avatar={card.img}
									requestors={card.requestors}
									acceptors={card.acceptors}
								/>
							))
						)}
					</div>
				</div>
			}
		/>
	);
};

export default DashBoard;
