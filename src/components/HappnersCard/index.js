import React from "react";
import Avatar from "../../assets/avatar.jpg";
import Button from "../Button";
const HappnersCard = ({
  name = "Bhanu pratap singh kushwah",
  email = "example@example.com",
  following,
  suggestion = true,
}) => {
  return (
    <>
      <div className="border-2 border-blue-300 rounded-3xl flex flex-col p-6 items-center w-80">
        <img className="w-16 h-16 rounded-full" src={Avatar} alt="avatar" />
        <h1 className="text-lg font-medium text-blue-600">{name}</h1>
        <p className="text-gray-400">{email}</p>
        <div class="w-full mt-3 flex justify-evenly">
          {suggestion ? (
            <Button size="full" type="primary" children="Follow" />
          ) : following.includes(name) ? (
            <Button size="full" type="primary" children="Unfollow" />
          ) : (
            <Button size="full" type="primary" children="Follow Back" />
          )}
        </div>
      </div>
    </>
  );
};

export default HappnersCard;
