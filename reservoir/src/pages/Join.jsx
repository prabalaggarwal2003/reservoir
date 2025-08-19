import React from 'react'
import Lottie from 'lottie-react'
import joinus from '../lotties/joinus.json'

function Join() {
  return (
    <div>
      <h1 className='text-center text-4xl mt-20'>
        Join Us
      </h1>
    <div className='flex flex-row justify-between'>
      <div>
      
      <div className='ml-16 mt-12'>
        <p className='text-2xl'>
        💡 Got a Resource to Share?
        </p>
        <br />
        <p className='text-xl'>
        We're always looking to grow Reservoir with valuable content. 
        <br />
        If you’ve come across a great free course, GitHub repo or tutorial worth sharing - let us know! 
        <br />
        You can be a part of helping others learn and grow too.
        </p>
        <br />
        <p className='text-xl'>
    Email: aggarwalprabal2@gmail.com
    <br />
    <br />
    Together, we can keep building a space where knowledge is free, accessible and ever-growing.
    </p>
      </div>
      <br />
      </div>

      <div>
      <Lottie animationData={joinus} style={{
      height: '400px',  
      width: '400px'}}
      className='mr-12 -mt-12' />
      </div>
     
    </div>
    </div>
  )
}

export default Join