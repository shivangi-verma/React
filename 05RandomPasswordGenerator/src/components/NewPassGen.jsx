import { MouseScroll } from "@phosphor-icons/react";
import React from "react";

function NewPassGen() {
  return (
    <>
      <h1 className="text-[170px] font-[Work_Sans] tracking-[-0.6rem] text-[#A9C5EA66]">
        Password Generator
      </h1>
      <h1 className="text-[120px] font-[DM_Sans] tracking-[-0.1rem] text-[#11121440] text-center">
        RandomPass
      </h1>
      {/* controls */}
      <div className="controls flex justify-center gap-4  items-center">
        {/* slider */}
        <div className="slider flex bg-gray-100  p-2 rounded-2xl w-xs justify-evenly items-center">
          <MouseScroll size={32} />
          <span className="p-2">8</span>
          <span className="p-2">12</span>
          <span className="p-2">16</span>
          <span className="p-2">24</span>
          <span className="bg-orange-200 text-white p-[8px] px-[4px] rounded-xl">
            <span className="bg-orange-500  p-[6px] rounded-xl"> 32</span>
          </span>
        </div>
        {/* num */}
        <div className="bg-gray-100 rounded-2xl p-4  flex justify-evenly w-xs ">
          {/* numbers label */}
          <label htmlFor="option1" className=" ">
            I want numbers in there!
          </label>
          {/* numbers checkbox */}

          <input
            type="checkbox"
            id="option1"
            name="choices"
            value="value1"
            className=" accent-black"
          />
        </div>
        {/* char */}
        <div className="bg-gray-100 rounded-2xl p-4  flex justify-evenly w-xs ">
          {/* char label */}
          <label htmlFor="option1" className=" ">
            I want characters in there!
          </label>
          {/* char checkbox */}

          <input
            type="checkbox"
            id="option1"
            name="choices"
            value="value1"
            className=" accent-black"
          />
        </div>
      </div>

      <div className=" footer absolute  m-auto w-full bottom-6 ">
        <span className=" text-[28px] font-[DM_Sans] text-[#11121480]  bottom-6 flex justify-center">
          Made by &nbsp; <span className="text-black">Shivangi</span>
        </span>
      </div>
    </>
  );
}

export default NewPassGen;
