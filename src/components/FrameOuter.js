import React from 'react'
import FrameInner from './FrameInner'
import JustDoIt from './JustDoIt'

const FrameOuter = () => {
  return (
    <div className='bg-[#FF722D] bg-opacity-20 h-screen w-screen container mx-auto overflow-hidden flex justify-center items-center'>
  
        <FrameInner/>
        
    </div>
  )
}

export default FrameOuter