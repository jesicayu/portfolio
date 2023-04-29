import React from 'react'
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector} from 'react-redux';
import { setTheme } from '@/state/theme';

export const Toggle = () => {
  const theme = useSelector(state => state.theme.mode)
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    console.log(theme)
    const newTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(newTheme))
  };

  return (
    <button onClick={toggleDarkMode}>
      {theme === 'dark' ? <FiSun size={20}  className="mt-1"/> : <BiMoon size={20} className="mt-1"/>}
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