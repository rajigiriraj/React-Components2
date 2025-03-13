import React from 'react';
import { FcEngineering } from "react-icons/fc";


export default function Weather({temp,weather,date}) {
  return (
    <div className='weather'>
        <span><FcEngineering /></span>
        <h1 style={{fontSize:'50px'}}>{temp}</h1>
        <p style={{fontSize:'10px'}}>{weather}</p>
        <h1 style={{fontSize:'50px'}}>{date}</h1>
    </div>
  )
}
