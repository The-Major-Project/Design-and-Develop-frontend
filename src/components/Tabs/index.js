import React from "react";

const Tabs = ({ data }) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className="">
        <ul
          className="flex list-none overflow-x-scroll mb-6 no-scrollbar md:justify-center "
          role="tablist"
        >
          {data.map(({ id, tabname }) => {
            return (
              <li className="mr-4 text-center mt-4 flex justify-center ">
                <a
                  className={
                    "text-xs font-bold uppercase px-10 py-3  rounded-full  " +
                    (openTab === id
                      ? "text-white bg-blue-600"
                      : "text-gray-400  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(id);
                  }}
                  data-toggle="tab"
                  href={`link${id}`}
                  role="tablist"
                >
                  {tabname}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="tab-content tab-space flex w-full justify-between  ">
          {data.map(({ id, tabdata }) => {
            return (
              <div
                className={openTab === id ? "block" : "hidden"}
                id={`link${id}`}
              >
                <div className="w-full flex flex-wrap justify-center gap-6">
                  {tabdata}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs;
