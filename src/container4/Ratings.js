import React from 'react';
import { FaStar } from "react-icons/fa";

export default function Ratings({title,icon,text,ratings,}) {
  return (
    <div style={{
        color:'white',
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'rgb(15, 15, 15)',
        width:'300px',
        borderRadius:'20px',
        padding:'20px',
        margin:'20px'
        }}>
        <div style={{alignContent:'center'}}>
            <div style={{display:'flex'}}>
                <h1 style={{margin:'0',marginRight:'5px'}}>{title}</h1>
                <span style={{marginTop:'15px',color:'orange'}}>{icon}</span>
            </div>
            <p>{text}</p>
        </div>
        <div>
            {ratings.map((rating,index)=>{
                return(
                    <div style={{display:'flex'}}>
                        <span style={{marginRight:'5px'}}>{rating}</span>
                        <span style={{color:'orange',marginRight:'5px'}}><FaStar size={12}/></span>
                        <input type='range' value={rating} max={5} style={{height:'4px',marginTop:'10px'}}></input>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
