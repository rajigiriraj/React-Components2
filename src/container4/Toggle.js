import React from 'react';
import { IoToggle } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";

export default function Toggle() {
  return (
    <div className='toggle'>
        <div><FaToggleOff color='rgb(107, 14, 228)' size={40}/></div>
        <div><IoToggle  color='rgb(107, 14, 228)' size={40}/></div>
    </div>
  )
}
