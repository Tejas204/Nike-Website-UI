import React from 'react'
import Navbar from './Navbar'
import HeroComponent from './HeroComponent'

const FrameInner = () => {
  return (
    <div className={`bg-white h-5/6 w-5/6 rounded-[50px] border-white border-2`}>

        {/* Navbar */}
        <Navbar/>

        <div>
            {/* Left Component */}
            <HeroComponent/>
            {/* Right Component */}
        </div>
    </div>
  )
}

export default FrameInner