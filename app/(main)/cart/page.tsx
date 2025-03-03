
import { cartedfood } from '@/Constant'
import Image from 'next/image'
const page = () => {
  return (
    <div className=' min-h-screen w-full flex flex-col justify-between sm:flex-row'>
      <div className='flex flex-col max-w-xl '>
      <p className='text-2xl text-slate-800 py-2'>Welcome to cart</p>
        {cartedfood.map((product,index)=>(
          <div key={index} className='flex flex-row bg-white rounded-md my-2 px-2 items-center justify-between'>
            <Image 
            src={product.image}
            alt='cart_product_image'
            width={100}
            height={100}
            className='my-2 object-cover w-[100px] h-[80px] rounded-lg'
            />
            <div className='flex flex-col px-10 text-center items-center'>
                <p className='font-bold'>{product.name}</p>
                <p>{product.rating}</p>
                    <div className='flex flex-row space-x-2'>
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                    </div>
                <p>{}</p>
            </div>
            <div className='flex flex-col justify-end items-center px-4'> 
                <button>Remove</button>
                <p className='text-red-600'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>

        {/* Checkout */}
        <div className='flex flex-col'>
            <p className='text-xl '>Checkout</p>

        </div>

    </div>
  )
}

export default page