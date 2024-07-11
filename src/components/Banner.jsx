import React from 'react'
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <>
        
        <div className="h-14 bg-[#DDEAFC] font-medium text-[#262626] flex justify-center">
            <div className="flex flex-col justify-center h-full ml-4">
            Navigate your ideal career path with tailored expert advice
            </div>
            <Link className="text-[#1A73E8] flex flex-col justify-center no-underline pointer underline pl-1 cursor-pointer ml-2" to={"/dummy"}>
            Contact Expert
            </Link>
        </div>
    </>
  )
}
