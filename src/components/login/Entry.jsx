import React from "react";

const Entry = () => {
  return (
    <>
      <div
        className="w-full h-[100vh] flex justify-center items-center "
        style={{ backgroundColor: "red" }}
      >
        <div className="w-1/4  flex flex-col">
          <h3 className="text-4xl font-bold text-white">
            Chalo re...........{" "}
          </h3>
          <h2 className="text-2xl font-bold ml-6 text-white">
            Discount Ka Mela 😍😍
          </h2>
          <h1 className="text-1xl font-bold text-white ml-12">
            Offers Ka Dhamaka!
          </h1>
          <h1 className="text-1xl font-bold text-white ml-20">
            only at Shopi_fy
          </h1>
        </div>
      </div>
    </>
  );
};

export default Entry;
