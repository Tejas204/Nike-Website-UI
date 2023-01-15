import React from 'react'
import { navItems } from '../data'
import nikeLogo from '../images/nikeLogo.png'

const Navbar = () => {
  return (
    <div className='flex flex-start border-b-gray-100 border-b-2'>
        <img src={nikeLogo} className='h-10 m-8'></img>
        <ul className='flex flex-row m-10 space-x-10'>
            {navItems.map((items, index)=>{
                return <li key={index} className="text-md hover:border-b-2 hover:border-black ease-in-out duration-150">
                    {items.name}
                    </li>
            })}
        </ul>
        
    </div>
  )
}

export default Navbar