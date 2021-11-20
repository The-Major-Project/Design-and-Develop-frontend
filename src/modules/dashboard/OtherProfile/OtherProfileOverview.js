import React, { useContext, useEffect, useState } from "react";
import Banner from "./../../../assets/DashboardIcons/bannerimage.png";
// import Close from "../../assets/shared/closeImage.svg";
import { ReactComponent as Location } from "./../../../assets/DashboardIcons/Location.svg";
import { ReactComponent as Dribbble } from "./../../../assets/DashboardIcons/dribpink.svg";
import { ReactComponent as Github } from "./../../../assets/DashboardIcons/gitcat.svg";
import { ReactComponent as Link } from "./../../../assets/DashboardIcons/prolink.svg";
import { ReactComponent as Mail } from "./../../../assets/DashboardIcons/mail.svg";
import Button from "./../../../components/Button";
import Input from "./../../../components/Input";
import ModalWrapper from "./../../../components/ModalWrapper";
import { toast } from "react-toastify";
import axios from "axios";
import axiosInstance from "./../../../api/api";
import { stateContext } from "../../../context/DNDContext";
import { useHistory, useParams } from "react-router";

const OtherProfileOverview = ({
  name,
  usertype,
  self,
  city,
  address,
  description,
  country,
  email,
  portfolioURL,
  profileimage,
  dribbbleusername,
  githubusername,
  following = [2, 3, 4],
  followers = [5, 6, 7, 1],
}) => {
  useEffect(() => {}, []);

  const mystyle = {
    // eslint-disable-next-line no-useless-concat
    backgroundImage: "url(" + `${Banner}` + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "23px 23px 0 0 ",
  };

  const { currentUser } = useContext(stateContext);
  const userId = localStorage.getItem("userId");
  const [visibleEditProfile, setVisibleEditProfile] = useState(false);

  const commonAvatar =
    "https://cdn.dribbble.com/users/281679/screenshots/14892777/media/dda7cef00b08512ac10faec0cd7c630d.png?compress=1&resize=1600x1200";

  return (
    <>
      <div className="lg:w-96 h-110 max-h-110 rounded-3xl lg:sticky lg:top-28  shadow-tabShadows sm:mx-auto sm:w-full">
        <div className="w-full h-24 py-2 px-4 " style={mystyle}>
          <div className="rounded-full h-20  w-20 mx-auto absolute inset-x-1/4 top-36 lg:top-12 lg:inset-x-1/4  p-1 bg-white shadow-tabShadow">
            <img
              src={profileimage || commonAvatar}
              alt="banner"
              className="rounded-full w-full h-full object-cover object-center  mx-auto z-0"
            />
          </div>
          <div className="info w-full text-center mt-32 ">
            <p className="text-base font-semibold">{name}</p>
            <p className="text-sm font-medium text-gray-400 capitalize">
              {usertype === "both"
                ? "Designer, Developer"
                : currentUser.usertype}
            </p>
            <div className=" items-center">
              {address != null || "" || undefined ? (
                <div className="inline-flex items-center mx-auto mt-2">
                  <Location />{" "}
                  <p className="text-xs font-semibold ml-1">{address}</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-3">
            <p
              className="text-sm overflow-clip overflow-hidden text-justify  "
              style={{ "max-height": "100px" }}
            >
              {description}
            </p>
            <ul className="list-none text-xs mt-4 font-semibold text-gray-500">
              <li className="flex mt-4 items-center justify-center">
                <Mail width="22" />{" "}
                <a className="ml-2" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
              {usertype === "developer" ? (
                <li className="flex mt-4 items-center justify-center">
                  <Github width="22" />{" "}
                  <a
                    className="ml-2"
                    href={`https://github.com/${githubusername}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {githubusername}
                  </a>
                </li>
              ) : currentUser.usertype === "designer" ? (
                <li className="flex mt-4 items-center justify-center">
                  <Dribbble width="22" />{" "}
                  <a
                    className="ml-2"
                    href={`https://dribbble.com/${dribbbleusername}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {dribbbleusername}
                  </a>
                </li>
              ) : (
                <>
                  <li className="flex mt-4 items-cente justify-center">
                    <Github width="22" />{" "}
                    <a
                      className="ml-2"
                      href={`https://github.com/${githubusername}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {githubusername}
                    </a>
                  </li>
                  <li className="flex mt-4 items-center justify-center">
                    <Dribbble width="22" />{" "}
                    <a
                      className="ml-2"
                      href={`https://dribbble.com/${dribbbleusername}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {dribbbleusername}
                    </a>
                  </li>
                </>
              )}

              {portfolioURL != null || "" || undefined ? (
                <li className="flex mt-4 items-center justify-center">
                  <Link width="22" />{" "}
                  <a
                    className="ml-2"
                    href={`http://${portfolioURL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {portfolioURL}
                  </a>
                </li>
              ) : null}
            </ul>
            {self ? (
              <Button
                className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
                size="small"
                onClick={() => setVisibleEditProfile(!visibleEditProfile)}
              >
                Edit profile ✏️
              </Button>
            ) : !following.includes(userId) && !followers.includes(userId) ? (
              <Button
                size="small"
                type="primary"
                children="Follow"
                className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
              />
            ) : followers.includes(userId) && !following.includes(userId) ? (
              <Button
                size="small"
                type="primary"
                children="Follow Back"
                className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
              />
            ) : (
              <Button
                size="small"
                type="primary"
                children="Unfollow"
                className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProfileOverview;
