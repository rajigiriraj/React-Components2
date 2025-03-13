import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { MdWindow } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

export default function Home() {
  return (
    <div className='home'>
        <span><GoHomeFill color='rgb(107, 14, 228)' size={17}/></span>
        <span><MdWindow color='rgb(45, 19, 80)' size={17}/></span>
        <span><IoIosContact color='rgb(45, 19, 80)' size={17}/></span>
    </div>
  )
}
