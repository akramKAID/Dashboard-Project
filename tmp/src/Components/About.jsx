import React from 'react'
import{
FaFacebookSquare,
FaGithubSquare,
FaInstagram,
FaTwitter,
FaDribbbleSquare,
}from 'react-icons/fa'

function About() {
  return (
    <div className='bg-black max-w-[1240px]'>
       <div className='grid lg:grid-cols-2 gap-8  text-gray-300'>
        <div className='ml-4'>
            <h1 className='text-[rgb(0,223,154)] md:text-2xl text-xl font-bold mt-14 '>REACT.</h1>
            <p className='mt-4  font-semibold text-[14px]'>Thank you for visiting our website! We're grateful for your interest and hope you found valuable information here. Please feel free to reach out if you have any questions or feedback.</p>
            <div className='flex items-center justify-between md:w-[75%] mr-8 md:mb-8  mt-6 ml-20 '>
                <FaFacebookSquare size={26}  className='hover:text-green-400'/>
                <FaTwitter size={26} className='hover:text-green-400'/>
                <FaInstagram size={26} className='hover:text-green-400'/>
                <FaGithubSquare size={26} className='hover:text-green-400'/>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-8 mt-20 text-[16px] ml-8 '>
            <ul>
                <li  className='hover:cursor-pointer hover:underline hover:text-green-400 '>Solutions</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Analytics</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Marketing</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Commerce</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Projects</li>
            </ul>
            <ul>
                <li className='hover:cursor-pointer hover:underline  hover:text-green-400'>Support</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Pricing</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Documentation</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Guides</li>
                <li className='hover:cursor-pointer hover:underline hover:text-green-400'>API Status</li>
            </ul>
            <ul>
            <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Company</li>
            <li className='hover:cursor-pointer hover:underline hover:text-green-400'>About</li>
            <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Blog</li>
            <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Jobs</li>
            <li className='hover:cursor-pointer hover:underline hover:text-green-400'>Press</li>
            </ul>
      
        </div>
       </div>
    </div>
  )
}

export default About
