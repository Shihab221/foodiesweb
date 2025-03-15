"use client"
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { foods } from '@/Constant'
import { FaTruck } from 'react-icons/fa'
import Image from 'next/image'
import clock from "../../../../public/images/clock.png"
import truck from "../../../../public/images/delivery.png"
import images from "../../../../Images"
const page = () => {
  const[quantity,setQuantity]=useState('1');

  const params = useParams();
  const id = params?.id;

  const foodId = Array.isArray(id) ? id[0] : id;

  if(!foodId || isNaN(parseInt(foodId,10))){
    return <p>Invalid product id</p>
  }

  const food = foods.find((item)=> item.id === parseInt(foodId,10));

  if (!food) {
    return <p className="text-red-500">Food item not found</p>;
  }

  return (
    <div className="px-6 py-4 w-full bg-white min-h-screen">
      
      <div className=" flex flex-row justify-between">
        <div className="text-slate-800 flex sm:flex-row flex-col rounded-lg w-full">
          {/* left */}
          <div className=' rounded-xl mr-4 bg-violet-200/60'>
            <Image
              src={food.image}
              alt="food_image"
              width={100}
              height={100}
              className="rounded-md my-4 mx-4 w-sm sm:min-w-xl h-[420px]"
            />
          <div className='flex flex-row my-4 mx-2'>
          <Image
              src={food.image}
              alt="food_image"
              width={100}
              height={100}
              className="rounded-md mx-2 w-28 h-auto"
            />
            <Image
              src={food.image}
              alt="food_image"
              width={100}
              height={100}
              className="rounded-md mx-2 w-28 h-auto"
            />
            <Image
              src={food.image}
              alt="food_image"
              width={100}
              height={100}
              className="rounded-md mx-2 w-28 h-auto"
            /> 
            <Image
              src={food.image}
              alt="food_image"
              width={100}
              height={100}
              className="rounded-md mx-2 w-28 h-auto"
            />
            </div>
          </div>

          {/* Right */}
          <div className="px-4  py-6 flex flex-col justify-between bg-violet-200/60 w-full rounded-xl ">
            <h2 className="text-2xl font-bold text-slate-800 mx-4">{food.name}</h2>
            <p className="text-xl font-semibold mx-4">Price: ${food.price} </p>

            <p className='text-lg mx-4'>Offer: <span className='text-red-600 font-bold px-2 py-1 border border-slate-600 rounded-full'>10% OFF</span></p>
            <div className='flex flex-row items-center mx-4'>
            <Image 
                src={truck}
                alt='clock_icon'
                className='w-4 h-4'
                />
            <p className='px-2 text-lg'> Free Delivery</p>
              </div>
            
              

            
             <div className='flex flex-row items-center mx-4'>
              <p>Size:</p>
              <p className='p-2 text-xl border border-slate-600 rounded-xl mx-2 text-slate-600'>12"</p>
              <p className='p-2 text-xl border border-slate-600 rounded-xl mx-2 text-slate-600'>14"</p>
              <p className='p-2 text-xl border border-slate-600 rounded-xl mx-2 text-slate-600'>16"</p>
              <p className='p-2 text-xl border border-slate-600 rounded-xl mx-2 text-slate-600'>18"</p>
              
             </div>

            <div className=' flex flex-row'>
              <div className='flex flex-row bg-white rounded-2xl items-center mx-4'>
                <button className='rounded-full  px-2 text-xl'>
                  -
                </button>
                <p className='px-4 text-center text-xl'>{quantity}</p>
                <button className='rounded-full border border-slate-600 px-2 text-xl'>
                  +
              </button>
              </div>

              <div>
              <p className='bg-slate-900 rounded-full px-4 py-1 text-gray-200 text-center'>  {food.rating} &#9733;  <span className='text-sm'>({food.review}+)</span></p>
              </div>

              <div className='flex flex-row items-center border border-slate-600 rounded-full px-2 mx-4'>
                <Image 
                src={clock}
                alt='clock_icon'
                className='w-4 h-4'
                />
                <p className='px-2'>{food.delivery_time} min</p>
              </div>
            </div>

            <div className='flex flex-row items-center mx-4'>
            
                <Image 
                src={images.profile}
                alt='clock_icon'
                width={100}
                height={100}
                className='w-8 h-8 rounded-full'

                />
                <p className='px-2'>is <span className='font-bold'>1.5</span> Km away from you</p>
            </div>
            <div className='flex flex-row  space-x-2 mx-4'>
                <button className="bg-slate-900 px-4 py-2 rounded-sm text-slate-200 hover:bg-slate-800 cursor-pointer my-2 hover:text-slate-200 rounded-full">Order Now</button>

                <button className="bg-slate-900 px-4 py-2 rounded-sm text-slate-200 hover:bg-slate-800 cursor-pointer my-2 hover:text-slate-200 rounded-full">Add to Cart</button>
            </div>
          </div>
        </div>

      
      </div>

      {/* bottom */}
      <div className="p-4 my-6 rounded-xl bg-violet-200/60">
        <p className='text-lg font-bold'>Description:</p>
        <p className='text-justify'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
        </p>
        
      
      </div>
    </div>
  )
}

export default page
