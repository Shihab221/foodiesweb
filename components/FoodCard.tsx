import Image from 'next/image'
import React from 'react'
import { foods } from '@/Constant'
import { FaClock } from 'react-icons/fa'
import Link from 'next/link'

const FoodCard = () => {
  return (
    <div className='grid grid-cols-2 sm:flex flex-row py-2'>
        {foods.map((item,index)=> (
          <Link key={index} href={`/productDetails/${item.id}`}>
            <div  className='px-2 py-2 flex flex-col bg-white mx-2 my-4 rounded-lg'>
                <Image 
                    src={item.image}
                    alt='food_image'
                    width={100}
                    height={50}
                    className='rounded-md w-[200px] h-[160px]'
                    />
                <p className='font-bold text-lg mt-2'>{item.name}</p>
                <div className='flex sm:flex-row flex-col  justify-between'>
                     <p className='text-sm'>Free Delivery</p>
                     <div className='flex flex-row items-center space-x-2'>
                        <FaClock size={12}/>
                        <p className='text-sm'>{item.delivery_time} min</p>
                     </div>
                </div>
                <p className='font-bold text-end'>${item.price}</p>
            </div>
          </Link>
        ))}
      
    </div>
  )
}

export default FoodCard
