import React from "react";
import Avatar from "../../assets/avatar.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import { motion } from "framer-motion";
const UserAvatar = ({ suggestions }) => {
  return (
    <>
      <div className="flex items-center p-2 w-64 px-0 m-auto ">
        <div className="h-10 rounded-full border border-blue-500 p-1">
          <img className="h-full rounded-full" src={Avatar} alt="avatar" />
        </div>
        <div className="flex flex-col ml-2">
          <h3 className="font-semibold text-gray-800 text-sm">
            Nicholas Cannon
          </h3>
          <p className="text-xs text-gray-400">nickcannon@gmail.com</p>
        </div>
        <button className="text-white h-7 px-2 rounded-xl font-medium bg-blue-500 text-sm ml-4">
          Follow
        </button>
      </div>
    </>
  );
};

const NotificationProfile = ({
  followers,
  following,
  collabs,
  avatar,
  username,
  usertype,
}) => {
  return (
    <>
      <div className="w-80 flex flex-col justify-center bg-blue-100 py-14 rounded-b-3xl ">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="h-24  w-24 rounded-full border-4 border-blue-600 p-1">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-full w-full rounded-full"
              src={Avatar2}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 text-lg">
              Nicholas Cannon
            </h3>
            <p className="text-base text-gray-400">Developer</p>
          </div>
        </div>
        <div className="flex justify-evenly mt-6 ">
          <div className="flex flex-col text-center bg-white px-2 py-2 rounded-xl w-24 shadow-md">
            <h3 className="font-semibold text-yellow-400">30</h3>
            <p className="">Followers</p>
          </div>
          <div className="flex flex-col text-center bg-white px-2 py-2 rounded-xl w-24 shadow-md">
            <h3 className="font-semibold text-pink-500">400</h3>
            <p className="">Following</p>
          </div>
          <div className="flex flex-col text-center bg-white px-2 py-2 rounded-xl w-24 shadow-md">
            <h3 className="font-semibold text-blue-500">10</h3>
            <p className="">Collabs</p>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationSider = ({
  followers,
  following,
  collabs,
  avatar,
  username,
  usertype,
  suggestions,
}) => {
  return (
    <>
      <div className="pb-10 border border-blue-300 w-80 rounded-b-3xl ">
        <NotificationProfile />
        <div className="pt-8 flex flex-col text-left">
          <h1 className="text-lg font-bold text-gray-900 pb-2 w-64 m-auto ">
            Suggestions for you
          </h1>
          <UserAvatar />
          <UserAvatar />
          <UserAvatar />
          <UserAvatar />
        </div>
      </div>
    </>
  );
};

export default NotificationSider;
