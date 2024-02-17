import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='text-white '>
       <div className='max-w-[800%] mt-[-96px] w-full h-screen mx-auto   flex flex-col justify-center text-center'>
       <p className='text-[rgb(0,223,154)] font-bold p-2'>GROWING WITH DATA ANALYICS</p>
       <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
       <div className='flex justify-center items-center '>
        <p  className='md:text-3xl sm:text-2xl text-xl fort-bold  py-4'> Fast  flexible financing for </p>
        <ReactTyped className='md:text-4xl sm:text-3xl text-xl fort-bold    md:pl-4 pl-2 '
        strings={['BTB','BTC','SASS'] } 
        typeSpeed={120}
         backSpeed= {140}
         loop
         />
        
        </div>
        <p className=' md:text-2xl text-xl font-bold pt-2 text-gray-500'>Monitor your data analytics to increase revenue for BTB , BTC & SASS platforms . </p>
        <button className=' bg-[rgb(0,223,154)]  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>GET STARTED</button>
       </div>
    </div>
  )
}

export default Hero
