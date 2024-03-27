import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Category3 from "./Category3";

const Laptop = () => {
  const [visible, setVisible] = useState(false); // Initialize visible state to true to render the default content

  const close = () => {
    setVisible(true); // Set visible state to false when closing
  };

  return (
    <>
      {visible ? (
        <Category3 />
      ) : (
        <div className="h-screen w-[90vw] bg-red-500 m-auto rounded-3xl ">
          <div className="w-10 border float-end rounded-full m-2 flex justify-end p-2 cursor-pointer">
            <IoCloseOutline onClick={close} className="text-2xl cursor-pointer " />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="h-1/2 flex items-center justify-around"
          >
            <div className="h-3/4 w-1/5 bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-2xl"></div>
            <div className="h-3/4 w-1/5 bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-2xl"></div>
            <div className="h-3/4 w-2/5 bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-2xl"></div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="h-1/2 flex items-center justify-around "
          >
            <div className="h-3/4 w-2/5 bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-2xl"></div>
            <div className="h-3/4 w-1/5 bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-2xl"></div>
            <div className="h-3/4 w-1/5 bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-2xl"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Laptop;
