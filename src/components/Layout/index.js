import React, { useState } from "react";
import Ham from "../../assets/Ham.svg";
import { motion } from "framer-motion";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const asideStyles = isSidebarOpen ? "translate-x-0 " : "-translate-x-full";
  const backDropStyles = isSidebarOpen ? "fixed " : "hidden";

  return (
    <>
      <div className="flex box-border">
        <aside
          className={`transform top-0 p-5 left-0 w-64 z-50 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300  ${asideStyles} lg:translate-x-0 lg:z-50 lg:w-80 lg:h-screen lg:sticky lg:overflow-y-hidden  lg:shadow-siderShadow `}
        >
          <h1 className="text-lg font-bold">Sider</h1>
          {/* SIDER WILL GO HERE */}
        </aside>

        <div
          className={`w-full h-hull top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-30 cursor-pointer filter z-30 ${backDropStyles} lg:hidden`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></div>

        <div className="w-full flex flex-col min-h-screen ">
          <header className="flex flex-row-reverse justify-between items-center bg-white px-6 py-3 fixed w-full lg:z-50 shadow-siderShadow">
            <div
              className="border-blue-500 px-2 py-1 flex flex-col justify-evenly h-8  rounded-md"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <motion.img
                animate={{
                  scale: [1, 1.1, 1.1, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
                className="h-auto"
                src={Ham}
                alt="pos"
              />
            </div>
            <h1 className="text-lg font-bold">HEADER</h1>
            {/* HEADER WILL GO HERE */}
          </header>
          <section
            onClick={() => setIsSidebarOpen(false)}
            className="bg-white flex flex-1 h-auto p-6 lg:p-10 mt-10"
          >
            {/* THE MAIN COMPONENT GOES HERE */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Layout;
