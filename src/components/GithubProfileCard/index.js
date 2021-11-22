import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import { ReactComponent as Fork } from "../../assets/DashboardIcons/fork.svg";
import { ReactComponent as Star } from "../../assets/DashboardIcons/star.svg";
import { ReactComponent as Avatar } from "../../assets/DashboardIcons/gitprofile.svg";

const GithubProfileCard = ({
  title,
  description,
  fork,
  star,
  language,
}) => {
  const languageDot = cx({
    "bg-indigo-600": language === "Python",
    "bg-blue-300": language === "TypeScript",
    "bg-yellow-300": language === "JavaScript",
    "bg-purple-400": language === "Java",
    "bg-red-500": language === "HTML" || null,
    "bg-pink-400": language === "CSS",
    "bg-green-600": language === "Jupyter Notebook",
  });
  return (
    <>
      <motion.div
        className="w-68 rounded-2xl h-60 px-4 py-5 border-2 cursor-pointer flex flex-col justify-between"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex items-center">
          <Avatar />
          <h3
            className=" text-lg font-bold truncate ... ml-2 text-blue-600 "
            style={{ "max-width": "20ch" }}
          >
            {title}
          </h3>
        </div>
        <div className="mt-2">
          <p
            className=" text-sm overflow-clip overflow-hidden "
            style={{ "max-width": "50ch", "max-height": "100px" }}
          >
            {!description? "Description not added":description}
          </p>
        </div>

        <div className="flex w-auto text-sm font-semibold items-center justify-between mt-2">
          <div className="flex items-center">
            <div className={`h-2 w-2 rounded-full mr-2 ${languageDot}`}></div>
            {language}
          </div>
          <div className="flex text-blue-600 my-auto">
            <div className=" items-center mr-3 flex">
              <Fork />
              <p className="ml-1">{fork}</p>
            </div>
            <div className=" items-center mr-3 flex ">
              <Star />
              <p className="ml-1">{star}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GithubProfileCard;
