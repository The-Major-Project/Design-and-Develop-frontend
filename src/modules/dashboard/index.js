import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Layout from "./../../components/Layout";
import SideMenu from "../../components/SideMenu";
import DashboardBanner from "../../components/DashboardBanner";
import DashboardPostCard from "../../components/DashboardPostCard";

const PostCardData = [
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am bu am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 1,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 2,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 2,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 2,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 2,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 2,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
	{
		id: 123,
		heading: "Design Management Platform",
		description:
			"Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
		requireddeveloper: 2,
		requiredDesigner: 2,
		user: "Mihir Verma",
		date: "15 June 2021",
	},
];

const DashBoard = () => {
	const history = useHistory();

	//   VERIFIYING FOR THE ACCESS TO THIS PAGE
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

	// USING THIS EFFECT HOOK FOR JWT VERIFICATION
	useEffect(() => {
		verifyDashboard();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout
			sider={<SideMenu />}
			main={
				<div>
					<DashboardBanner />
					<div className="flex flex-wrap gap-10 mt-10">
						{PostCardData &&
							PostCardData.map((card, index) => (
								<DashboardPostCard
									key={index}
									user={card.user}
									description={card.description}
									requiredDesigner={card.requiredDesigner}
									requireddeveloper={card.requireddeveloper}
									date={card.date}
									heading={card.heading}
								/>
							))}
					</div>
				</div>
			}
		/>
	);
};

export default DashBoard;
