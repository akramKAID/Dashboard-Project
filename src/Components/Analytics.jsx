import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className=' w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={Laptop} alt="/" />
          <div className='mt-12'>
                <p className='text-[rgb(0,223,154)] font-md space-x-2 text-xl'>DATA ANALYTCS DASHBOARD</p>
                <h1 className='text-black font-bold text-2xl py-4'>Manage Data Analytics Centrally</h1>
                <p className=' py-2'>
                Data analytics is the process of examining raw data to uncover insights, trends, and patterns that can inform decision-making and drive business success. By applying statistical and mathematical techniques, data analytics transforms data into actionable information, helping organizations understand their customers, optimize operations, and identify opportunities for growth. Whether it's analyzing customer behavior, forecasting market trends, or optimizing supply chain operations, data analytics empowers businesses to make data-driven decisions, improve efficiency, and stay ahead of the competition. With the rise of big data and advanced analytics tools, data analytics has become an essential tool for organizations of all sizes to unlock the full potential of their data and drive innovation in today's digital economy.
                </p>
                <button className=' bg-black  w-[200px] rounded-md font-medium my-6 ml-[30%] md:mx-0  py-3 text-[rgb(0,223,154)]'>GET STARTED</button>
          </div>
  
        </div>
  

    </div>
  )
}

export default Analytics
