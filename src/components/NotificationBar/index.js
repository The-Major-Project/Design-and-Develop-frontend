import React, { useEffect, useState } from "react";
import Button from "../Button";
import ModalWrapper from "../ModalWrapper";
import axios from "../../api/api";
import { ReactComponent as Avatar } from "../../assets/DashboardIcons/gitprofile.svg";
import { motion } from "framer-motion";

const NotificationBar = ({
  reqType,
  senderUserId,
  postId,
  notifId,
  setCurrentUser,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [post, setPost] = useState({});
  const [sender, setSender] = useState({});
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [visibleWrapper, setVisibleWrapper] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        // setLoading(true);
        const res = await axios.get(`/api/user/${senderUserId}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        setSender(res.data.data);
        console.log(res);
      } catch (err) {}
    };
    getUser();
    return () => {
      setSender({}); // This worked for me
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAccept = async () => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/api/user/${senderUserId}/acceptnotification`,
        {
          postId: postId,
          currentUserId: localStorage.getItem("userId"),
        }
      );
      console.log(res);
      const deleteres = await axios.put(
        `/api/user/${notifId}/deleteNotification`,
        { acceptorUserId: localStorage.getItem("userId") }
      );
      console.log(deleteres);

      const result = await axios.get(
        `/api/user/${localStorage.getItem("userId")}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );
      setCurrentUser(result.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const viewPost = async () => {
    try {
      const res = await axios.get(`/api/posts/${postId}`);
      setPost(res.data);
      setVisibleWrapper(true);
      setPageLoading(false);
      console.log("Res", res.data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push("/login");
    }
  };

  return (
    <div className="flex flex-col px-6 py-8 md:py-4 my-6 mx-auto items-center border-2 border-blue-100 rounded-3xl w-full md:flex-row max-w-5xl">
      <img
        className="w-16 h-16 object-cover object-center md:h-12 md:w-12 rounded-full"
        src={
          sender.profileimage ||
          "https://cdn.dribbble.com/users/281679/screenshots/14892777/media/dda7cef00b08512ac10faec0cd7c630d.png?compress=1&resize=1600x1200"
        }
        alt={sender.name}
      />
      <h1 className="text-blue-600 font-bold text-base md:ml-6 md:mr-2">
        {sender.name}
      </h1>

      {reqType === "collabreq" ? (
        <>
          <p className="text-gray-400 mb-5 md:mb-0">
            sent you a collaboration request 🤝
          </p>
          <div className="flex justify-evenly w-full md:w-auto md:ml-auto">
            <Button
              className="md:mx-8 "
              size="small"
              type="secondary"
              children="View Post"
              onClick={viewPost}
            />
            <Button
              size="small"
              type="primary"
              children="Accept"
              onClick={handleAccept}
              isLoading={loading}
            />
          </div>
        </>
      ) : reqType === "acceptreq" ? (
        <>
          <p className="text-gray-400 mb-5 md:mb-0">
            accepted your collab request 🎉
          </p>
          <div className="flex justify-evenly w-full md:w-auto md:ml-auto">
            <Button
              className="md:mx-8 "
              size="small"
              type="secondary"
              children="View Post"
              onClick={viewPost}
            />
            <Button
              className="md:ml-auto"
              size="small"
              type="success"
              children="View Group"
              // onClick={}
            />
          </div>
        </>
      ) : null}

      {/* View post modal */}
      <ModalWrapper visible={visibleWrapper} setVisible={setVisibleWrapper}>
        {pageLoading ? (
          "Loading..."
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="w-full rounded-2xl px-4 py-5 border-2 ">
              <div className="flex items-center">
                <Avatar />
                <h3
                  className=" text-lg font-bold truncate ... ml-2 text-blue-600 "
                  style={{ "max-width": "20ch" }}
                >
                  {post.title}
                </h3>
              </div>
              <div className="mt-2">
                <p
                  className=" text-sm overflow-clip overflow-hidden "
                  style={{ "max-width": "50ch", "max-height": "100px" }}
                >
                  {post.description}
                </p>
              </div>

              <div className="text-blue-600 text-xs font-medium mt-2 w-full flex">
                <div>
                  {post.developer}
                  {post.developer > 1 ? " Developers, " : " Developer, "}
                  {post.designer}
                  {post.designer > 1 ? " Designers" : " Designer"}
                </div>
                <div className=" ml-auto  text-gray-400">
                  {post.createdAt.substring(0, 10)}
                </div>
              </div>
            </div>
          </div>
        )}
      </ModalWrapper>
    </div>
  );
};

export default NotificationBar;
