"use client"
import React, { useRef } from 'react';
import { categoriesData } from '@/Constant';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mx-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2 flex items-center justify-start">
        Categories
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
        {categoriesData.map((item, index) => (
          <Link href="/categorizedFood" key={index}>
            <div className="flex flex-col items-center w-32 p-2 border border-violet-200/60 rounded-md cursor-pointer bg-gradient-to-b from-violet-300/50 to-pink-200/60 shadow-md hover:shadow-lg transition-transform ">
              <Image
                src={item.image}
                alt="category_icon"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <p className="text-center mt-2">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

// without scrolling
// import React from 'react'
// import { categoriesData } from '@/Constant'
// import Image from 'next/image'
// import Link from 'next/link'
// const Categories = () => {
//   return (
//     <div className='flex flex-row mb-4 mx-2'>
//       {categoriesData.map((item,index)=>(
//         <Link href="/categorizedFood" key={index}>
//         <div  className='flex flex-col items-center p-2 border border-violet-200/60 rounded-md mx-2 my-2 cursor-pointer bg-gradient-to-b from-violet-300/50 to-pink-200/60 shadow-md'>
//             <Image 
//             src={item.image}
//             alt='category_icon'
//             width={100}
//             height={100}
//             />
//             <p>{item.name}</p>
//         </div>
//         </Link>
//       ))

//       }
//     </div>
//   )
// }

// export default Categories
