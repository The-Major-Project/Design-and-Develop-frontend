import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import Button from "../Button";

const ErrorPage = () => {
  const history = useHistory();
  const home = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: home.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Error.json"),
    });
  }, []);

  const redirect = () => {
    history.push("/");
  };

  return (
    <>
      <section className="w-screen text-center flex flex-col h-screen justify-center items-center">
        <div className="w-96" ref={home}></div>
        <motion.h1
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
          }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="text-2xl font-semibold "
        >
          Some Error has been occured!
        </motion.h1>
        <Button
          type="primary"
          size="medium"
          children="Back to Home"
          onClick={redirect}
          hasShadow
          className="mt-20"
        />
      </section>
    </>
  );
};

export default ErrorPage;
