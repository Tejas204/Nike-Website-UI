import React from 'react'
import Navbar from './Navbar'
import HeroComponent from './HeroComponent'
import shoe1 from '../images/shoe1.png';
import shoe2 from '../images/shoe2.png';

const FrameInner = () => {
  return (
    <div className={`bg-white h-5/6 w-3/4 rounded-[50px]  border-4 border-white`}>

        {/* Navbar */}
        <Navbar/>

        <div>
            {/* Left Component */}
            <HeroComponent/>
            {/* Right Component */}
        </div>

      {/* Shadow shoe */}
        <div className='absolute translate-x-[50%] -translate-y-[80%]'>
            <img src={shoe1} className="h-[920px] w-[920px] blur-[150px]"></img>
        </div>
      {/* Added the main shoe */}
        <div className='absolute translate-x-[50%] -translate-y-[80%]'>
            <img src={shoe1} className="h-[920px] w-[920px]"></img>
        </div>

      {/* Just do it */}
      
        
    </div>
  )
}

export default FrameInner