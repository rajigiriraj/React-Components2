import React from 'react';
import book from '../assets/book.png'

export default function Book() {
  return (
    <div className='book'>
        <img src={book} alt='book'></img>
        <div>
            <h5>Boring Girls</h5>
            <p>Sara Taylor</p>
            <br></br>
            <p>Amazing, very interesting novel by Sara Taylor.Must read for everyone!</p>
        </div>
    </div>
  )
}
