import React from "react";
import icon from "../../assets/NotificationIcons/icon.jpg";
import Button from "../Button";

const index = () => {
  return (
    <div className="border-2 border-blue-100 rounded-3xl py-6 md:flex md:justify-between md:p-4 md:items-center">
      <div className="flex flex-col items-center text-center md:flex-row md:items-center">
        <div className="h-10 w-10">
          <img className="h-10 w-full rounded-full" src={icon} alt="xyz" />
        </div>
        <div className="flex flex-col md:flex-row md:ml-2 md:items-center">
        <h1 className="text-blue-600 font-bold text-lg">DC young fly </h1>
        <div className="text-gray-400 md:pl-2">sent you a collaboration request 🤝</div>

        </div>
      </div>
      <div className="flex justify-evenly mt-4 md:mt-0">
        <Button className="md:mx-2" size="small" type="secondary" children="View Post" />
        <Button size="small" type="primary" children="Accept" />
      </div>
    </div>
  );
};

export default index;
