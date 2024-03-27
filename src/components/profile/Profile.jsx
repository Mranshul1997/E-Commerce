import React from 'react'
import { IoPeople } from 'react-icons/io5'
import { IoCloseOutline } from "react-icons/io5";
import Edit from './Edit';

const Profile = () => {
    let [edprofile,setEdprofile]=React.useState(false)
    const edit=()=>{
        setEdprofile(true);
    }
  return (
    <>
    { edprofile?<Edit/>: <div className='flex items-center justify-center dark:bg-gray-900  duration-200 bg-black/50 z-50 backdrop-blur-sm'>
       <div className='h-1/2 m-12 bg-slate-200 rounded-lg p-2 bg-black-700'>
        {/* <IoCloseOutline/> */}
        <div className='flex flex-col items-center'>
        <IoPeople className='h-[100px] w-[100px] m-2 p-2 border border-solid border-black rounded-full' />
        <h1 className='text-lg font-semibold' >Nandani Sethiya</h1>
        <p>nandani20sethiya@gmail.com</p>
        </div>
        <hr />

        <div className='h-[250px]  border    bg-red-200 mt-4 p-2 flex flex-col '>
            <p className='bg-white h-8  m-2 p-1'>Your Orders</p>
            <p className='bg-white h-8 m-2 p-1'>Wishlist</p>
            <p className='bg-white h-8 m-2 p-1' onClick={edit}>Edit your profile</p>
        </div>



    </div>
       
    

       </div>
    

    }
        
      
    </>
  )
}

export default Profile