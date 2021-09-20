import React from "react";
import cx from "classnames";


const Why = ({ color, head, para, className }) => {
  const WhyDiv = cx(
    {
      " bg-blue-100 text-blue-800":
        color === "blue",
      " bg-pink-100 text-pink-500":
        color === "pink",
      " bg-yellow-100 text-yellow-500":
        color === "yellow",
    }, "w-80 px-8 py-5 transition duration-500 ease-in-out hover:shadow-xl rounded-3xl lg:w-96 lg:mx-10 md:py-6"
    , className
  );

  return (
    <>
      <div className={WhyDiv}>
        <div className="my-3 md:px-2 md:-top-10">
          <h1 className="text-xl font-bold">{head}</h1>
          <p className="text-gray-500 mt-2 text-sm font-extralight">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default Why;
