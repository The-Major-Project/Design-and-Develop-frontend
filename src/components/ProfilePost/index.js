import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import { ReactComponent as Trash } from "../../assets/DashboardIcons/trash.svg";
import { ReactComponent as Edit } from "../../assets/DashboardIcons/edit.svg";
import { ReactComponent as Avatar } from "../../assets/DashboardIcons/gitprofile.svg";
import Button from "../../components/Button";

const ProfilePost = ({
  title = "Design & Develop",
  description = `is simply dummy text of the printing and typesetting industry. Lorem
  Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled
  it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining
  essentially unchanged.`,
  self = true,
  requireddeveloper=2,
  requiredDesigner=5,
  date="15 Jun 2021"
}) => {
  return (
    <>
      <motion.div
        className="w-68 rounded-2xl px-4 py-5 border-2"
        whileHover={{ scale: 1.05 }}
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
            {description}
          </p>
        </div>

        <div className="text-blue-600 text-xs font-medium mt-2 w-full flex">
						<div>
                        {requireddeveloper}
						{requireddeveloper > 1 ? " Developers, " : " Developer, "}
						{requiredDesigner}
						{requiredDesigner > 1 ? " Designers" : " Designer"}
                        </div>
                        <div className=" ml-auto  text-gray-400">{date}</div>
					</div>

        <div className="flex w-auto text-sm font-semibold items-center justify-between mt-4">
          {self ? (
            <>
              <div className="flex items-center">
                <Button
                  size="small"
                  children="View Request"
                  type="primary"
                  className="h-10 mr-2 "
                />
              </div>
              <div className="flex text-blue-600 my-auto">
                <div className=" items-center mr-2 flex">
                  <Button size="icon" className="p-2" type="warning">
                    <Edit />
                  </Button>
                </div>
                <div className=" items-center mr-2 flex ">
                  <Button size="icon" className="p-2 bg-red-500">
                    <Trash />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center w-full">
                <Button
                  size="full"
                  children="Let's collab 🤝"
                  type="primary"
                  className="h-10"
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ProfilePost;
