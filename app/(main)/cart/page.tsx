import { cartedfood } from '@/Constant'
import Image from 'next/image'
import { FaTruck } from 'react-icons/fa'
const page = () => {
  return (
    <div className=' min-h-screen w-full flex flex-col justify-between sm:flex-row'>
      <div className='flex flex-col w-full max-w-xl'>
      <p className='text-2xl text-slate-800 py-2'>Welcome to cart</p>
        {cartedfood.map((product,index)=>(
          <div key={index} className='flex flex-row bg-gradient-to-b from-violet-300/50 to-pink-200/60 rounded-md my-2 px-2 items-center justify-between shadow-md '>
            <Image 
            src={product.image}
            alt='cart_product_image'
            width={100}
            height={100}
            className='my-2 object-cover w-[100px] h-[80px] rounded-lg'
            />
            <div className='flex flex-col px-10 '>
            <p className='font-bold'>{product.name}</p>
              <div className='flex flex-row items-center justify-between '>
                <FaTruck />
                <p>Free Delivery</p>
                <p>&#9733;{product.rating}</p>
              </div>
                    <div className='flex flex-row space-x-2 '>
                    <button className='bg-pink-200 px-2  rounded-sm shadow-sm '>-</button>
                    <p className='text-xl'>1</p>
                    <button className='bg-violet-300/60 px-2  rounded-sm shadow-sm '>+</button>
                    </div>
                
            </div>
            <div className='flex flex-col items-center justify-between px-4'> 
                <button className='bg-gradient-to-b from-violet-300 to-pink-200 px-2 py-1 rounded-sm cursor-pointer hover:bg-white-300 shadow-sm'>Remove</button>
                <p className='text-red-500 mt-2 font-bold'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>

        {/* Checkout */}
        <div className='flex flex-col max-w-2xl w-full'>
            <p className='text-xl '>Checkout</p>

        </div>

    </div>
  )
}

export default page