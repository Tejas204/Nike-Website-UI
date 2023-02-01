import React from 'react'
import Navbar from './Navbar'
import HeroComponent from './HeroComponent'
import JustDoIt from './JustDoIt';
import shoe1 from '../images/shoe1.png';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';
import shoe4 from '../images/shoe4.png';
import shoe5 from '../images/shoe5.png';
import shoe6 from '../images/shoe6.png';
import shoe7 from '../images/shoe7.png';
import shoe8 from '../images/shoe8.png';

const FrameInner = () => {
  return (
    <div className={`bg-white h-5/6 w-3/4 rounded-[50px]  border-4 border-white drop-shadow-xl`}>

        {/* Navbar */}
        <Navbar/>

        <div>
            {/* Left Component */}
            <HeroComponent/>
            {/* Right Component */}
            <JustDoIt/>
        </div>

      {/* Shadow shoe */}
        <div className='absolute translate-x-[90%] -translate-y-[90%] -rotate-[45deg]'>
            <img src={shoe3} className="h-[600px] w-[600px] blur-[70px]"></img>
        </div>
      {/* Added the main shoe */}
        <div className='absolute translate-x-[130%] -translate-y-[100%] -rotate-[45deg]'>
            <img src={shoe3} className="h-[559px] w-[447px]"></img>
        </div>

      {/* Just do it */}
      
        
    </div>
  )
}

export default FrameInner