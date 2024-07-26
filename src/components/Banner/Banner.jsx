import React from 'react'
import w1 from '../../assets/Woman/w1.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodChain, GiFoodTruck } from 'react-icons/gi'
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 '>
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center  ">
          {/* image section  */}
          <div data-aos="zoom-in" >
            <img src={w1} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
          </div>
          {/* text deatils  */}
          <div className='flex flex-col justify-center gap-6 p-6 sm:p-0'>
            <h1 className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% Off</h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur odit corporis aut nulla quod architecto, voluptate fuga molestias illum qui?</p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4' data-aos='fade-up'>
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                <p>Quality Products</p>
              </div>
              <div className='flex items-center gap-4' data-aos='fade-up'>
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                <p>Quality Products</p>
              </div>
              <div className='flex items-center gap-4' data-aos='fade-up'>
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                <p>Quality Products</p>
              </div>
              <div className='flex items-center gap-4' data-aos='fade-up'>
                <GiFoodChain className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                <p>Quality Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
