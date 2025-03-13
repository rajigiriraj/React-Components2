import React from 'react'

export default function CommonButton({text,width,margin}) {
  return (
    <div>
      <button style={{
        background: 'linear-gradient(90deg, rgba(56,41,204,1) 0%, rgba(128,84,238,1) 71%, rgba(172,82,255,1) 100%)',
        border:0,
        height:'45px',
        width:width,
        margin:'20px 0 0 5px', 
        borderRadius: '15px',
        color:'white',
        boxShadow:' 10px 15px 50px rgba(128,84,238,0.4)',
        marginLeft:margin
      }}>{text}</button>
    </div>
  )
}

