import Image from 'next/image'
import React from 'react'
import { foods } from '@/Constant'
import { FaClock } from 'react-icons/fa'
import Link from 'next/link'
import delivery from "../public/images/delivery.png"
import images from '@/Images'
const FoodCard = () => {
  return (
    <div className='grid grid-cols-2 sm:flex flex-row '>
        {foods.map((item,index)=> (
          <Link key={index} href={`/productDetails/${item.id}`}>
            <div  className='px-2 py-2 flex flex-col bg-gradient-to-r from-violet-300/50 to-pink-200/60 mx-2 my-4 rounded-lg shadow-md hover:shadow-xl transition-transform'>
                <Image 
                    src={item.image}
                    alt='food_image'
                    width={100}
                    height={50}
                    className='rounded-md w-[280px] h-[200px]'
                    />
                <p className='font-bold text-lg mt-2'>{item.name}</p>
                <div className='flex sm:flex-row flex-col  justify-between text-md'>
                    <div className='flex flex-row items-center'>
                      <Image 
                      src={delivery}
                      alt='delivery_icon'
                      width={100}
                      height={100}
                      className='w-4 h-4 relative'
                      />
                      <div className='absolute bg-violet-300 px-1 py-1 mb-110 mx-53 rounded-sm shadow-md flex flex-row items-center'>
                        <Image 
                        src={images.star}
                        alt='delivery_icon'
                        width={100}
                        height={100}
                        className='w-4 h-4 invert filters'
                        />
                        <p className='px-1 font-bold'>{item.rating}</p>
                      </div>
                      <p className='px-1'>Free Delivery</p>
                    </div>

                    

                     <div className='flex flex-row items-center space-x-1'>
                        <Image 
                        src={images.clock}
                        alt='Clock_icon'
                        width={100}
                        height={100}
                        className='w-4 h-4'
                        />
                        <p className=''>{item.delivery_time} min</p>
                     </div>
                </div>
                <div className='flex flex-row justify-end'>
                {/* <button className='text-center text-lg text-slate-100 cursor-pointer hover:scale-105 bg-slate-700 rounded-sm px-2'>Add to Cart </button> */}
                <p className='font-bold text-end text-red-500 text-lg'>${item.price}</p>
                </div>
            </div>
          </Link>
        ))}
      
    </div>
  )
}

export default FoodCard
