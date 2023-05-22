import React, { useState } from 'react'
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

export const Toggle = () => {
const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
   setIsDarkMode(!isDarkMode);
   if(!isDarkMode){
    document.documentElement.classList.add('dark')
   } else {
    document.documentElement.classList.remove('dark')
   }

  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <FiSun size={22} style={{color: "#FFF9F3"}}  className="mt-1"/> : <BiMoon  size={22} className="mt-1"/>}
    </button>
  );
};


// export const Toggle = () => {
//   return (
//     <label for="check" className="relative border-2 border-custom-black h-8 w-16 rounded-full block cursor-pointer">
//     <input type="checkbox" id="check" className="sr-only peer"></input>
//     <span className="w-6 h-6 bg-custom-orange absolute rounded-full left-1 top-0.5 peer-checked:bg-custom-lilac peer-checked:left-8 transition-all duration-500" ></span>
//   </label>
//   )
// }