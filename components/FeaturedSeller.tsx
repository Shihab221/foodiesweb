"use client"
import { featuredSellers } from '@/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedSeller = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mx-4">
      <h2 className="text-xl font-semibold mb-2 flex items-center justify-start">
        <h2 className='text-2xl'>Featured Sellers</h2>
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
      </h2>

      <div
        ref={scrollRef}
        className="flex flex-row overflow-x-auto scrollbar-hide space-x-4"
      >
        {featuredSellers.map((featuredSeller, index) => (
          <Link href="/shopProfile" key={index}>
            <div className="flex-shrink-0 w-40 bg-gradient-to-r from-violet-300/50 to-pink-200/60 rounded-md shadow-sm hover:shadow-md transition-transform">
              <Image
                src={featuredSeller.image}
                alt="featured_seller_image"
                width={100}
                height={100}
                className="w-full h-32 object-cover rounded-t-md"
              />
              <p className="py-2 text-center">{featuredSeller.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSeller;


//without scrolling system
// import { featuredSellers } from '@/Constant'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const FeaturedSeller = () => {
//   return (
//     <div className='flex flex-row'>
//       {featuredSellers.map((featuredSeller,index)=>(
//         <Link href="/shopProfile" key={index}>
//           <div  className='flex flex-col mx-2 my-2 bg-gradient-to-r from-violet-300/50 to-pink-200/60 rounded-md shadow-sm hover:shadow-md transition-transform'>
//           <Image 
//             src={featuredSeller.image}
//             alt='featured_seller_image'
//             width={100}
//             height={100}
//             className='w-38 h-32 rounded-md '
//             />
//             <p className='py-2 mx-2 '>{featuredSeller.name}</p>
//         </div>
//         </Link>
//       ))

//       }
      
//     </div>
//   )
// }

// export default FeaturedSeller
