import React, { useState } from "react";
import { data } from "./data";
import Display from "../../../Display";
// import Home from "../home/Home";
// import Entry from "./Entry";

const Login = ({ log, nex }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {nex && username == data.username && password == data.password && (
        <Display />
      )}
      {nex && username != data.username && password != data.password && null}
      {!nex && (
        <div
          className="w-full h-screen bg-blue-500 flex justify-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1434278254/vector/blue-and-pink-light-panoramic-defocused-blurred-motion-gradient-abstract-background-vector.jpg?s=612x612&w=0&k=20&c=_KXodNw25trgE0xDe0zFnzNiofFgV50aajKpcI9x_8I=')",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full md:w-1/2  md:ml-10 rounded-xl flex items-center justify-center">
            <center>
              <div className="  text-white mt-8 ">
                <h1 className="font-semibold text-center text-5xl font-serif mb-3">
                  Login
                </h1>
                <div className=" w-7/8 border border-gray-200 gap-10 rounded-3xl text-black p-5 font-bold text-lg ">
                  <div className=" w-full  grid grid-cols-1 place-content-center place-items-center">
                    <input
                      type="email"
                      className="rounded-lg  h-2/4 mt-2 text-black font-semibold p-4 border border-gray-600 mx-auto"
                      placeholder="Enter Your Email..."
                      onChange={handleUserName}
                    />
                  </div>

                  <div className="w-full   grid grid-cols-1 ">
                    <input
                      type="password"
                      className="rounded-lg  h-2/4 mt-2 text-black font-semibold p-4 border border-gray-600"
                      placeholder="Enter Your Password..."
                      onChange={handlePassword}
                    />
                  </div>
                  <button
                    className="w-2/5 md:w-1/3 -[10%] h-10 bg-red-500 border border-gray-350 rounded-full text-white  font-semibold mt-5 mb-10 hover:scale-110"
                    onClick={log}
                  >
                    Login
                  </button>
                </div>
              </div>
            </center>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
