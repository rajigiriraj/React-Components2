import React from 'react';
import mark from '../assets/mark.png';
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

export default function Mark({height,width,classname,name,job,imgHeight,imgWidth,borderRadius,margintop,classname2,follow,following,followCount,followingCount}) {
  return (
    <div className={`${classname2}`}>
        <div className={'mark-container'} style={{height:height,width:width}}>
            <div>
                <img src={mark} alt='Mark' style={{height:imgHeight,width:imgWidth,borderRadius:borderRadius , marginBottom:10 , marginTop:margintop}}></img>
                <h6>{name}</h6>
                <p>{job}</p>
            </div>
            {classname==='withFollows' && (
                <div className={classname}>
                    <div>
                        <p>{follow}</p>
                        <h5>{followCount}</h5>
                    </div>
                    <div>
                        <p>{following}</p>
                        <h5>{followingCount}</h5>
                    </div>
                </div>
            )}
            <div className='floater'>
                <span><BiSolidMessageRounded color=' rgb(51, 22, 129)'/></span>
                <span><IoCall color=' rgb(8, 119, 23)'/></span>
            </div>
        </div>
    </div>
    
  )
}
