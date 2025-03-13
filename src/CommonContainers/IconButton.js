import React from 'react'

export default function IconButton({icon,height,width, borderRadius,roundMargin}) {
  return (
    <button style={{
      background: 'linear-gradient(90deg, rgba(56,41,204,1) 0%, rgba(128,84,238,1) 71%, rgba(172,82,255,1) 100%)',
      border:0,
      width:width,
      height:height,
      borderRadius: borderRadius,
      color:'white',
      padding:'5px',
      textAlign:'center',
      alignItems:'center',
      marginRight:roundMargin
  }}>{icon}</button>
  )
}
