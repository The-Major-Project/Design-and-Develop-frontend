import React from "react";
import Button from "../Button";
import {motion} from "framer-motion"
import HandShake from "../../assets/HandShake.png";
const DashboradBanner = () => {
  return (
    <>
      <div className="w-full p-4 flex flex-col items-center justify-center text-center border-2 border-blue-100 py-10 rounded-3xl md:flex-row md:text-left md:py-6 md:justify-between lg:justify-center lg:items-center">
        <img src={HandShake} width="200"alt="hero-banner"  className="md:ml-5 lg:ml-0"/>
        <div className="flex flex-col items-center justify-center md:items-start md:ml-6 lg:ml-10">
          <motion.h1
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale:1 }}
           className="text-4xl font-extrabold my-2 text-transparent p-2 
           bg-clip-text bg-gradient-to-br from-purple-800 via-pink-600 to-red-600 transition-color duration-1000 ease-out ">
            Got an idea?
            <br />
            Find people to work with you!
          </motion.h1>
          <Button
            type="primary"
            children="Create a Collab Post 📝"
            size="medium"
            hasShadow
            className="mt-3"
          />
        </div>
      </div>
    </>
  );
};

export default DashboradBanner;
