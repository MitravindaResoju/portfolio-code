import React, { useEffect } from 'react'
import Parul from '../Photos/Parul.jpeg'
import MohanBabu from '../Photos/MohanBabu.png'
import Vignan from '../Photos/Vignan.png'


// Register the ScrollTrigger plugin


function Experience() {

  return (
    <div className='bg-gray-50 p-4 pb-12'>
      <center><h1 className='text-3xl mt-8'>Experience</h1></center>
      <div className="mt-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg mx-4 hover:shadow-xl duration-200 md:p-10 md:mx-16 xl:mx-60 box">
          <div className="flex items-center flex-col md:flex-row md:justify-around">
            <img src={Parul} alt="" className='size-24 mr-6' />
            <div className='flex flex-col'>
              <div className='flex justify-around items-center pt-3'>
                <h3 className="text-xl font-bold mr-24">Technical Trainer</h3>
                <p className="mt-1 text-gray-600">Nov 2021 - Present</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Developed and maintained web applications</li>
                <li>Collaborated with designers and backend developers</li>
                <li>Implemented responsive design and ensured cross-browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg mx-4 hover:shadow-xl duration-200 md:p-10 md:mx-16 xl:mx-60 box">
          <div className="flex items-center flex-col md:flex-row md:justify-around">
            <img src={MohanBabu} alt="" className='w-40 mr-6' />
            <div className='flex flex-col'>
              <div className='flex justify-around items-center pt-3'>
                <h3 className="text-xl font-bold mr-24">Technical Trainer</h3>
                <p className="mt-1 text-gray-600">March 2023 - Dec 2023</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Developed and maintained web applications</li>
                <li>Collaborated with designers and backend developers</li>
                <li>Implemented responsive design and ensured cross-browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg mx-4 hover:shadow-xl duration-200 md:p-10 md:mx-16 xl:mx-60 box">
          <div className="flex items-center flex-col md:flex-row md:justify-around">
            <img src={Vignan} alt="" className='size-24 mr-6' />
            <div className='flex flex-col'>
              <div className='flex justify-around items-center pt-3'>
                <h3 className="text-xl font-bold mr-24">Technical Trainer</h3>
                <p className="mt-1 text-gray-600">Jan 2022 - Aug 2022</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Developed and maintained web applications</li>
                <li>Collaborated with designers and backend developers</li>
                <li>Implemented responsive design and ensured cross-browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
