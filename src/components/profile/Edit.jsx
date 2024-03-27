import React from 'react'

const Edit = () => {
  return (
    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex flex-col items-center justify-center '>
        <h3 className='font-semibold text-xl m-2'>Edit your profile</h3>
        {/* <br /> */}
        {/* <hr /> */}
        <form action="">
            <input className='h-10 w-[250px]' type="text" placeholder='username' />
            <br />
            <br />
            <input className='h-10 w-[250px]' type="password" placeholder='enter your new password' />
             <br />
             <br />
            <button className='h-10 w-[100px] bg-green-600 font-semibold'>Update</button>
        </form>

    </div>
  )
}

export default Edit