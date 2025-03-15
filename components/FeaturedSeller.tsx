import { featuredSellers } from '@/Constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedSeller = () => {
  return (
    <div className='flex flex-row'>
      {featuredSellers.map((featuredSeller,index)=>(
        <Link href="/shopProfile">
          <div key={index} className='flex flex-col mx-2 my-2 bg-gradient-to-r from-violet-300/50 to-pink-200/60 rounded-md shadow-sm '>
          <Image 
            src={featuredSeller.image}
            alt='featured_seller_image'
            width={100}
            height={100}
            className='w-38 h-32 rounded-md '
            />
            <p className='py-2 mx-2 '>{featuredSeller.name}</p>
        </div>
        </Link>
      ))

      }
      
    </div>
  )
}

export default FeaturedSeller
