import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Layout from "./../../components/Layout";
import SideMenu from "../../components/SideMenu";
import DashboardBanner from "../../components/DashboardBanner";
import DashboardPostCard from "../../components/DashboardPostCard";

const PostCardData = [
  {
    id: 1,
    heading: "Design Management Platform",
    description:
      "Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
    requireddeveloper: 2,
    requiredDesigner: 1,
    user: "Mihir Verma",
    date: "15 June 2021",
  },
  {
    id: 2,
    heading: "Design Management Platform",
    description:
      "Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
    requireddeveloper: 2,
    requiredDesigner: 2,
    user: "Mihir Verma",
    date: "15 June 2021",
  },
  {
    id: 3,
    heading: "Design Management Platform",
    description:
      "Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
    requireddeveloper: 2,
    requiredDesigner: 2,
    user: "Mihir Verma",
    date: "15 June 2021",
  },
  {
    id: 4,
    heading: "Design Management Platform",
    description:
      "Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
    requireddeveloper: 2,
    requiredDesigner: 2,
    user: "Mihir Verma",
    date: "15 June 2021",
  },
  {
    id: 5,
    heading: "Design Management Platform",
    description:
      "Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
    requireddeveloper: 2,
    requiredDesigner: 2,
    user: "Mihir Verma",
    date: "15 June 2021",
  },
  {
    id: 6,
    heading: "Design Management Platform",
    description:
      "Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guys I am building a platform for many people if interested collab with me!Hey guyssda",
    requireddeveloper: 2,
    requiredDesigner: 2,
    user: "Mihir Verma",
    date: "15 June 2021",
  },
  {
    id: 7,
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
  const userId = localStorage.getItem("userId");
  const history = useHistory();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getPosts();
  // }, []);

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
                  id={card.id}
                />
              ))}
          </div>
        </div>
      }
    />
  );
};

export default DashBoard;
