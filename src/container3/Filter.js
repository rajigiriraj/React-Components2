import React from 'react';
import CommonButton from '../CommonContainers/CommonButton';

export default function Filter({colors,title1,title2,subtitle1,topic,materials,title3}) {
  return (
    <div style={{padding:'10px',borderRadius:'20px',backgroundColor:'rgb(15, 15, 15)',width:'230px',marginTop:'60px',color:'white'}}>
        <h3 style={{textAlign:'center'}}>{topic}</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:' 0 10px'}}>
            <h5>{title1}</h5>
            <h5 style={{color:'rgb(107, 14, 228)'}}>{subtitle1}</h5>
        </div>
        <input type='range' value={10-50} style={{accentColor:'rgb(107, 14, 228)',height:'2px',width:'210px',marginLeft:'10px'}}></input>
        <div style={{margin:'20px 10px'}}>
            <h5>{title2}</h5>
            <div style={{display:'flex'}}>
                {colors.map((color)=>{
                    return(<div style={{
                        height:'20px',
                        width:'20px',
                        borderRadius:'10px',
                        backgroundColor:color.color,
                        border:color.border,
                        margin:'10px 5px'}}>
                    </div>)
                })}
            </div>
        </div>
        <div style={{margin:'20px 10px'}}>
            <h5>{title3}</h5>
            <div style={{display:'flex'}}>
                {materials.map((material)=>{
                    return(<div style={{
                        height:'20px',
                        borderRadius:'15px',
                        border:material.border,
                        padding:'2px 10px 5px 10px',
                        margin:'20px 10px 0 0',
                        fontSize:'14px',
                        color: 'rgb(160, 159, 159)'
                        }}>{material.name}
                    </div>)
                })}
            </div>
        </div>
        <CommonButton text={'Apply'} width={230}/>
    </div>
  )
}
