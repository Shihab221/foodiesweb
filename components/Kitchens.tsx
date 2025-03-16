import React from 'react'
import { kitchens } from '@/Constant'
import Image from 'next/image';
import images from '@/Images';
const Kitchens = () => {
  return (
    <div className='flex flex-col sm:flex-col mx-4 '>
      <p className='text-2xl font-bold mt-2'>Kitchens</p>
      <div className='flex flex-col sm:flex-row space-x-4'>
        {kitchens.map((kitchen,index)=>(
              <div key={index} className='my-2  bg-gradient-to-l from-violet-200/50 to-pink-200/60 rounded-md flex flex-col justify-between shadow-md max-w-[360px] hover:shadow-lg transition-transform'>
                  <Image 
                  src={kitchen.image}
                  alt='kithcen_image'
                  width={100}
                  height={80}
                  className='w-full h-[240px] rounded-md relative'
                  />
                  <div className='absolute bg-violet-300 px-1 py-1 my-4 mx-72 rounded-sm shadow-md flex flex-row items-center'>
                          <Image 
                          src={images.star}
                          alt='delivery_icon'
                          width={100}
                          height={100}
                          className='w-4 h-4 invert filters'
                          />
                          <p className='px-1 font-bold'>{kitchen.rating}</p>
                        </div>
                  <div className='flex flex-row items-center px-2'>
                      <Image 
                          src={kitchen.image}
                          alt='kithcen_image'
                          width={70}
                          height={40}
                          className='rounded-md w-[100px] h-[60px] mt-2'
                      />
                      <p className='text-center font-bold text-lg px-2'>{kitchen.name}</p>
                  </div>

                  <div className='flex flex-row justify-between py-2 px-1'>
                  {kitchen.foods.map((food,i)=>(
                      <p key={i} className='px-2 py-1 bg-gradient-to-b from-violet-300/50 to pink-200/60 mx-1 rounded-sm shadow-sm'>{food}</p>
                  ))}
                  </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Kitchens;
