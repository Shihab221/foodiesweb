"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { foods } from '@/Constant'
import { FaTruck } from 'react-icons/fa'

const page = () => {
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
    <div className="w-full ">
      <div className=" flex flex-row justify-between">
        <div className="text-slate-800 flex sm:flex-row flex-col rounded-lg w-full">
          <img
            src={food.image}
            alt="food_image"
            width={100}
            height={100}
            className="rounded-md my-4 mx-4 w-[300px] h-[260px]"
          />
          <div className="px-4 py-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-slate-800">{food.name}</h2>
            <p className="text-slate-800 mt-2 max-w-xl">Delivery Time: {food.delivery_time} min</p>
            <div className='flex flex-row items-center'>
            <FaTruck size={16}/>
            <p className='px-2'> Free Delivery</p>
              </div>
            
              <p className="text-lg font-semibold">Price: ${food.price} </p>

            <p className='bg-slate-900 rounded-sm py-1 text-gray-200 text-center'> Review: &#9733; {food.rating}  ({food.review}+)</p>
             
            
            <button className="bg-gradient-to-b from-violet-400/80 to-pink-200/80 px-4 py-2 rounded-sm text-slate-800 hover:bg-slate-900 cursor-pointer my-2 hover:text-slate-200">Order Now</button>
          </div>
        </div>

        {/* <div className="bg-gray-800 p-4 w-full max-w-sm rounded-lg">
          <h4>Delivery Details:</h4>
        </div> */}
      </div>

      <div className="p-4 my-4 rounded-lg">
        <p className='text-lg font-bold'>Description:</p>
        <p className='text-justify'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
        </p>
        
      </div>
    </div>
  )
}

export default page
