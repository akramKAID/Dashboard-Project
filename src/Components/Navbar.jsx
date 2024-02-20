import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai";

function Navbar() {
 const[nav , setNav ] = useState(false);

 
 const handleNav = ()=>{
    setNav(!nav)
 }
 
  return  (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ' onFocus={handleNav} >
       <h1 className='w-full text-3xl font-bold text-[#00df9a]  '>REACT.</h1>
       <ul className= 'hidden md:flex gap-4 hover:cursor-pointer hover:p-4 hover:text-white'>
        <li className='p-4 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white'>Home</li>
        <li className='p-4 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white'>Company</li>
        <li className='p-4 hover:bg-gray-400 hover:rounded-md duration-300  hover:border-none hover:cursor-pointer hover:p-4 hover:text-white'>Resources</li>
        <li className='p-4 hover:bg-gray-400 hover:rounded-md hover:cursor-pointer hover:p-4 hover:text-white'>About</li>
        <li className='p-4 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white'>Contacs</li>
       </ul>
       <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
       
       </div>
       <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'} >
       <h1 className='w-full text-3xl font-bold text-[#00df9a]  '>REACT.</h1>
        <ul className=' m-4 uppercase   p-4'>
        <li className='p-4 border-b border-gray-600 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white hover:border-none '>Home</li>
        <li className='p-4 border-b border-gray-600 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white hover:border-none '>Company</li>
        <li className='p-4 border-b border-gray-600 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white hover:border-none '>Resources</li>
        <li className='p-4 border-b  border-gray-600 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white hover:border-none '>About</li>
        <li className='p-4 hover:bg-gray-400 hover:rounded-md duration-300 hover:cursor-pointer hover:p-4 hover:text-white'>Contacs</li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
