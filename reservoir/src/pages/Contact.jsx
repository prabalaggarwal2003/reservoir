import React from 'react'
import Lottie from 'lottie-react'
import contactus from '../lotties/contactus.json'

function Contact() {
  return (
    <div>
        <h1 className='text-center mt-20 text-4xl'>
            Contact Us
        </h1>

        <div className='flex flex-row justify-between'>
        <div className='ml-16 mt-12'>
    <p className='text-2xl'>
    We’d love to hear from you! 💬
    </p>
    <br />
    <p className='text-xl'>
    At Reservoir, we’re all about building a space where knowledge flows freely
    <br />
    and connections are just as important as content. Whether you have a question,
    <br />
    want to suggest a new resource, spotted a broken link or just want to say hello - we’re here for it.
    </p>

<br />
    <p className='text-2xl'>
    📬 Reach Out To Us
    </p>
    <br />
    <p className='text-xl'>
    Email: aggarwalprabal1@gmail.com
    <br />
    GitHub: github.com/prabalaggarwal2003
    <br />
    <br />
    We aim to respond to emails and messages within 48 hours.
    </p>
    </div>

<br />

<div>
      <Lottie animationData={contactus} style={{
      height: '350px',  
      width: '350px'}}
      className='mr-20 mt-8' />
      </div>
    </div>

    <br />

        </div>


  )
}

export default Contact