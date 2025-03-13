import React from 'react';
// import { IoToggle } from "react-icons/io5";
// import { FaToggleOff } from "react-icons/fa6";

export default function Toggle() {
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'20px 0 0 -150px'}}>
        <label style={{marginBottom:'10px'}} class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>

        <label class="switch">
          <input type="checkbox" checked></input>
          <span class="slider round"></span>
        </label>
    </div>
  )
}
