import React from 'react'
import Circles from './Circles';

export default function Section2() {
  return (
    <>
        <div className='flex justify-center text-lg font-medium mt-[5%] bg-[#EEF5FF] '>
            <div className='mt-8'>
                <div className="text-center">
                    How Do I <span className='text-[#1A73E8]'>Refer?</span>
                </div>
                <div className='mt-8'>
                <Circles/>
                </div>
                <div className='mt-8 flex justify-center'>
                <button className="mb-8 w-[8%] text-white bg-[#1A73E8] hover:bg-[#DDEAFC] hover:text-[#000] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex items-center space-x-1">
                    Refer Now
                </button>
                </div>
            </div>
            
        </div>

    </>
  )
}
