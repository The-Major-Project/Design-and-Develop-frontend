import React from "react";
import { ReactComponent as Heart } from "../../assets/DashboardIcons/heart.svg";
import { ReactComponent as Eye } from "../../assets/DashboardIcons/eye.svg";

const DribbbleShotsCard = ({ coverImage, title, like, view }) => {
  const mystyle = {
    backgroundImage:
      "linear-gradient" +
      "(to bottom, rgba(255, 255, 255, 0), rgba(200, 200, 200, 0), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.7))" +
      "," +
      "url(" +
      `${coverImage}` +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="w-68 h-48 rounded-2xl relative" style={mystyle}>
        <h3
          className=" text-base font-bold absolute bottom-3 left-3 text-white truncate ..."
          style={{ "max-width": "13ch" }}
        >
          {title}
        </h3>
        <div className="flex w-auto absolute bottom-3 right-2 text-white text-sm font-semibold">
          <div className="inline-flex items-center mr-3">
            <Heart width="14" />
            <p className="ml-1">{like}</p>
          </div>
          <div className="inline-flex items-center mr-3">
            <Eye width="14" />
            <p className="ml-1">{view}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DribbbleShotsCard;
