import Image from 'next/image'
import React from 'react'
import { shopProfile } from '@/Constant'
import Recommend from '@/components/Recommend'
import  shopProfileImage  from '@/public/images/shopProfile.jpg'
const page = () => {
  return (
    <div>
      <div className='w-full bg-white flex flex-row rounded-md'>
        <Image 
        src={shopProfileImage}
        alt='shop_image'
        width={100}
        height={100}
        className='rounded-md m-2 w-[200px]'
        />
        <div className='w-full flex flex-col m-2 justify-evenly'>
        <p className='text-xl font-bold '>Shihab's Kitchen</p>
        <p className='py-2'>Rating: 4.5  &#9733;</p>
        <p>Location: Farmgate</p>
        <div className='flex flex-col sm:flex-row justify-between '>
            {shopProfile.map((shopProfile,index)=>(
                <div className='flex flex-row bg-violet-200 w-full mr-2 rounded-md items-center' key={index}>
                    <Image 
                    src={shopProfile.image}
                    alt='shopprofile_icon'
                    width={60}
                    height={50}
                    className='p-2 m-2'
                    />
                    <p className='text-center px-2'>{shopProfile.text} </p>
                </div>
            ))}
        </div>
        </div>
      </div>

      <div>
        <p className="text-2xl mt-2 font-bold">Recommended Foods</p>
            <Recommend />
      </div>
    </div>
  )
}

export default page
