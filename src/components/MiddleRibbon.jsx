import React from 'react'

export default function MiddleRibbon() {
  return (
    <>
        <div className='flex justify-center space-x-20 bg-[#DDEAFC] mt-10 ml-[30%] mr-[30%] h-12 text-lg rounded-full'>
            <div className="flex flex-col justify-center text-[#1A73E8]">
                Refer
                {/* <div className="flex items-center space-x-2">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1A73E8"/>
                    </svg>
                </div> */}
            </div>
            <div className="flex flex-col justify-center">
                Benefits
            </div>
            <div className="flex flex-col justify-center">
                FAQs
            </div>
            <div className="flex flex-col justify-center">
                Support
            </div>
        </div>
    </>
  )
}
