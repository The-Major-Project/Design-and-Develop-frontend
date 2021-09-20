import React, { useState } from "react";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const path = window.location.pathname;
  let extra;
  if (path.includes("Signup") || path.includes("Login")) {
    extra = "bg-white"
  }
  else {
    extra = "bg-gradient-to-r from-blue-200 via-blue-100 to-white "
  }
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const history = useHistory();
  const routeChange = () => {
    let path = `/Login`;
    history.push(path);
  }

  const anchorClasses = "mx-4 text-sm";
  return (
    <header
      className={
        colorChange
          ? " transition duration-500 ease-in-out fixed w-full md:px-6 py-3 bg-white shadow-md z-10"
          : `transition duration-500 ease-in-out w-full bg-transparent md:px-6 py-3 ${extra} z-10`
      }
    >
      <div className="flex p-3 items-center justify-between md:max-w-7xl mx-auto"    >
        <h2 className="text-2xl font-bold text-blue-700">
          <a href="/"> Design <span className="text-black">&</span> Develop</a>
        </h2>
        <nav className="hidden md:flex">
          <a className={anchorClasses} href="#about">
            About Us
          </a>
          <a className={anchorClasses} href="#learn">
            Learn
          </a>
          <a className={anchorClasses} href="#why">
            Why D&D?
          </a>
          <a className={anchorClasses} href="#faq">
            FAQ's
          </a>
        </nav>
        <Button children="Login" type="secondary" size="small" onClick={routeChange} />
      </div>
    </header>
  );
};

export default Header;
