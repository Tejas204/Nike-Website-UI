import React, { useState } from 'react'
import Navbar from './Navbar'
import HeroComponent from './HeroComponent'
import JustDoIt from './JustDoIt';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';
import shoe4 from '../images/shoe4.png';

const FrameInner = () => {

  // This hook gets the shoeImage from the child component viz. Hero Component.
  // This is done by passing a function as a parameter to the child component
  // The very same function sets the shoeImage to the received value.

  const[shoeImage, fetchedShoeId] = useState(shoe4);

  const shoeIdReceived = (shoeImage) => {
    fetchedShoeId(shoeImage);
  }


  return (
    <div className={`bg-[#f7f7f7] h-5/6 w-3/4 rounded-[50px]  border-4 border-white drop-shadow-xl`}>

        {/* Navbar */}
        <Navbar/>

        <div>
            {/* Left Component */}
            <HeroComponent shoeIdReceived={shoeIdReceived}/>
            {/* Just Do It Component */}
            <JustDoIt/>
        </div>

      {/* Shadow shoe */}
        <div className='absolute translate-x-[90%] -translate-y-[90%] -rotate-[45deg]'>
            <img src={shoeImage} className="h-[600px] w-[600px] blur-[70px]"></img>
        </div>
      {/* Added the main shoe */}
        <div className='absolute translate-x-[130%] -translate-y-[100%] -rotate-[45deg]'>
            <img src={shoeImage} className="h-[559px] w-[447px]"></img>
        </div>

      {/* Just do it */}
      
        
    </div>
  )
}

export default FrameInner