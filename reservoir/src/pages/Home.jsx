import React from 'react'
import Lottie from 'lottie-react'
import flowingwater from '../lotties/flowingwater.json'
import Marquee from '../components/Marquee'
import Roadmap from '../components/Roadmap'
import Stats from '../components/Stats'
import TrendingDomains from '../components/TrendingDomains'

function Home() {

  return (
    <div>

<br />

       <div className="relative w-full h-[800px]">
  <div className="relative w-full h-full">
    <Lottie 
      animationData={flowingwater} 
      loop={true} 
      style={{
        height: '50%',  
        width: '100%',   
        position: 'absolute', 
        zIndex: -1,         
      }} 
    />
    <Lottie 
      animationData={flowingwater} 
      loop={true} 
      style={{
        height: '50%',  
        width: '100%',  
        position: 'absolute',
        top: '38%', left: 0,   
        zIndex: -1,      
        transform: 'rotate(180deg)', 
      }} 
    />
  </div>

  <div className="absolute -top-28 left-0 w-full h-full flex flex-col justify-center items-center text-black z-10">
    <h1 className="text-center text-6xl mt-10">
      Welcome to <h1 className="text-7xl transition-transform hover:scale-110">Reservoir</h1>
    </h1>

    <br />
    <br />

    <div className="flex justify-center space-x-2">
      <h2 className="text-4xl">World's biggest</h2>
      <h2 className="text-4xl transition-transform hover:scale-110">FREE</h2>
      <h2 className="text-4xl">resource library</h2>
    </div>
  </div>
</div>


        

        <div className='flex justify-center -mt-16'>
          <div className='w-3/4 rounded-lg p-4 mt-6 bg-gray-200'>
            <p className='text-center text-xl p-4'>
            At <strong>Reservoir</strong>, we believe that knowledge should be accessible to everyone, everywhere. 
            Our platform is a one-stop destination for learning enthusiasts, developers and students alike. 
            From curated GitHub repositories to meticulously crafted handwritten notes, from comprehensive documentation 
            to engaging YouTube tutorials and free certified courses, we bring everything you need to learn, grow and thrive — all in one place and all free of cost.
            </p>
          </div>
        </div>

<br />
<br />
<br />
<br />

  <h1 className='text-center text-3xl'>
    Browse Trending Domains 🔥
  </h1>

<br />
        <TrendingDomains/>

<br />

      <br />
      <br />
      <br />
      <h1 className='text-center text-3xl'>
        Top Providers and Institutions 📚
      </h1>
      <br />
      <br />

    <div className='container mx-auto w-full flex justify-center items-center overflow-hidden'>
      <Marquee/>
    </div>



<br />
<br />
<br />

<Stats/>

<h2 className="text-center text-3xl mt-16 -mb-10">
  Our Roadmap for the future 🚀
</h2>

<Roadmap/>

        

    </div>
  )
}

export default Home