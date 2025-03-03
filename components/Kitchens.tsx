import React from 'react'
import { kitchens } from '@/Constant'
import Image from 'next/image';
const Kitchens = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      
      {kitchens.map((kitchen,index)=>(
            <div key={index} className='my-4 mx-2  bg-white rounded-md flex flex-col justify-between'>
                <Image 
                src={kitchen.image}
                alt='kithcen_image'
                width={100}
                height={100}
                className='w-full h-[200px] rounded-md'
                />
                <div className='flex flex-row items-center px-1'>
                    <Image 
                        src={kitchen.image}
                        alt='kithcen_image'
                        width={70}
                        height={40}
                        className='rounded-md h-[40px] mt-2'
                    />
                    <p className='text-center px-2'>{kitchen.name}</p>
                </div>

                <div className='flex flex-row justify-between py-2'>
                {kitchen.foods.map((food,i)=>(
                    <p key={i} className='px-2 py-1 bg-violet-200 mx-1 rounded-sm'>{food}</p>
                ))}
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Kitchens;
