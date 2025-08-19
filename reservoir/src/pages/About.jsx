import React from 'react'
import gradient from '../lotties/gradient.json'
import Lottie from 'lottie-react'

function About() {
  return (
    <div>

<div className='flex justify-center space-x-3'>
<h1 className='text-4xl text-center mt-20'>
    About </h1>
<h1 className='text-4xl text-center mt-20 transition-transform hover:scale-110'>RESERVOIR</h1>

</div>


<div className='flex justify-evenly items-center w-full py-8 mt-12'>

<div className="relative flex flex-col items-center">
  <Lottie 
    animationData={gradient} 
    loop={true} 
    style={{
      height: '200px',  
      width: '200px',   
      zIndex: -1,       
    }} 
  />
  <h1 className="absolute text-center text-black z-10 mt-20 text-4xl">
    PATIENCE
  </h1>
</div>

<div className="relative flex flex-col items-center">
  <Lottie 
    animationData={gradient} 
    loop={true} 
    style={{
      height: '200px',  
      width: '200px',   
      zIndex: -1,       
    }} 
  />
  <h1 className="absolute text-center text-black z-10 mt-20 text-3xl">
    PERSEVERANCE
  </h1>
</div>

<div className="relative flex flex-col items-center">
  <Lottie 
    animationData={gradient} 
    loop={true} 
    style={{
      height: '200px',  
      width: '200px',  
      zIndex: -1,       
    }} 
  />
  <h1 className="absolute text-center text-black z-10 mt-20 text-4xl">
    PRACTICE
  </h1>
</div>

</div>

<div className='flex justify-center mt-8 mb-8'>
<div className='w-3/4 rounded-lg p-4 mt-6 bg-gray-200'>
    <p className='text-center text-lg py-4'>
    <strong>Patience, Perseverance and Practice</strong> — the three pillars that shape every journey of learning 
    <br />
    and mastery. Whether you're just starting out or deepening your expertise, we believe these 
    <br />
    qualities are the keys to unlocking your full potential. And that's exactly what we’re here to support.
    <br />
    <br />
    Welcome to <strong>RESERVOIR</strong>, a free, open-access learning resource library built for curious minds 
    <br />
    and lifelong learners. Our mission is simple: to break down barriers to education by providing a 
    <br />
    centralized hub of high-quality, freely available content across a variety of domains.
    </p>
</div>
</div>

<br />

<div className='flex justify-center items-center w-full py-8'>
    <div className='flex flex-col justify-center items-center px-8'>
        <img className='w-20 h-20' src="https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg" alt="github" />
        <h1 className='text-xl text-center'>Curated GitHub Repositories 
            <br />
            filled with projects, 
            <br />
            code samples and tools</h1>
    </div>
    <div className='flex flex-col justify-center items-center px-8'>
        <img className='w-20 h-20' src="https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/youtube-118.png" alt="yt" />
        <h1 className='text-xl text-center'>YouTube Playlists & Videos 
            <br />for visual learners who 
            <br />
             want to follow along</h1>
    </div>
    <div className='flex flex-col justify-center items-center px-8'>
        <img className='w-20 h-20' src="https://i.pinimg.com/564x/37/1e/e8/371ee866a7e311f9e0ecadc2d73606b9.jpg" alt="courses" />
        <h1 className='text-xl text-center'>Courses with Free Certificates 
            <br />
            so you can build your resume 
            <br />
            while you build your skills</h1>
    </div>
    <div className='flex flex-col justify-center items-center px-8'>
        <img className='w-16 h-16' src="https://www.svgrepo.com/show/243051/docs.svg" alt="notes" />
        <h1 className='text-xl text-center pt-4'>Well-Structured Handwritten Notes
            <br /> 
            & Documentation across tech, 
            <br />
            science, soft skills and more</h1>
    </div>
</div>

<br />

<div className='px-44 py-8'>
<div className='bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-1'>
<div className='h-full w-full bg-white rounded-md p-2'>
    <h1 className='text-center text-lg p-8'>
    At <strong>RESERVOIR</strong>, we’re not just sharing resources — we’re building a community of learners, 
    <br />
    doers and dreamers. No matter where you are in your journey, 
    <br />
    remember: the road to mastery begins with a single step.
    <br />
    So dive in, stay curious and let your passion for learning lead the way.
    <br />
    Because with patience, perseverance, and practice — <strong>anything is possible</strong> .
    </h1>
</div>
</div>
</div>




    </div>
  )
}

export default About