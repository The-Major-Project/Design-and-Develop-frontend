import React, { useState } from "react";
import icon from "../../assets/NotificationIcons/icon.jpg";
import Button from "../Button";
import axios from "axios";
import { toast } from "react-toastify";
const NotificationBar = ({
  notifId,
  userName,
  userId,
  reqType,
  userImg,
  postId,
}) => {
  const [post, setPost] = useState(null);

  // const acceptCollabReq = () => {

  // }

  // const viewGroup = () => {

  // }

  const followBack = async () => {
    try {
      const res = await axios.put(`/api/user/${userId}/follow`, {
        userId: localStorage.getItem("userId"),
      });

      console.log("Res", res.data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      toast.success(`${res.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err.message);
      toast.error(`${err.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // history.push("/login");
    }
  };

  const viewPost = async () => {
    try {
      const res = await axios.get(`/api/posts/${postId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          accessToken: localStorage.getItem("accessToken"),
        },
        credentials: "include",
        withCredentials: true,
      });
      setPost(res.data);
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
        src={userImg || icon}
        alt={userName}
      />
      <h1 className="text-blue-600 font-bold text-base md:ml-6 md:mr-2">
        {userName}
      </h1>

      {reqType === "collabReq" ? (
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
            <Button size="small" type="primary" children="Accept" />
          </div>
        </>
      ) : reqType === "collabRes" ? (
        <>
          <p className="text-gray-400 mb-5 md:mb-0">
            accepted your collab request 🎉
          </p>
          <Button
            className="md:ml-auto"
            size="small"
            type="success"
            children="View Group"
            // onClick={}
          />
        </>
      ) : reqType === "startedFollowing" ? (
        <>
          <p className="text-gray-400 mb-5 md:mb-0">started following you 🔥</p>
          <Button
            className="md:ml-auto"
            size="small"
            type="primary"
            children="Follow back"
            onClick={followBack}
          />
        </>
      ) : null}
    </div>
  );
};

export default NotificationBar;
