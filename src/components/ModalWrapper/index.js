import React from "react";
import { ReactComponent as Cross } from "../../assets/X.svg";
const ModalWrapper = ({ children, visible, setVisible }) => {
  console.log("rendered");
  const visibilityStyles = visible ? "fixed" : "hidden";

  return (
    <>
      <div
        className={`${visibilityStyles} rounded-3xl z-75 h-110 md:w-110 py-8 px-6 w-11/12 left-0 right-0 m-auto top-20 shadow-xl md:p-10  bg-white overflow-y-scroll scroll-hide`}
      >
        <Cross
          className="cursor-pointer absolute right-5 top-5"
          onClick={() => setVisible(!visible)}
        />
        {children}
      </div>
      <div
        onClick={() => setVisible(!visible)}
        className={`${visibilityStyles} w-screen h-screen top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-30 cursor-pointer filter z-50 `}
      ></div>
    </>
  );
};

export default ModalWrapper;
