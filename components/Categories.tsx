import React from 'react'
import { categoriesData } from '@/Constant'
import Image from 'next/image'
import Link from 'next/link'
const Categories = () => {
  return (
    <div className='flex flex-row mb-4'>
      {categoriesData.map((item,index)=>(
        <Link href="/categorizedFood" key={index}>
        <div  className='flex flex-col items-center p-2 border border-violet-200/60 rounded-md mx-2 my-2 cursor-pointer bg-gradient-to-b from-violet-300/50 to-pink-200/60 shadow-md'>
            <Image 
            src={item.image}
            alt='category_icon'
            width={100}
            height={100}
            />
            <p>{item.name}</p>
        </div>
        </Link>
      ))

      }
    </div>
  )
}

export default Categories
