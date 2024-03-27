import React from 'react'
import Home from '../home/Home';
import { IoCloseOutline } from "react-icons/io5";

const Thank = () => {
  const [visible, setVisible] = React.useState(false); // Initialize visible state to true to render the default content

  const close = () => {
    setVisible(true); // Set visible state to false when closing
  };
  return (
    <>
    {visible?(<Home/>):(<div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm '>
       
      <center>
        <div className='h-[50vh] w-[25vw] bg-white  dark:bg-gray-900  duration-200 border-green-300 flex items-center justify-evenly flex-col shadow-lg shadow-green-500 rounded-xl'>
        <div className="w-10  float-end rounded-full m-2 flex justify-end p-2 cursor-pointer relative">
            <IoCloseOutline
              onClick={close}
              className="text-2xl cursor-pointer flex items-end  "
            />
          </div>
            <img  className='h-[30vh] w-[15vw]' src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" alt="" />
            <h1 className='text-3xl text-green-500 '>Order Placed Successfully</h1>       
        </div>
    </center>
    </div>)}
    
    </>
  )
}

export default Thank