import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>

    
    <div className="h-14 flex justify-between">
      <div className="flex justify-start space-x-4  ml-52">
        <div className="flex flex-col justify-center">
          <img src="/logo.png" className="h-8 w-20 m-2" alt="logo" />
        </div>
        <div className="flex flex-col justify-center">
        <button 
            onClick={() => navigate('/dummy')} 
            type="button" 
            className="w-full text-white bg-[#1A73E8] hover:bg-[#DDEAFC] hover:text-[#000] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex items-center space-x-1"
          >
            <span>Courses</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4.79082L9.96875 0.818945C10.2625 0.525195 10.7375 0.525195 11.0281 0.818945C11.3187 1.1127 11.3187 1.5877 11.0281 1.88145L6.53125 6.38145C6.24687 6.66582 5.79062 6.67207 5.49687 6.40332L0.96875 1.88457C0.821875 1.7377 0.75 1.54395 0.75 1.35332C0.75 1.1627 0.821875 0.968945 0.96875 0.82207C1.2625 0.528321 1.7375 0.528321 2.02812 0.82207L6 4.79082Z" fill="white"/>
            </svg>
          </button>
           
        </div>
      </div>
      <div className="flex space-x-4 mr-52 text-sm font-medium">
        <Link className="flex flex-col justify-center hover:underline" to={"/dummy"}>
          Refer & Earn
        </Link>
        <Link className="flex flex-col justify-center hover:underline" to={"/dummy"}>
          Resources
        </Link>
        <Link className="flex flex-col justify-center hover:underline" to={"/dummy"}>
          About Us
        </Link>
        <Link className="flex flex-col justify-center" to={"https://accredian.com/login"}>
            <button type="button" className=" w-full bg-[#EAEDF1] hover:bg-[#1A73E8] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-black">Log In</button>   
        </Link>
        <div className="flex flex-col justify-center">
        <Link className="flex flex-col justify-center" to={"https://trial.accredian.com/"}>
            <button 
                type="button" 
                className="w-full text-white bg-[#1A73E8] hover:bg-[#DDEAFC] hover:text-[#000] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex items-center space-x-1"
            > Try For Free </button>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
}
