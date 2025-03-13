import React from 'react';
import book from '../assets/book.png'

export default function Book({h5,author,p}) {
  return (
    <div className='book'>
        <img src={book} alt='book'></img>
        <div style={{margin:'10px'}}>
            <h5>{h5}</h5>
            <p>{author}</p>
            <br></br>
            <p>{p}</p>
        </div>
    </div>
  )
}
