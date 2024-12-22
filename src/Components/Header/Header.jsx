import React from 'react'
import { ReactTyped, Typed } from "react-typed";

const Header = () => {
  return (
    <div className="text-white">
      <div className="max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-[600] py-6">
          Grow with Data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className="md:text-4xl sm:text-3xl text-xl font-[550] py-4">
            Fast, flexible for financing for 
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-[550] md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-[500] text-gray-600 px-1'>Monitor your data analytics to increase your revenue for BTB, BTC & SASS platforms.</p>
        <button className='text-black bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-2.5'>Get Started</button>
      </div>
    </div>
  );
}

export default Header