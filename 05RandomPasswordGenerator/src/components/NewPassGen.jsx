import { MouseScroll, ShieldStar } from "@phosphor-icons/react";
import React, { useState, useCallback, useEffect, useRef } from "react";
import icon1 from "../assets/Solid_head_heart.svg";
import icon2 from "../assets/carbon_array_numbers.svg";
import { Checkbox } from "@radix-ui/themes";
// import { Solid_head_heart, carbon_array_numbers } from "../assets";

function NewPassGen() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");
  // useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]/.?<>:;~";

    let newPass = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      newPass += str[array[i] % str.length];
    }

    // ensure at least one number if numberAllowed
    if (numberAllowed && !/[0-9]/.test(newPass)) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomDigit = Math.floor(Math.random() * 10).toString();
      newPass =
        newPass.substring(0, randomIndex) +
        randomDigit +
        newPass.substring(randomIndex + 1);
    }

    setPass(newPass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col w-full h-screen justify-between pb-6 ">
        <span className="text-[170px] font-[Work_Sans] tracking-[-0.6rem] text-[#A9C5EA66]  leading-none ">
          Password Generator
        </span>

        {/* password and controls */}
        <div className="container-max">
          <div className="container">
            <span
              className="text-[6rem] font-[Inclusive_Sans] tracking-[-0.1rem] text-[#11121440] flex justify-center"
              ref={passwordRef}
            >
              {pass}
            </span>
          </div>
          {/* controls */}
          <div className="controls flex justify-center gap-4  items-center">
            {/* slider */}
            <div className="slider flex bg-gray-100  p-2 rounded-2xl w-xs justify-evenly items-center">
              <MouseScroll size={32} weight="light" className="rotate-90" />
              <button
                className="p-2 cursor-pointer"
                onClick={() => {
                  setLength("8");
                }}
              >
                8
              </button>
              <button
                className="p-2 cursor-pointer"
                onClick={() => {
                  setLength("12");
                }}
              >
                12
              </button>
              <button
                className="p-2 cursor-pointer"
                onClick={() => {
                  setLength("16");
                }}
              >
                16
              </button>
              <button
                className="p-2 cursor-pointer"
                onClick={() => {
                  setLength("24");
                }}
              >
                24
              </button>

              {/* <button
                className="bg-orange-500  p-[6px] rounded-xl cursor-pointer"
                onClick={() => {
                  setLength("32");
                }}
              >
                32
              </button> */}
            </div>
            {/* num */}
            <div className="bg-gray-100 rounded-2xl p-4  flex gap-8  ">
              {/* numbers label */}
              <div className="label_num flex gap-2">
                <img src={icon2} alt="" />
                <label htmlFor="option1" className=" ">
                  I want numbers in there!
                </label>
              </div>
              {/* numbers checkbox */}
              {/* <input
                type="checkbox"
                id="number"
                name="choices"
                value="value1"
                className=" accent-black"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              /> */}
              <Checkbox
                color="orange"
                defaultChecked
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
            </div>
            {/* char */}
            <div className="bg-gray-100 rounded-2xl p-4  flex justify-evenly w-xs ">
              <img src={icon1} alt="" />

              {/* char label */}
              <label htmlFor="option1" className=" ">
                I want characters in there!
              </label>
              {/* char checkbox */}

              <input
                type="checkbox"
                id="char"
                name="choices"
                value="value1"
                className=" accent-black"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className=" footer  ">
          <span className=" text-[28px] font-[DM_Sans] text-[#11121480]  flex justify-center">
            Made by &nbsp; <span className="text-black">Shivangi</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default NewPassGen;
