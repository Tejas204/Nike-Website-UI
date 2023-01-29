import React from 'react'
import Navbar from './Navbar'
import HeroComponent from './HeroComponent'
import shoe1 from '../images/shoe1.png';

const FrameInner = () => {
  return (
    <div className={`bg-white h-5/6 w-3/4 rounded-[50px]  border-2 border-white`}>

        {/* Navbar */}
        <Navbar/>

        <div>
            {/* Left Component */}
            <HeroComponent/>
            {/* Right Component */}
        </div>

      {/* Added the main shoe */}
        <div className='absolute translate-x-[50%] -translate-y-[80%]'>
            <img src={shoe1} className="h-[920px] w-[920px]"></img>
        </div>
    </div>
  )
}

export default FrameInner