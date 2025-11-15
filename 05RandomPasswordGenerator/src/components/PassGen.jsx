// import React, { useState, useCallback, useEffect, useRef } from "react";

// function PassGen() {
//   const [length, setLength] = useState(6);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [pass, setPass] = useState("");

//   // useref hook
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*()_+{}[]/.?<>:;~";

//     const array = new Uint32Array(length);
//     crypto.getRandomValues(array);

//     pass = Array.from(array, (num) => str[num % str.length]).join("");
//     setPass(pass);
//   }, [length, numberAllowed, charAllowed]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(pass);
//   }, [pass]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);
//   return (
//     <>
//       <h1 className="text-[170px] text-[#A9C5EA66] font-[Work_Sans] tracking-[-0.06em] p-0 m-0 text-center">
//         Password Generator
//       </h1>
//       <input
//         className="text-[120px] text-[#11121440] font-[DM_Sans] tracking-[-0.02em] p-0 m-0 text-center"
//         ref={passwordRef}
//         value={pass}
//         readOnly
//       />
//       <div className="controls flex w-screen justify-center items-center gap-6">
//         <div className=" bg-[#F3F3F4] p-4 w-[300px] rounded-3xl  flex justify-evenly items-center">
//           {/* numbers label */}
//           <label htmlFor="option1" className="  font-[600] font-[DM_Sans]">
//             I want numbers in there!
//           </label>
//           {/* numbers checkbox */}

//           <input
//             type="checkbox"
//             id="option1"
//             name="choices"
//             value="value1"
//             className=" accent-black h-5 w-5 items-center "
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//           />
//         </div>
//         <div className=" bg-[#F3F3F4] p-4 w-[300px] rounded-3xl  flex justify-evenly items-center">
//           {/* char label */}
//           <label htmlFor="option1" className="  font-[600] font-[DM_Sans]">
//             Make it more secure!
//           </label>
//           {/* char checkbox */}

//           <input
//             type="checkbox"
//             id="option1"
//             name="choices"
//             value="value1"
//             className=" accent-black h-5 w-5 items-center "
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default PassGen;
