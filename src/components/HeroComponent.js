import React, { useState } from 'react'
import { shoeItems } from '../data'
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';
import shoe4 from '../images/shoe4.png';
import addSymbol from '../images/add.png';

const HeroComponent = ({shoeIdReceived}) => {

  // This component receives a function as a parameter from it's parent viz. FrameInner
  // The fetchShoeId hooks on to the list item sets the shodId of the clicked object
  // This value is passed to the parent


  const [[shoeImage, shoeName, shoePrice], fetchShoeId] = useState([shoe4, "Lebagh", '$190']);
  shoeIdReceived(shoeImage);

  return (
    <div className='h-3/4 w-1/2 mt-4 relative flex flex-row'>
        <div className='ml-24 p-2'>
          {/* Shoe type */}
            <p className='text-[40px] font-bold'>
                Nike Air Max
            </p>

            {/* Shoe name */}
            <p className='text-[#FC681C] text-[60px]'>
                {shoeName}
            </p>

            {/* Shoe description */}
            <p className='text-justify pt-2 pl-1 text-[12px]'>
              Genuine black leather takes over the upper while a smooth leather <br></br> Swoosh accents the texture & collar bring a decades-old classic look.
            </p>

            {/* Amount and Call to Action */}
            <div className='flex flex-row space-x-10 mt-2 pl-1'>
              {/* Display amount */}
              <p className='text-2xl p-4 hover:text-[#FC681C] ease-in-out duration-200'>{shoePrice}</p>

              {/* CTA --> Add to card*/}
              <button type='submit' className='rounded-xl bg-white text-black shadow-lg p-3 hover:border-2 hover:border-[#FC681C] ease-in-out duration-200'>Add to cart</button>
            </div>

            {/* Shoe list */}
            <div>
              {/* Generate list here */}
              <ul className='flex flex-row space-x-8'>
                {shoeItems.map((shoeItem, index)=>{
                    return <li key={index} onClick={()=>fetchShoeId([shoeItem.image, shoeItem.name, shoeItem.price])}>
                        <div className='flex flex-col bg-[#EAEAEA] h-28 w-32 mt-14 rounded-2xl justify-center relative hover:border-2 hover:border-[#FC681C] hover:-translate-y-2 ease-in-out duration-100'>
                          <img src={shoeItem.image} className='-rotate-45 -translate-y-10 -translate-x-2'></img>
                          <div className='flex flex-row space-x-4 p-1 -translate-y-16'>
                              <div className='flex flex-col'>
                                  <p className='text-[10px] font-medium'>NIKE AIR</p>
                                  <p className='text-xs font-bold'>{shoeItem.name}</p>
                              </div>
                              <p className='font-bold text-[20px]'>{shoeItem.price}</p>
                          </div>

                          {/* Add item icon */}
                          <div className='absolute flex justify-center items-center h-6 w-6 bottom-0 -right-2 rounded-md bg-black '>
                              <img src={addSymbol} className='h-4 w-4'></img>
                          </div>
                        </div>
                </li>
                })}
                
              </ul>
              {/* List item ends here */}
            </div>
        </div>
    </div>
    
        
    
  )
}

export default HeroComponent