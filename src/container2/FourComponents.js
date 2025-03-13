import React from 'react';

export default function FourComponents({img,h4,p,Picon,classname,icon1,icon2,icon3,text,floatingicon1,floatingicon2}) {
  return (
    <div className='maincls'style={{position:'relative'}} >
        <div className='img-div'>
            <img src={img} alt='person'></img>
        </div>
        <div className='about'>
            <h4>{h4}</h4>
            <p>{Picon}{p}</p>
        </div>
        <div className='icons' style={{display:'flex',marginTop:'0px',justifyContent:'space-between'}}>
                {icon1&&(<span style={{
                    marginLeft:'70px',
                    color:'white',
                    backgroundColor:'rgb(107, 14, 228)',
                    padding:'5px',
                    borderRadius:'20px',
                    height:'25px'
                    }}>{icon1}</span>)}
                {icon2&&(<span style={{
                    height:'20px',
                    width:'20px',
                    borderRadius:'10px',
                    background: 'rgba(204,41,41,0.3)',
                    color:'red',
                    padding:'5px',
                    textAlign:'center',
                    marginLeft:'40px'
                    }}>{icon2}</span>)}
                {icon3&&(<span style={{
                    height:'20px',
                    width:'20px',
                    borderRadius:'10px',
                    background: 'rgba(44, 204, 41, 0.3)',
                    color:'rgb(36, 168, 34)',
                    padding:'5px',
                    textAlign:'center',
                    marginLeft:'10px'
                    }}>{icon3}</span>)}
                {floatingicon1&&(<span style={{
                    color:'rgb(107, 14, 228)',
                    height:'20px',
                    width:'20px',
                    borderRadius:'10px',
                    background: 'rgb(15, 15, 15)',
                    padding:'7px',
                    textAlign:'center',
                    position:'absolute',
                    marginTop:'-25px',
                    marginLeft:'75px'
                    }}>{floatingicon1}</span>)}
                {floatingicon2&&(<span style={{
                    color:'rgb(189, 14, 101)',
                    height:'20px',
                    width:'20px',
                    borderRadius:'10px',
                    background: 'rgb(15, 15, 15)',
                    padding:'7px',
                    textAlign:'center',
                    position:'absolute',
                    marginTop:'-25px',
                    marginLeft:'120px'
                    }}>{floatingicon2}</span>)}
                {text&&(<span style={{color:'rgb(107, 14, 228)',marginLeft:'40px',marginTop:'10px'}}>{text}</span>)}
        </div>
        
        
    </div>
  )
}
