import React from "react";
import Avatar from "../../assets/avatar.jpg";
import Button from "../Button";
const HappnersCard = ({
  name = "Bhanu pratap singh kushwah",
  userId,
  email = "example@example.com",
  following,
  suggestion = true,
}) => {
  return (
    <>
      <div className="border-2 border-blue-300 rounded-2xl flex flex-col p-6 items-center w-60">
        <div className="">
        <img className="object-cover w-full h-16 rounded-full" src={Avatar} alt="avatar" />
        </div>
        <h1 className="text-md font-medium text-blue-600">{name}</h1>
        <p className="text-gray-400 text-xs">{email}</p>
        <div class="w-full mt-3 flex justify-evenly">
          {suggestion ? (
            <Button size="small" type="primary" children="Follow" className="w-full"/>
          ) : following.includes(name) ? (
            <Button size="small" type="primary" children="Unfollow" className="w-full"/>
          ) : (
            <Button size="small" type="primary" children="Follow Back" className="w-full" />
          )}
        </div>
      </div>
    </>
  );
};

export default HappnersCard;
