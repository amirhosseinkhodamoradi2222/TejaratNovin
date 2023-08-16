import React from 'react'
import { BiLogoLinkedin , BiLogoLinkedinSquare } from "react-icons/bi";

function Linkedin() {
  return (
    <>
    <div className='w-2/3 h-36 bg-purple my-12 ml-14 rounded-lg shadow'>
    <div className='grid grid-rows-1 grid-cols-3'>
      <div className='col-span-1'>
        <BiLogoLinkedin className='text-whate opacity-50' size={140}/>
      </div>
      <div className='col-span-2 text-whate mt-8'>
        <p className='font-Regular mr-4 m-0 text-lg'>لینکدین مرا دنبال کنید</p>
        <div className='flex justify-end ml-6 mt-4'>
        <BiLogoLinkedinSquare className='text-whate m-0' size={40}/>
        <button className='font-light rounded pt-1 text-center px-4' >Follow</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Linkedin