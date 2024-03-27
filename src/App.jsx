import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import Login from './components/login/Login'
import Shop from './components/shop/Shop';
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Profile from "./components/profile/Profile";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  let[nex,setNex]=useState(false)
    const log=()=>{
        setNex(true);
    }
 
  // const flash=()=>{
  //   setEnt(false)
  // }
  return (
    <>
   
    {nex?(<div>
      <BrowserRouter>
        <NavBar
          handleOrderPopup={handleOrderPopup}
          orderPopup={orderPopup}
          setOrderPopup={setOrderPopup}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleOrderPopup={handleOrderPopup}
                setOrderPopup={setOrderPopup}
                orderPopup={orderPopup}
              ></Home>
            }
          />
          <Route
            path="shop"
            element={
              <Shop></Shop>
            }
          />
          <Route
            path="about"
            element={
              <About></About>
            }
          /><Route
            path="blogs"
            element={
              <Blogs></Blogs>
            }
          />
          <Route
            path="profile"
            element={
              <Profile></Profile>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>):<Login log={log} nex={nex}/>}
     
    
    </>
  );
};

export default App;
