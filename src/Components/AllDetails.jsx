import React from "react";
import { IoMenu } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

function AllDetails() {
  return (
    <div className="border border-gray-300 rounded-lg m-4 p-1">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-semibold">Burman Hospitality Pvt. Ltd.</h1>
          <div className="flex items-center">
            <h2 className="text-gray-500 text-sm">
              <span className="text-xl">●</span> Delhi
              <span className="text-xl">●</span> Central Delhi
              <span className="text-xl">●</span> 110002 
              <b className="text-black"> |</b>  Created on: 1 Jul 2022
              <b className="text-black"> | </b>
              <span className="text-xs ml-1 bg-[#e5efff] text-blue-600 font-medium rounded-2xl py-1 px-3">
                POSTPAID
              </span>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <HiMenu className="text-3xl text-blue-600" />
          <button className="bg-blue-600 flex items-center gap-1 text-xs font-semibold text-white px-5 py-1 text-center rounded-xl">
            <span className="text-2xl font-normal ">+</span> Raise Query
          </button>
        </div>
      </div>

      <div className="border-y flex border-gray-300 items-center">
        <div className="flex justify-between  items-center my-2 w-[30%] text-sm mr-24">
          <div>
            <div>10,00,000</div>
            <div className="text-gray-400">Total Revenue</div>
          </div>
          <div>
            <div>7,00,000</div>
            <div className="text-emerald-400 ">Payment Received</div>
          </div>
          <div>
            <div>1,00,000</div>
            <div className="text-blue-400">Not Yet Due</div>
          </div>
        </div>
        <span className="text-4xl font-extralight">|</span>
        <div className="text-red-500  text-sm px-24 ">
          Payment <br /> Overdue
        </div>

        <div className="flex w-[20%] justify-between items-center text-sm">
          <div className="text-center">
            <div>20,000</div>
            <div className="text-yellow-500 font-semibold">A</div>
          </div>
          <div className="text-center">
            <div>50,000</div>
            <div className="text-yellow-600 font-semibold">B</div>
          </div>
          <div className="text-center">
            <div>50,000</div>
            <div className="text-yellow-700 font-semibold">C</div>
          </div>
          <div className="text-center">
            <div>30,000</div>
            <div className="text-red-700 font-semibold">D</div>
          </div>
        </div>
      </div>

      <div className="flex  justify-between w-[80%] py-4">
        <div className="text-start">
          <div className="text-xs mb-1 text-gray-400">Lead Category - Source</div>
          <div className="text-sm font-medium">Others - References</div>
        </div>
        <div className="text-start">
          <div className="text-xs mb-1 text-gray-400">Latest Category - Lead source</div>
          <div className="text-sm font-medium">-</div>
        </div>
        <div className="text-start">
          <div className="text-xs mb-1 text-gray-400">Last Updated</div>
          <div className="text-sm font-medium">07 Nov 2023</div>
        </div>
        <div className="text-start text-xs">
          <div className=" mb-1 text-gray-400">Total Outstanding</div>
          <div className="text-red-600 font-medium">10,00,000</div>
        </div>
        <div className="text-start text-xs">
          <div className=" mb-1 text-gray-400">Last Order Date</div>
          <div className="text-red-600 font-medium">10 Dec 2023 03:30 PM</div>
        </div>
      </div>
    </div>
  );
}

export default AllDetails;
