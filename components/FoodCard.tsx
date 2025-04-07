"use client"
import Image from 'next/image'
import React, {useRef} from 'react'
import { foods } from '@/Constant'
import Link from 'next/link'
import delivery from "../public/images/delivery.png"
import images from '@/Images'
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FoodCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
    const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

  return (
  <div className='relative'>
    
    <div className='flex'>
    <p className="text-2xl font-bold mx-2 mt-2">Best Foods</p>
    <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-violet-200 rounded-full shadow-md hover:bg-gray-300 transition mx-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-violet-200 rounded-full shadow-md hover:bg-gray-300 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
  
    <div className='flex flex-row overflow-x-auto scrollbar-hide scroll-smooth px-2 ' ref={scrollRef}>
        {foods.map((item,index)=> (
          <Link key={index} href={`/productDetails/${item.id}`}>
            <div  className='flex-shrink-0 px-2 py-2 flex flex-col bg-gradient-to-r from-violet-300/50 to-pink-200/60 mx-2 my-4 rounded-lg shadow-md hover:shadow-xl transition-transform w-full'>
                <Image 
                    src={item.image}
                    alt='food_image'
                    width={100}
                    height={50}
                    className='rounded-md w-[290px] h-[200px]'
                    unoptimized
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
                      {/* <div className='absolute bg-violet-300 px-1 py-1 mb-110 mx-53 rounded-sm shadow-md flex flex-row items-center'>
                        <Image 
                        src={images.star}
                        alt='delivery_icon'
                        width={100}
                        height={100}
                        className='w-4 h-4 invert filters'
                        />
                        <p className='px-1 font-bold'>{item.rating}</p>
                      </div> */}
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
  </div>
  )
}

export default FoodCard
