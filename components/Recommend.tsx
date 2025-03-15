import Image from 'next/image'
import React from 'react'
import { foods } from '@/Constant'
import { FaClock, FaHeart,  } from 'react-icons/fa'
const Recommend = () => {
  return (
      <div className='w-2xl '>
              {foods.map((categorizedFoodItem,index)=>(
                  <div key={index} className='bg-gradient-to-b from-violet-200/60 to-pink-200/60 rounded-xl shadow-md my-4 mx-2 flex flex-row justify-between max-w-2xl'>
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
                          
                      </div>
      
                  </div>
              ))
      
              }
            
          </div> 
  )
}

export default Recommend
