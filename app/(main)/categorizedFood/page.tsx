import { categorizedFood } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { FaClock, FaHeart, FaTruck } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const page = () => {
  return (
    <div className=' grid grid-cols-2 '>
        {categorizedFood.map((categorizedFoodItem,index)=>(
            <div key={index} className='bg-gradient-to-b from-violet-200/60 to-pink-200/60 rounded-xl shadow-md my-2 mx-2 flex flex-row justify-between'>
                <Image 
                src={categorizedFoodItem.image}
                alt='categorizedfood_image'
                width={100}
                height={80}
                className='m-2 rounded-md w-[100px] h-[100px]'
                />
                <div className='flex  flex-col justify-center'>
                    <p className='font-bold'>{categorizedFoodItem.name}</p>
                    <div className='flex flex-row items-center'>
                        <FaTruck size={12}/>
                        <p> &nbsp;Free Delivery</p>
                        <div className='flex flex-row items-center px-10'>
                            <p>Time:&nbsp;</p>
                            <FaClock size={18}/>
                            <p>&nbsp;{categorizedFoodItem.delivery_time} min</p>
                        </div>
                    </div>
                    <p>{categorizedFoodItem.rating}<span>({categorizedFoodItem.review}+)</span></p>
                    <p className='font-bold text-red-500'>${categorizedFoodItem.price}</p>
                </div>

                <div className='flex flex-col justify-evenly px-6'>
                    <FaHeart size={32} className='bg-violet-200 p-1 drop-shadow-md  rounded-sm '/>
                    <FaCartShopping size={32} className='bg-violet-200 p-1 drop-shadow-sm rounded-sm'/>
                </div>

            </div>
        ))

        }
      
    </div>
  )
}

export default page
