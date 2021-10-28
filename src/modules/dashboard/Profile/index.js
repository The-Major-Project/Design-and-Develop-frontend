import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import Tabs from "../../../components/Tabs";
import { ReactComponent as DribbbleBlack } from "../../../assets/DashboardIcons/dribblack.svg";
import { ReactComponent as DribbbleWhite } from "../../../assets/DashboardIcons/dribw.svg";
import { ReactComponent as GithubBlack } from "../../../assets/DashboardIcons/gitb.svg";
import { ReactComponent as GithubWhite } from "../../../assets/DashboardIcons/gitw.svg";

const Happners = () => {
  const data = [
    {
      id: 1,
      tabname: "Posts",
      tabdata: (
        <>
          {/* <HappnersCard name="Mihir Verma" />
          <HappnersCard name="Yash Sharma" />
          <HappnersCard name="Manvi Jain" />
          <HappnersCard name="Meemansha Jain" /> */}
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
            <div className="w-full flex justify-center">
              <Tabs data={data} />
            </div>
          </div>
        }
      />
    </>
  );
};

export default Happners;
