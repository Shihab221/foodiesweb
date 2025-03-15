import Image from 'next/image'
import React from 'react'
import { shopProfile } from '@/Constant'
import Recommend from '@/components/Recommend'
import  shopProfileImage  from '@/public/images/pastabanner.jpg'
import  shopIconImage  from '@/public/images/pasta.jpg'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full flex flex-col items-center  rounded-md'>
        <Image 
        src={shopProfileImage}
        alt='shop_image'
        className='relative rounded-md m-2 w-xl'
        />
        <div className='absolute flex flex-row items-center mt-15  bg-slate-800/60 text-white p-2 rounded-xl'>
            <Image 
            src={shopIconImage}
            alt='Icon_Image'
            className='w-16 h-14 mx-2 rounded-md border border-white'
            />
            <div className='flex flex-col'>
              <p className='text-xl font-bold '>Shihab's Kitchen</p>
              <p className='py-2'> &#9733; 83% Positive Response</p>
            </div>
            
          </div>
        <div className='w-full flex flex-col  items-center'>
          
          <div className='flex flex-col sm:flex-row justify-between  py-4 pb-6 px-2 rounded-md m-2 bg-violet-200/60 '>
              {shopProfile.map((shopProfile,index)=>(
                  <div className='flex flex-col bg-gradient-to-b from-violet-300/50 to-pink-200/60 mx-2 rounded-md items-center shadow-md px-2  cursor-pointer w-16 h-16' key={index}>
                      <Image 
                      src={shopProfile.image}
                      alt='shopprofile_icon'
                      width={60}
                      height={50}
                      className='p-2 m-2  w-12 h-12'
                      />
                      <p className='text-center text-sm px-2 mt-1'>{shopProfile.text} </p>
                  </div>
              ))}
          </div>
        </div>
      </div>
          
      <div>
        <Recommend />
      </div>
     
    </div>
  )
}

export default page
