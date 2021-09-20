import React from "react";
import cx from "classnames";

const Why = ({ head, color, para, custom }) => {
  const Whydiv = cx(
    {
      "bg-blue-100": color === "blue",
      "bg-pink-100": color === "pink",
      "bg-yellow-100": color === "yellow",
    },
    "rounded-2xl w-80 py-6 px-10 lg:w-96",custom
  );
  return (
    <>
      <div className={Whydiv}>
        <h4 className="text-lg">{head}</h4>
        <p className="text-sm text-gray-500 mt-2">
          {para}
        </p>
      </div>
    </>
  );
};

export default Why;
