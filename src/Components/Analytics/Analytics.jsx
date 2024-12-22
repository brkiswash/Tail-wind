import React from "react";
import Laptop from "/src/assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dolore consequuntur modi suscipit et iure libero doloribus animi
            aspernatur ad, alias accusantium reiciendis maiores ratione hic
            quisquam voluptas ipsam autem.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0 py-2.5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;