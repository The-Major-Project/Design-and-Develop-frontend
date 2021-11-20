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
// import ProfileOverview from "../../../components/ProfileOverview";
import axiosInstance from "../../../api/api";
import axios from "axios";
import OtherProfileOverview from "./OtherProfileOverview";

const OtherProfile = () => {
  const params = useParams();
  const [gitRepos, setGitRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [urlUser, setUrlUser] = useState({
    name: "",
    usertype: "",
    address: "",
    email: "",
    portfolioURL: "",
    dribbbleusername: "",
    githubUsername: "",
    followers: "",
    following: "",
  });
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    const getOtherUSer = async () => {
      try {
        const res = await axiosInstance.get(`/api/user/${params.id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        const gitPost = await axios.get(
          `https://api.github.com/users/${res.data.data.githubusername}/repos`
        );
        setUrlUser(res.data.data);
        setGitRepos(gitPost.data);
		setLoading(false)
        console.log("Thisssdsdsdsdsdsddsd", urlUser);
        console.log(gitRepos);
      } catch (err) {
        console.log(err);
      }
    };
    getOtherUSer();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const resPost = await axiosInstance.get(`/api/posts/${params.id}/all`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accessToken: localStorage.getItem("accessToken"),
            userId: params.id,
          },
        });
        setUserPost(resPost.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


const gitData = {
	id: 2,
	tabname: "Repos",
	active: <GithubWhite width="18" />,
	inactive: <GithubBlack width="18" />,
	tabdata: (
	  <>
		{gitRepos.map((repo) => {
		  return (
			<GithubProfileCard
			  title={repo.name}
			  description={repo.description}
			  fork={repo.forks_count}
			  star={repo.stargazers_count}
			  key={repo.id}
			  language={repo.language}
			/>
		  );
		})}
	  </>
	),
  }

  const dribData  = {
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
  }

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
                self={false}
                date={post.updatedAt.substring(0, 10)}
              />
            );
          })}
        </>
      ),
    },
	// can be fixed
urlUser.userType === "Developer" || "both" ?gitData:{},
urlUser.userType === "Designer" || "both" ?dribData:{}
    
  ];
  return (
    <>
      <Layout
        sider={<SideMenu />}
        main={
          <div className="flex flex-col lg:flex-row w-full ">
            {loading ? (
              <div className="">loading state</div>
            ) : (
              <OtherProfileOverview
                self={false}
                name={urlUser.name}
                usertype={urlUser.usertype}
                address={urlUser.address}
                email={urlUser.email}
                portfolioURL={urlUser.profileurl}
                profileimage={urlUser.profileimage}
                dribbbleusername={urlUser.dribbbleusername}
                githubusername={urlUser.githubusername}
                followers={urlUser.followers}
                following={urlUser.following}
				description={urlUser.description}
              />
            )}

            <div className="w-full flex lg:pl-10">
              <Tabs data={data} />
            </div>
          </div>
        }
      />
    </>
  );
};

export default OtherProfile;
