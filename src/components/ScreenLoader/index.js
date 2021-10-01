import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion"

const ScreenLoader = () => {
  const home = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: home.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Loader.json"),
    });
  }, []);

  return (
    <>
      <section className="w-screen flex flex-col h-screen justify-center items-center">
        <div     
    className="w-52" ref={home}></div>
        <motion.h1 animate={{
      scale: [1, 1.1, 1.1, 1, 1],
    }}
    transition={{ repeat: Infinity, duration: 1.2 }}className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800">Make it Happen...</motion.h1>
      </section>
    </>
  );
};

export default ScreenLoader;
