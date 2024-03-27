import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const Store = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  return (
    <div
      className="w-100vw min-h-screen flex flex-col md:flex-row justify-center items-center text-gray-800"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-yellow-geometric-flattened-taobao-e-commerce-coupon-background-image_262555.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center text-7xl font-bold top-5 text-red-600 w-[35vw] drop-shadow-2xl p-4 absolute">
        Sign up now
      </h1>

      <div className="w-[50vw]  h-3/4  rounded-xl flex justify-center mt-20 ">
        <div className=" w-[60vw] ">
          <div
            className=" w-7/8 flex flex-col items-center justify-start  rounded-3xl text-black p-5 font-bold text-lg "
            style={{ backgroundColor: "" }}
          >
            <div
              className="border border-gray-800 w-3/4 h-[50vh] p-3
            flex flex-col justify-around m-5"
            >
              <div className="w-full  flex justify-between items-center gap-20">
                <label className="font-bold  text-lg w-full ">Full Name:</label>

                <input
                  type="text"
                  className="rounded-lg   text-black font-semibold p-3 border border-gray-600"
                  placeholder="Enter Your Name..."
                  onChange={handleUserName}
                />
              </div>

              <div className="w-full  flex justify-between items-center">
                <label className="font-bold  text-lg w-full ">Email:</label>

                <input
                  type="email"
                  className="rounded-lg   text-black font-semibold p-3 border border-gray-600"
                  placeholder="Enter Your Email..."
                  onChange={handleEmail}
                />
              </div>

              <div className="w-full  flex justify-between items-center">
                <label className="font-bold  text-lg w-full ">Phone:</label>

                <input
                  type="number"
                  className="rounded-lg   text-black font-semibold p-3 border border-gray-600"
                  placeholder="Enter Your Phone"
                  onChange={handlePhone}
                />
              </div>
              <div className="w-full  flex justify-between items-center">
                <label className="font-bold  text-lg w-full ">password:</label>

                <input
                  type="password"
                  className="rounded-lg   text-black font-semibold p-3  border border-gray-600"
                  placeholder="Enter Your Password..."
                  onChange={handlePassword}
                />
              </div>
            </div>
            <button
              className="w-1/5 -[10%] bg-red-500 border border-gray-950 rounded-full  font-semibold mt-5 mb-10 hover:scale-110"
              onClick={Store}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-3/4 flex justify-center items-center">
        <img
          src="https://media.tenor.com/Q12hpGIkgS8AAAAi/cool-minions.gif"
          alt=""
          className="w-2/4 mr-[105px] mb-[80px]"
        />
      </div>
    </div>
  );
};

export default Signup;
