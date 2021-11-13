import React, { useState, useEffect } from "react";
import Banner from "../../assets/DashboardIcons/bannerimage.png";
import Close from "../../assets/shared/closeImage.svg";
import { ReactComponent as Location } from "../../assets/DashboardIcons/Location.svg";
import { ReactComponent as Dribbble } from "../../assets/DashboardIcons/dribpink.svg";
import { ReactComponent as Github } from "../../assets/DashboardIcons/gitcat.svg";
import { ReactComponent as Link } from "../../assets/DashboardIcons/prolink.svg";
import { ReactComponent as Mail } from "../../assets/DashboardIcons/mail.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalWrapper from "../ModalWrapper";
import { toast } from "react-toastify";

const ProfileOverview = ({
  name = "Mihir",
  usertype = "designer",
  self,
  city,
  country,
  email,
  portfolioURL,
  dribbbleUsername,
  githubUsername,
  following = [2, 3, 4],
  followers = [5, 6, 7, 1],
  userId = 1,
  //userId uski hai jiski profile kholi hai
}) => {
  const mystyle = {
    backgroundImage: "url(" + `${Banner}` + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "23px 23px 0 0 ",
  };

  const [visibleEditProfile, setVisibleEditProfile] = useState(false);
  const [previewSource, setPreviewSource] = useState();
  const [editPostData, setEditPostData] = useState({
    username: name,
    city: "",
    country: "",
    description: "I Love Coffee",
    email: "",
    dribbbleUsername: "",
    githubUsername: "",
    portfolioURL: "",
    following: [],
  });
  const [citiesArray, setCitiesArray] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(editPostData);
    // uploadImage(previewSource)
    setVisibleEditProfile(!visibleEditProfile);
  };

  // const uploadImage = (base64EncodedImage) => {
  //   console.log(base64EncodedImage)
  // }

  // useEffect(() => {
  //   console.log(citiesArray)
  // })

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
              style={{ "max-height": "100px" }}
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

      <ModalWrapper
        visible={visibleEditProfile}
        setVisible={setVisibleEditProfile}
      >
        <div className="mt-2">
          <div className="text-center">
            <h1 className="font-bold text-2xl text-blue-600 ">
              Update Profile
            </h1>
          </div>

          <form onSubmit={onSubmitHandler}>
            <Input
              label="Name"
              inputType="input"
              type="text"
              placeholder="Enter your name"
              name="username"
              value={editPostData.username}
              state={editPostData}
              setState={setEditPostData}
              labelClass="mt-4"
            />

            <Input
              label="City"
              inputType="input"
              type="text"
              placeholder="Enter your city"
              name="city"
              value={editPostData.city}
              state={editPostData}
              setState={setEditPostData}
              labelClass="mt-4"
              list="cities"
              id="city"
              citiesArray={citiesArray}
              setCitiesArray={setCitiesArray}
            />
            <datalist id="cities">
              {citiesArray.map((city) => (
                <option value={city.name + ", " + city.country.name} />
              ))}
            </datalist>

            <Input
              label="Email"
              inputType="input"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={editPostData.email}
              state={editPostData}
              setState={setEditPostData}
              labelClass="mt-4"
            />
            {usertype === "designer" ? (
              <Input
                label="Dribbble Username"
                inputType="input"
                type="text"
                placeholder="Enter your username"
                name="dribbbleUsername"
                value={editPostData.dribbbleUsername}
                state={editPostData}
                setState={setEditPostData}
                labelClass="mt-4"
              />
            ) : (
              <Input
                label="Github Username"
                inputType="input"
                type="text"
                placeholder="Enter your Username"
                name="githubUsername"
                value={editPostData.githubUsername}
                state={editPostData}
                setState={setEditPostData}
                labelClass="mt-4"
              />
            )}
            <Input
              label="Portfolio URL"
              inputType="input"
              type="text"
              placeholder="Enter URL"
              name="portfolioURL"
              value={editPostData.portfolioURL}
              state={editPostData}
              setState={setEditPostData}
              labelClass="mt-4"
            />
            <Input
              label="Description"
              inputType="textarea"
              placeholder="Description about you"
              name="description"
              value={editPostData.description}
              state={editPostData}
              setState={setEditPostData}
              labelClass="mt-4"
              rows={3}
            />
            <Input
              label="Profile image"
              inputType="input"
              type="file"
              placeholder="choose image"
              name="profileimage"
              value={editPostData.profileimage}
              state={editPostData}
              setState={setEditPostData}
              labelClass="mt-4"
              setPreviewSource={setPreviewSource}
              previewSource={previewSource}
            />
            {previewSource ? (
              <div>
                <img
                  src={previewSource}
                  alt="profileImage"
                  className="w-40 mt-2 rounded-xl shadow-xl object-cover"
                />
                <button
                  onClick={() => setPreviewSource(null)}
                  className="flex items-center my-2"
                >
                  <img src={Close} alt="profileImage" className="mr-2" /> Remove
                </button>
              </div>
            ) : null}
            <Button type="primary" size="full" className="my-4">
              Update Profile 😎
            </Button>
          </form>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ProfileOverview;
