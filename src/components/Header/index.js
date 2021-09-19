import React, { useState } from "react";
import Button from "../Button";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const anchorClasses = "mx-4 text-sm";
  return (
    <header
      className={
        colorChange
          ? " transition duration-500 ease-in-out fixed w-full md:px-6 py-3 bg-white"
          : "transition duration-500 ease-in-out w-full bg-transparent md:px-6 py-3 "
      }
    >
      <div className="flex p-3 items-center justify-between md:max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold">
          Design <span className="text-blue-700">&</span> Develop
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
        <Button children="Login" type="secondary" size="small" />
      </div>
    </header>
  );
};

export default Header;
