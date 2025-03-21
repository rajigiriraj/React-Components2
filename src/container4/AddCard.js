import React from 'react'

export default function AddCard({title,btn,placeholder1,placeholder2,placeholder3,placeholder4}) {
  return (
    <div style={{padding:'15px',borderRadius:'20px',backgroundColor:'rgb(15, 15, 15)',width:'220px',marginTop:'20px',marginLeft:'-30px'}}>
        <h3 style={{textAlign:'center',color:'white'}}>{title}</h3>
        <input placeholder={placeholder1} style={{
            padding:'15px 10px',
            borderRadius:'10px',
            backgroundColor:'rgb(33, 32, 32)',
            marginTop:'20px',
            border:'0',
            width:'200px'
        }}></input>
        <input placeholder={placeholder2} style={{
            padding:'15px 10px',
            borderRadius:'10px',
            backgroundColor:'rgb(33, 32, 32)',
            marginTop:'20px',
            border:'0',
            width:'200px'
        }}></input>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <input placeholder={placeholder3} style={{
                padding:'15px 10px',
                borderRadius:'10px',
                backgroundColor:'rgb(33, 32, 32)',
                marginTop:'20px',
                border:'0',
                width:'80px'
            }}></input>
            <input placeholder={placeholder4} style={{
                padding:'15px 10px',
                borderRadius:'10px',
                backgroundColor:'rgb(33, 32, 32)',
                marginTop:'20px',
                border:'0',
                width:'80px'
            }}></input>
            
        </div>
        <div style={{marginTop:'20px'}}>{btn}</div>
    </div>
  )
}
