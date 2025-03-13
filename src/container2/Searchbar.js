import React from 'react';
import IconButton from '../CommonContainers/IconButton';
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

export default function Searchbar({text}) {
  return (
    <div style={{
      display:'flex',
      backgroundColor: 'rgb(15, 15, 15)',
      borderRadius: '15px',
      padding: '5px',
      marginTop: '20px',
      color:'rgb(160, 159, 159)'}}>
        <span style={{padding:'10px'}}><IoIosSearch /></span>
        <p style={{paddingTop:'9px'}}>{text}</p>
        <div style={{paddingLeft:'70px', paddingTop:'3px'}}><IconButton icon={<GiSettingsKnobs />} height={35} width={35} borderRadius={10}/></div>
    </div>
  )
}
