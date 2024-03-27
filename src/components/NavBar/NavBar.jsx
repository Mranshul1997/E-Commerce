import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import DarkMode from "./DarkMode";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";


const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/Trend",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/Best",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/Rated",
  },
];
const NavBar = ({handleOrderPopup,setOrderPopup,orderPopup}) => {
 
  return (
    <>
   <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* Logo and Links section */}
        <div className="flex items-center gap-4">
          <button
            href="#"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl 
"
          >
            Shopi-fy
          </button>
          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              {/* Dropdown  */}
              <li className="relative cursor-pointer group">
                <button
                  href="#"
                  className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                >
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </button>

                {/* Dropdown Links */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                  <ul className="space-y-2">
                    {DropdownLinks.map((data, index) => (
                      <li key={index}>
                        <button
                          className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          href={data.link}
                          
                        >
                          {data.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar Right section */}
        <div className="flex justify-between items-center gap-4">
          {/* Search Bar section */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="
            search-bar
            "
            />
            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
          </div>
          <span className="cursor-pointer">
            <FaMicrophone />
          </span>

          <span className="cursor-pointer mt-2 ">

           
              
              <Link to='/profile'><IoPeople/></Link>
            </span>

          {/* Order-button section */}
          <button className="relative p-3" onClick={handleOrderPopup}>
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              4
            </div>
          </button>
          {/* Dark Mode section */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    
  );
};

export default NavBar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
