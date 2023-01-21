import React from 'react'
import { shoeItems } from '../data'
import shoe1 from '../images/shoe1.png';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';
import shoe4 from '../images/shoe4.png';
import shoe5 from '../images/shoe5.png';

const HeroComponent = () => {
  return (
    <div className='h-3/4 w-1/2 mt-4'>
        <div className='ml-24 p-2'>
          {/* Shoe type */}
            <p className='text-[40px] font-bold'>
                Nike Air Max
            </p>

            {/* Shoe name */}
            <p className='text-[#FC681C] text-[60px]'>
                Lebagh
            </p>

            {/* Shoe description */}
            <p className='text-justify pt-2 pl-1 text-[12px]'>
              Genuine black leather takes over the upper while a smooth leather <br></br> Swoosh accents the texture & collar bring a decades-old classic look.
            </p>

            {/* Amount and Call to Action */}
            <div className='flex flex-row space-x-10 mt-2 pl-1'>
              {/* Display amount */}
              <p className='text-2xl p-4'>$190</p>

              {/* CTA --> Add to card*/}
              <button type='submit' className='rounded-xl bg-white text-black shadow-lg p-3 hover:border hover:border-[#FC681C] ease-in-out duration-200'>Add to cart</button>
            </div>

            {/* Shoe list */}
            <div>
              {/* Generate list here */}
              <div className='flex flex-col bg-[#EAEAEA] h-28 w-32 mt-14 rounded-2xl justify-center'>
                <img src={shoe2} className='-rotate-45 -translate-y-10 -translate-x-2'></img>
                <div className='flex flex-row space-x-4 p-1 -translate-y-16'>
                    <div className='flex flex-col'>
                        <p className='text-[10px] font-medium'>NIKE AIR</p>
                        <p className='text-xs font-bold'>ONE TAKE</p>
                    </div>
                    <p className='font-bold text-[20px]'>$180</p>
                </div>
              </div>
              {/* List item ends here */}
            </div>
        </div>

        {/* <ul>
                {shoeItems.map((shoeItem, index)=>{
                  
                })}
              </ul> */}
    </div>
    
        
    
  )
}

export default HeroComponent