import React from 'react'

function Tips() {
  return (
    <div className='bg-black w-full md:grid grid-cols-2 '>
        <div>
      <h1 className='text-white mt-24 font-bold lg:text-3xl text-[23px] ml-4'>Want tips & tricks to optimize your flow ? </h1>
      <p className='text-white mt-2 ml-4'>sign up to our newsletter and stay up to date.</p></div>
      <div className='mt-16   '>
      <input type="text" placeholder='Enter your email ' className='rounded-md mt-10  px-4 py-2  w-[90%]  ml-6 mb-4 md:w-[40%]' />
      
      <button className='bg-[rgb(0,223,154)] md:ml-4 ml-[35%] rounded-md px-4 py-2 '>Nottify me</button>  <p className='text-white text-bold pt-6  mb-16 ml-4'>We care bout the protection of your data. Read our 
      <br />
      <a className=' text-[rgb(0,223,154)]' href="/"> Privacy Policy.</a> </p>
      </div>
    
    </div>
  )
}

export default Tips
