import React from 'react';
import { FaBackwardStep } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa6";
import { IoCaretForwardOutline } from "react-icons/io5";
import { FaForward } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import character1 from '../assets/character1.png';

export default function Video({title,subtitle,STime,ETime}) {
  return (
    <div className='video'>
        <img src={character1} alt='character1'></img>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <input type='range' value={30} size={10}></input>
        <div className='time'>
            <p>{STime}</p>
            <p>{ETime}</p>
        </div>
        <div className='icons'>
            <span className='icon'><FaBackwardStep size={20}/></span>
            <span className='icon'><FaBackward  size={20}/></span>
            <div className='play' style={{boxShadow:' 0 2px 50px rgba(128,84,238,0.5)'}}><span><IoCaretForwardOutline size={30}/></span></div>
            <span className='icon'><FaForward  size={20}/></span>
            <span className='icon'><FaForwardStep  size={20}/></span>
        </div>
    </div>
  )
}
