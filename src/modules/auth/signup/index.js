import React from "react";
import { useState } from "react";
import Input from "../../../components/Input";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import AuthSvg from "../../../assets/shared/authsvg.svg";
import { ReactComponent as UnderLine } from "../../../assets/shared/underline2.svg";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    selected: "",
    dribbbleusername: "",
    githubusername: "",
  });

  let socialProfile;
  if (user.selected === "designer") {
    socialProfile = (
      <Input
        className="my-4"
        type="text"
        placeholder="Dribbble username"
        label="Dribbble username"
        inputType="input"
        name="dribbbleusername"
        id="dribbbleusername"
        value={user.dribbbleusername}
        state={user}
        setState={setUser}
      />
    );
  } else if (user.selected === "developer") {
    socialProfile = (
      <Input
        className="my-4"
        type="text"
        placeholder="Github username"
        label="GitHub username"
        inputType="input"
        name="githubusername"
        id="githubusername"
        value={user.githubusername}
        state={user}
        setState={setUser}
      />
    );
  } else if (user.selected === "both") {
    socialProfile = (
      <div className="mt-4">
        <Input
          className="my-4"
          type="text"
          placeholder="Dribbble username"
          label="Dribbble username"
          inputType="input"
          name="dribbbleusername"
          id="dribbbleusername"
          value={user.dribbbleusername}
          state={user}
          setState={setUser}
        />
        <Input
          className="my-4"
          type="text"
          placeholder="Github username"
          label="GitHub username"
          inputType="input"
          name="githubusername"
          id="githubusername"
          value={user.githubusername}
          state={user}
          setState={setUser}
        />
      </div>
    );
  } else {
    socialProfile = null;
  }

  return (
    <>
      <Header />
      <div className="flex justify-center px-0  md:px-0 justify-between lg:w-full justify-evenly p-16">
        <div className="w-80  md:max-w-7xl">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-5xl font-extrabold">
              Sign<span className="text-blue-600"> Up!</span>
              <UnderLine className="w-48 mt-4" />
            </h1>
          </div>
          <div className="mt-6">
            <form>
              <Input
                className="my-4"
                type="text"
                placeholder="Enter your name"
                label="Name"
                inputType="input"
                name="name"
                id="name"
                value={user.name}
                state={user}
                setState={setUser}
              />
              <Input
                className="my-4"
                type="email"
                placeholder="Enter your email"
                label="Email"
                inputType="input"
                name="email"
                id="email"
                value={user.email}
                state={user}
                setState={setUser}
              />
              <Input
                className="my-4"
                type="password"
                placeholder="Enter your password"
                label="Password"
                inputType="input"
                name="password"
                id="password"
                value={user.password}
                state={user}
                setState={setUser}
              />
              <div className="my-4">
                <label className="text-base mb-2 font-medium font-sample">
                  Choose category
                </label>
                <div className="flex flex-col md:flex-row justify-between mt-3">
                  <Input
                    type="radio"
                    label="Designer"
                    inputType="input"
                    className="mt-0"
                    name="usertype"
                    id="designer"
                    value="designer"
                    state={user}
                    setState={setUser}
                  />
                  <Input
                    type="radio"
                    label="Developer"
                    inputType="input"
                    className="mt-2 md:mt-0"
                    name="usertype"
                    id="developer"
                    value="developer"
                    state={user}
                    setState={setUser}
                  />
                  <Input
                    type="radio"
                    label="Both"
                    inputType="input"
                    className="mt-2 md:mt-0"
                    name="usertype"
                    id="both"
                    value="both"
                    state={user}
                    setState={setUser}
                  />
                </div>
              </div>
              {socialProfile}
              <Button
                className="mt-4"
                type="primary"
                size="full"
                children="Make It Happen 😎"
                hasShadow={true}
              />
              <div className="text-center mt-2">
                <a href="https://github.com/">
                  Already have an account?{" "}
                  <span className="text-blue-600">Log in</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex max-w-xs p-8 my-auto lg:max-w-sm  ">
          <img src={AuthSvg} className="w-full" alt="authimage" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;