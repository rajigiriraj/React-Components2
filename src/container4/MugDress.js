import React from 'react';




export default function MugDress({img,h5,h6,width,imgheight,imgwidth,font1clr,font2clr,font1size,font2size,align,price,btn}) {
  return (
    <div className='dress-mug' style={{width:width}}>
        <img src={img} alt='dress' style={{height:imgheight, width:imgwidth}}></img>
        <div className='content'>
            <h5 style={{color:font1clr,fontSize:font1size,textAlign:align}}>{h5}</h5>
            <h5 style={{color:font2clr,fontSize:font2size,textAlign:align}}>{h6}</h5>
        </div>
        <div style={{textAlign:'center',alignItems:'center',display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
          {price&&(<p style={{color:'rgb(107, 14, 228)'}}>{price}</p>)}
          <div>{btn}</div>          
        </div>
        
    </div>
  )
}
