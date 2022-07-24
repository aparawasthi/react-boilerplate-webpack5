import React from 'react'
import imgage from '@assets/test.jpg';

function Home() {
  return (
    <div>
      <h1 className='text'>Home</h1>
      <img src={imgage}  alt="" />
    </div>
  )
}

export default Home