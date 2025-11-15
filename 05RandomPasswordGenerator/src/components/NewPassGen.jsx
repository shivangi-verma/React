import { MouseScroll } from "@phosphor-icons/react";
import React, { useState, useCallback, useEffect, useRef } from "react";

function NewPassGen() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  // useref hook
  const passwordRef = useRef(null);

  // const passwordGenerator = useCallback(() => {
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (numberAllowed) str += "0123456789";
  //   if (charAllowed) str += "!@#$%^&*()_+{}[]/.?<>:;~";

  //   const array = new Uint32Array(length);
  //   crypto.getRandomValues(array);

  //   const newPass = Array.from(array, (num) => str[num % str.length]).join("");
  //   setPass(newPass);
  // }, [length, numberAllowed, charAllowed]);

  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(pass);
  // }, [pass]);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]/.?<>:;~";

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    let newPass = "";

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
  console.log(pass);

  return (
    <>
      <h1 className="text-[170px] font-[Work_Sans] tracking-[-0.6rem] text-[#A9C5EA66]">
        Password Generator
      </h1>
      <div className="container">
        <h1
          className="text-[120px] font-[Inclusive_Sans] tracking-[-0.1rem] text-[#11121440] text-center text"
          ref={passwordRef}
        >
          {pass}
        </h1>
      </div>
      {/* controls */}
      <div className="controls flex justify-center gap-4  items-center">
        {/* slider */}
        <div className="slider flex bg-gray-100  p-2 rounded-2xl w-xs justify-evenly items-center">
          <MouseScroll size={32} weight="light" className="rotate-90" />
          <span className="p-2 cursor-pointer">8</span>
          <span className="p-2 cursor-pointer">12</span>
          <span className="p-2 cursor-pointer">16</span>
          <span className="p-2 cursor-pointer">24</span>
          <span className="bg-orange-200 text-white p-[8px] px-[4px] rounded-xl">
            <span className="bg-orange-500  p-[6px] rounded-xl cursor-pointer">
              {" "}
              32
            </span>
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
            id="number"
            name="choices"
            value="value1"
            className=" accent-black"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
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

      <div className=" footer absolute  m-auto w-full bottom-6 ">
        <span className=" text-[28px] font-[DM_Sans] text-[#11121480]  bottom-6 flex justify-center">
          Made by &nbsp; <span className="text-black">Shivangi</span>
        </span>
      </div>
    </>
  );
}

export default NewPassGen;
