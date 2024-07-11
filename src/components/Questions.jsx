import React from 'react'

export default function Questions() {
  return (
    <div>
        <div className="text-center mt-[5%] text-lg font-medium">
        Frequently Asked <span className='text-[#1A73E8]'> Questions</span>
      </div>



      <div className='flex justify-between font-normal mt-[2%] mr-[13%] ml-[13%]'>
        <div className="relative  w-[22%]">
            <button className="w-full h-14 mb-4 text-[#1A73E8] bg-white border-[#E2E8F0] font-bold py-2 px-4 rounded-md border-gray-300 drop-shadow-xl">
                Eligibility
            </button>
            <button className="w-full h-14 mb-4 text-[#737373] bg-white border-2 border-[#737373] font-bold py-2 px-4 rounded-md border-gray-300 ">
                How To Use?
            </button>
            <button className="w-full h-14 mb-4 text-[#737373] bg-white border-2 border-[#737373] font-bold py-2 px-4 rounded-md border-gray-300 ">
                Terms & Conditions
            </button>
        </div> 

        <div className="relative pl-8 w-[76%]">
          <p className='text-[#1A73E8] text-base font-semibold flex justify-between items-center'>
            <span className='mr-3'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40976 7.40997L5.99976 2.82997L10.5898 7.40997L11.9998 5.99997L5.99976 -2.67029e-05L-0.000244141 5.99997L1.40976 7.40997Z" fill="black" fill-opacity="0.54"/>
            </svg>
          </p>
          <p className='mr-3 mt-3 font-normal text-sm'>  No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
          suitable for individuals from any field of work.</p>
          <br/>
          <p className='text-black font-semibold flex justify-between items-center'>
            <span className='mr-3'>What is the minimum system configuration required?</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4.79082L9.96875 0.818945C10.2625 0.525195 10.7375 0.525195 11.0281 0.818945C11.3187 1.1127 11.3187 1.5877 11.0281 1.88145L6.53125 6.38145C6.24687 6.66582 5.79062 6.67207 5.49687 6.40332L0.96875 1.88457C0.821875 1.7377 0.75 1.54395 0.75 1.35332C0.75 1.1627 0.821875 0.968945 0.96875 0.82207C1.2625 0.528321 1.7375 0.528321 2.02812 0.82207L6 4.79082Z" fill="black"/>
            </svg>
          </p>
        </div> 
      </div>
   
    </div>
  )
}
