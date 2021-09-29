import React from "react";
import icon from "../../assets/DashboardIcons/icon.png";
import Button from "../Button";

const DashboardPostCard = () => {
  return (
    <>
      <div className="border-2 border-blue-100 rounded-3xl p-8 w-full md:w-80 lg:w-96">
        <div className="flex items-center">
          <div className="w-20">
            <img className="w-full" src={icon} alt="icondashboard" />
          </div>
          <h1 className="text-xl text-blue-600 pl-2">
            Design Management Platform
          </h1>
        </div>
        <p className="text-gray-600 mt-4">
          Hey guys I am building a platform for many people if interested collab
          with me!Hey guys I am building a platform for many people if
          interested collab with me!Hey guys I am building a platform for many
          people if interested collab with me!Hey guyssda
        </p>
        <hr className="bg-blue-400 my-3" />

        <div>
          <div className="text-blue-600">
            Required: 2 Developers, 1 Designer
          </div>
          <div className="flex justify-between pt-2 pb-4">
            <div className="text-blue-600">By: mmy</div>
            <div className="text-gray-500 texr-sm">15 jun 2021</div>
          </div>
        </div>
        <Button
          type="primary"
          size="full"
          hasShadow
          children="Let's collab 🤝"
        />
      </div>
    </>
  );
};

export default DashboardPostCard;
