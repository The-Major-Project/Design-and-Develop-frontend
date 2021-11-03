import React from "react";
import Banner from "../../assets/DashboardIcons/bannerimage.png";
import { ReactComponent as Location } from "../../assets/DashboardIcons/Location.svg";
import { ReactComponent as Dribbble } from "../../assets/DashboardIcons/dribpink.svg";
import { ReactComponent as Github } from "../../assets/DashboardIcons/gitcat.svg";
import { ReactComponent as Link } from "../../assets/DashboardIcons/prolink.svg";
import { ReactComponent as Mail } from "../../assets/DashboardIcons/mail.svg";
import Button from "../../components/Button"

const ProfileOverview = () => {
  const mystyle = {
    backgroundImage: "url(" + `${Banner}` + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "23px 23px 0 0 ",
  };

  return (
    <>
      <div className="lg:w-96 h-110 max-h-110 rounded-3xl lg:sticky lg:top-28  shadow-tabShadows sm:mx-auto sm:w-full">
        <div className="w-full h-24 py-2 px-4 " style={mystyle}>
          <div className="rounded-full h-20  w-20 mx-auto absolute inset-x-1/4 top-36 lg:top-12 lg:inset-x-1/4  p-1 bg-white shadow-tabShadow">
            <img
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525891879-886386-sam-burriss-457746-unsplashjpg.jpg"
              alt="banner"
              className="rounded-full w-full h-full object-cover object-center  mx-auto z-0"

            />
          </div>
          <div className="info w-full text-center mt-32 ">
            <p className="text-base font-semibold">Justina Valentine</p>
            <p className="text-sm font-medium text-gray-400">Developer</p>
            <div className=" items-center">
              <div className="inline-flex items-center mx-auto mt-2">
                <Location />{" "}
                <p className="text-xs font-semibold ml-1">Indore, India</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p
              className="text-sm overflow-clip overflow-hidden text-justify  "
              style={{  "max-height": "100px" }}
            >
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <ul className="list-none text-xs mt-4 font-semibold text-gray-500">
              <li className="flex mt-4 items-center justify-center">
                <Mail width="22" /> <span className="ml-2">yash@gmail.com</span>
              </li>
              <li className="flex mt-4 items-cente justify-center">
                <Github width="22" />{" "}
                <span className="ml-2">yash@gmail.com</span>
              </li>
              <li className="flex mt-4 items-center justify-center">
                <Dribbble width="22" />{" "}
                <span className="ml-2">yash@gmail.com</span>
              </li>
              <li className="flex mt-4 items-center justify-center">
                <Link width="22" /> <span className="ml-2">yash@gmail.com</span>
              </li>
            </ul>
            <Button className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2" size="small">Edit profile ✏️</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
