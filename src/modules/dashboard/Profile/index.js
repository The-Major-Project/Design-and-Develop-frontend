import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import Tabs from "../../../components/Tabs";
import GithubProfileCard from "../../../components/GithubProfileCard";
import { ReactComponent as DribbbleBlack } from "../../../assets/DashboardIcons/dribblack.svg";
import { ReactComponent as DribbbleWhite } from "../../../assets/DashboardIcons/dribw.svg";
import { ReactComponent as GithubBlack } from "../../../assets/DashboardIcons/gitb.svg";
import { ReactComponent as GithubWhite } from "../../../assets/DashboardIcons/gitw.svg";
import DribbbleShotsCard from "../../../components/DribbbleShotsCard";
import ProfilePost from "../../../components/ProfilePost";
import ProfileOverview from "../../../components/ProfileOverview";
import axiosInstance from "../../../api/api";
import axios from "axios";

const Profile = () => {
	const params = useParams();
	const [self, setSelf] = useState();
	const [gitRepos, setGitRepos] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [urlUser, setUrlUser] = useState();
	const [userPost, setUserPost] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axiosInstance.get(`/api/user/${params.id}`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
					},
				});
				const resPost = await axiosInstance.get(`/api/posts/${params.id}/all`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
						userId: params.id,
					},
				});
				setUrlUser(res.data.data);
				setUserPost(resPost.data.data);

				const gitPost = await axios.get(
					`https://api.github.com/users/${res.data.data.githubusername}/repos`
				);
				console.log(gitPost);

				// const dribShots = await axios.get(
				//   `https://api.dribbble.com/v2/user/shots?access_token=`
				// );
				// console.log(dribShots);
				setGitRepos(gitPost.data);
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log("this is param id = ", params.id);
		if (params.id === localStorage.getItem("userId")) {
			setSelf(true);
		} else {
			setSelf(false);
		}
	}, [params.id]);

	const data = [
		{
			id: 1,
			tabname: "Posts",
			tabdata: (
				<>
					{userPost.map((post) => {
						return (
							<ProfilePost
								title={post.title}
								description={post.description}
								requiredDesigner={post.designer}
								developer={post.developer}
								key={post._id}
								postId={post._id}
								postuserId={post.userId}
								self={self}
								setUserPost={setUserPost}
								date={post.updatedAt.substring(0, 10)}
							/>
						);
					})}
				</>
			),
		},
		{
			id: 2,
			tabname: "Repos",
			active: <GithubWhite width="18" />,
			inactive: <GithubBlack width="18" />,
			tabdata: (
				<>
					{gitRepos.length === 0
						? "No GitHub Repos to show!😢"
						: gitRepos.map((repo) => {
								return (
									<a href={repo.html_url} target="_blank" rel="noreferrer">
										<GithubProfileCard
											title={repo.name}
											description={repo.description}
											fork={repo.forks_count}
											star={repo.stargazers_count}
											key={repo.id}
											language={repo.language}
										/>
									</a>
								);
						  })}
				</>
			),
		},
		{
			id: 3,
			tabname: "Shots",
			active: <DribbbleWhite width="18" />,
			inactive: <DribbbleBlack width="18" />,
			tabdata: (
				<>
					<DribbbleShotsCard
						coverImage="https://cdn.dribbble.com/users/5994307/screenshots/16739125/media/c01a043f87a54820d9845eb60fbd94e8.png"
						title="Testify - Issue and Bug Tracking"
						like="50"
						view="26"
					/>
					<DribbbleShotsCard
						coverImage="https://cdn.dribbble.com/users/2498386/screenshots/16730603/media/383419e66576b479df2892019d84f934.png"
						title="Insurance App"
						like="40"
						view="76"
					/>
					<DribbbleShotsCard
						coverImage="https://cdn.dribbble.com/users/2685252/screenshots/16736995/media/d805c7cba191166c80bdca12598cd850.png"
						title="Ae - NFT Marketplace Website"
						like="52"
						view="21"
					/>
				</>
			),
		},
	];
	return (
		<>
			<Layout
				sider={<SideMenu />}
				main={
					<div className="flex flex-col lg:flex-row w-full ">
						<ProfileOverview self={self} />

						<div className="w-full flex lg:pl-10">
							<Tabs data={data} />
						</div>
					</div>
				}
			/>
		</>
	);
};

export default Profile;
