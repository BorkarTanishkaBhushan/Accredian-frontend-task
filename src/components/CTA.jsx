import React from 'react';

function CTA() {
  return (
    <div className='text-center mt-[5%] text-lg font-medium'>
      <div className="relative bg-blue-600 border border-blue-600 rounded-lg mx-auto mr-[13%] ml-[13%]">
      <div className='ml-10 mt-12 mb-12 flex justify-between'>
          <div className='flex justify-start '>
            <div>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" rx="12" fill="#E2E8F0" fill-opacity="0.35"/>
            <rect x="4" y="4" width="72" height="72" rx="12" fill="white"/>
            <path d="M61 30.6667C63.5774 30.6667 65.6667 32.756 65.6667 35.3334V44.6667C65.6667 47.2441 63.5774 49.3334 61 49.3334H58.5223C57.374 58.5414 49.5191 65.6667 40 65.6667V61C47.732 61 54 54.732 54 47V33C54 25.2681 47.732 19 40 19C32.268 19 26 25.2681 26 33V49.3334H19C16.4227 49.3334 14.3334 47.2441 14.3334 44.6667V35.3334C14.3334 32.756 16.4227 30.6667 19 30.6667H21.4778C22.626 21.4587 30.4809 14.3334 40 14.3334C49.5191 14.3334 57.374 21.4587 58.5223 30.6667H61ZM30.1054 48.8315L32.5791 44.8737C34.7305 46.2212 37.2742 47 40 47C42.7258 47 45.2696 46.2212 47.421 44.8737L49.8948 48.8315C47.0262 50.6281 43.6344 51.6667 40 51.6667C36.3656 51.6667 32.974 50.6281 30.1054 48.8315Z" fill="#1A73E8"/>
            </svg>
          </div>
            <div className="text-left ml-8">
            <h1 className="text-white mt-2 text-2xl font-semibold leading-none">Want to delve deeper into the program?</h1>
            <h4 className="text-gray-200 mt-4 text-lg font-medium leading-none mt-2">Share your details to receive expert insights from our program team!</h4>
          </div>  
          </div>

          <div>
          
          <button className="absolute right-[49px] top-1/2 transform -translate-y-1/2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-md flex items-center shadow-md items-center">
        Get in touch
        <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64604 1.64599C1.69248 1.59943 1.74766 1.56249 1.80841 1.53728C1.86915 1.51207 1.93427 1.4991 2.00004 1.4991C2.06581 1.4991 2.13093 1.51207 2.19167 1.53728C2.25242 1.56249 2.30759 1.59943 2.35404 1.64599L8.35404 7.64599C8.4006 7.69244 8.43754 7.74761 8.46275 7.80836C8.48796 7.86911 8.50093 7.93423 8.50093 7.99999C8.50093 8.06576 8.48796 8.13088 8.46275 8.19163C8.43754 8.25237 8.4006 8.30755 8.35404 8.35399L2.35404 14.354C2.26015 14.4479 2.13281 14.5006 2.00004 14.5006C1.86726 14.5006 1.73993 14.4479 1.64604 14.354C1.55215 14.2601 1.49941 14.1328 1.49941 14C1.49941 13.8672 1.55215 13.7399 1.64604 13.646L7.29304 7.99999L1.64604 2.35399C1.59948 2.30755 1.56253 2.25237 1.53733 2.19163C1.51212 2.13088 1.49915 2.06576 1.49915 1.99999C1.49915 1.93423 1.51212 1.86911 1.53733 1.80836C1.56253 1.74761 1.59948 1.69244 1.64604 1.64599Z" fill="blue-600" stroke="blue-600" stroke-width="2.5"/>
        </svg>
      </button>
          </div>
          
          
      </div>
      </div>
    </div>
  );
}

export default CTA;


