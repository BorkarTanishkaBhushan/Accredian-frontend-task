import React, { useState } from 'react'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div className='flex justify-between mt-24 bg-[#EEF5FF] mr-[13%] ml-[13%] rounded-3xl'>
            <div className='text-left ml-10 mt-20'>
                <div className='text-7xl font-bold'> 
                Let’s Learn <br/>
                & Earn
                </div>
                <div className='text-2xl mt-8'>
                    Get a chance to win  
                    <br />
                    up-to <span className='text-[#1A73E8] font-bold text-4xl'>Rs. 15,000</span>
                </div>
                <div>
                <button 
                    onClick={openModal}
                    className="mt-12 w-[30%] text-white bg-[#1A73E8] hover:bg-[#DDEAFC] hover:text-[#000] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex items-center space-x-1"
                >
                    Refer Now
                </button>
            </div>
            </div>
            <div className='text-center text-gray-600 mr-10'>
                <img src="/heroimg.png" className='h-auto max-w-lg'/>
            </div>
            
            {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl mb-4">Refer a Course</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referrerName">
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="referrerName"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referrerEmail">
                  Your Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="referrerEmail"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeName">
                  Friend's Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="refereeName"
                  type="text"
                  placeholder="Friend's Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeEmail">
                  Friend's Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="refereeEmail"
                  type="email"
                  placeholder="Friend's Email"
                />
              </div>
              <div className="flex items-center justify-between">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="button"
                >
                  Submit
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        </div>
    </>
  )
}
