import React from 'react';
import { LiaFileSolid } from "react-icons/lia";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import visa from '../assets/visa.png';
import mastercard from '../assets/Mastercard.png';
import paypal from '../assets/paypal-logo.png';
import gpay from '../assets/gpay.png';




export default function Files({display,folder_icon,title,classname,files,heightmea,widthmea,btn,notifications}) {
  return (
    <div className='files-payment' style={{ width:'200px'}}>
      <div className='folder-icon'>{folder_icon}</div>
      <h6>{title}</h6>

      {classname==='file-component' && (
        <div className={classname} style={{display:display}}>

        {files.map(file=>{
          return(
            <section className='file'>
              <div className='file-img'><LiaFileSolid size={13}/></div>
              <div className='file-name'>
                <p>{file.fileName}</p>
                <div className='file-storage'>
                  <input type='range' value={file.value}></input>
                  <p>{file.percentage}</p>
                </div>
              </div>
            </section>
          )
        }
        )}

      </div>
      )}
      
      {classname==='payment-component'&&(
        <div>
          <div className={classname}>
            <div className='icons'>
              <span><IoIosRadioButtonOn /></span>
              <span><IoIosRadioButtonOff /></span>
              <span><IoIosRadioButtonOff /></span>
              <span><IoIosRadioButtonOff /></span>
            </div>
            <div className='images'>
              <img src={visa} alt='visa' height={20} width={30} className='img'></img>
              <img src={paypal} height={20} width={30} alt='paypal' className='img'></img>
              <img src={mastercard} height={20} width={30} alt='mastercard' className='img' ></img>
              <img src={gpay} height={20} width={30} alt='gpay' className='img' ></img>
            </div> 
          </div>
          <span>{btn}</span>
        </div>
        
      )}

      {classname==='notification-component' &&(
        <div className={classname}>

          {notifications.map(notification=>{
            return(
              <div className='notify-div'>
                <div className='image-div'>
                  <span>{notification.image}</span>
                </div>
                <div className='notify-content'>
                  <h6>{notification.heading}</h6>
                  <div className='comments' style={{color:notification.color}}>
                    <span style={{marginRight:'5px'}}>{notification.icon}</span>
                    <p style={{alignContent:'center'}}>{notification.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      
    </div>
  )
}
