import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import Tabs from "../../../components/Tabs";
import GithubProfileCard from "../../../components/GithubProfileCard";
import { ReactComponent as DribbbleBlack } from "../../../assets/DashboardIcons/dribblack.svg";
import { ReactComponent as DribbbleWhite } from "../../../assets/DashboardIcons/dribw.svg";
import { ReactComponent as GithubBlack } from "../../../assets/DashboardIcons/gitb.svg";
import { ReactComponent as GithubWhite } from "../../../assets/DashboardIcons/gitw.svg";
import DribbbleShotsCard from "../../../components/DribbbleShotsCard";

const Profile = () => {
  const data = [
    {
      id: 1,
      tabname: "Posts",
      tabdata: <></>,
    },
    {
      id: 2,
      tabname: "Repos",
      active: <GithubWhite width="18" />,
      inactive: <GithubBlack width="18" />,
      tabdata: <>
      <GithubProfileCard language="Python"/>
      <GithubProfileCard language="Html"/>
      <GithubProfileCard language="Css"/>
      </>,
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
          <div className="flex">
            <div className="left w-80 border-2"></div>
            <div className="w-full flex pl-10">
              <Tabs data={data} />
            </div>
          </div>
        }
      />
    </>
  );
};

export default Profile;
