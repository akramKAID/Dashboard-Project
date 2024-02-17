import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-xl rounded-md p-4 my-4 flex flex-col hover:scale-105 duration-300'>
                <img className='w-[80px] mx-auto mt-[-3rem] bg-white  ' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center py-4 text-4xl font-bold mb-2'>$149</p>
                <div className='text-center text-[20px] '>
                <p className='py-2'>500 GB Storage</p>
                <p className='py-2'> 1 Granted User</p>
                <p className='py-2'> Send up to 2 GB</p> 
                </div>
                <button className='mt-4 bg-[rgb(0,223,154)] text-black font-bold w-[40%] mx-auto rounded-md p-2'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl rounded-md p-4  flex flex-col hover:scale-105 duration-300 bg-slate-100 md:my-0 my-8'>
                <img className='w-[80px] mx-auto mt-[-3rem] bg-transparent  ' src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Double Users</h2>
                <p className='text-center py-4 text-4xl font-bold mb-2'>$250</p>
                <div className='text-center text-[20px] '>
                <p className='py-2'> 1 TB Storage</p>
                <p className='py-2'> 2 Granted User</p>
                <p className='py-2'> Send up to 5 GB</p> 
                </div>
                <button className='mt-4 bg-black text-[rgb(0,223,154)] font-bold w-[40%] mx-auto rounded-md p-2'>Start Trial</button>
            </div>


            <div className='w-full shadow-xl rounded-md p-4  flex flex-col hover:scale-105 duration-300 my-8'>
                <img className='w-[80px] mx-auto mt-[-3rem] bg-white  ' src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple Users</h2>
                <p className='text-center py-4 text-4xl font-bold mb-2'>$300</p>
                <div className='text-center text-[20px] '>
                <p className='py-2'>2 TB Storage</p>
                <p className='py-2'> 3 Granted User</p>
                <p className='py-2'> Send up to 10 GB</p> 
                </div>
                <button className='mt-4 bg-[rgb(0,223,154)] text-black font-bold w-[40%] mx-auto rounded-md p-2'>Start Trial</button>
            </div>
            
           
        </div>
      
    </div>
  )
}

export default Cards
