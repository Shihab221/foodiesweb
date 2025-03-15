import Image from 'next/image'
import React from 'react'
import profileImage from "../../../public/images/shopProfile.jpg"
import { userProfile } from '@/Constant'
const page = () => {
  return (
    <div className='flex flex-row justify-between bg-white min-h-screen'>
      {/* left side */}
      <div className='flex flex-col items-center w-full bg-violet-200/60 max-w-sm '>
        <div className='border-b border-slate-300 w-full py-4'>
        <p className='items-center text-center'>PROFILE & SETTINGS</p>
        </div>
        
        <div className=' px-4 py-2 rounded-md'>
        <p>GENERAL</p>
          {userProfile.General.map((user,index)=>(
            <div key={index} className='flex flex-row  my-4 items-center p-2  space-x-2 w-[300px] '>
              <Image 
              src={user.image}
              alt='user_icon_image'
              width={100}
              height={100}
              className='w-10 h-10 p-2 bg-white rounded-md shadow-sm'
              />
              <p>{user.text}</p>
            </div>
          ))}
        <p>SYSTEM</p>
        {userProfile.System.map((user,index)=>(
            <div key={index} className='flex flex-row  my-4 items-center p-2  space-x-2 w-[300px] '>
              <Image 
              src={user.image}
              alt='user_icon_image'
              width={100}
              height={100}
              className='w-10 h-10 p-2 bg-white rounded-md shadow-sm'
              />
              <p>{user.text}</p>
            </div>
          ))}
        </div>

        
      </div>

    {/* Right side */}
      <div className='flex flex-col items-center w-full'>
          
          <div className='flex flex-row justify-between w-md bg-violet-200/60 px-4 py-4 my-4 rounded-md'>
            {userProfile.vertical.map((user,index)=>(
              <div className='flex flex-col items-center'>
                <Image 
              src={user.image}
              alt='user_icon_image'
              width={100}
              height={100}
              className='w-10 h-10 p-2 bg-white rounded-md shadow-sm'
              />
              <p>{user.text}</p>
              </div>
            ))}
          </div>
          
      {/* user data and picture */}
      <div className='flex flex-col py-4 px-4 w-full items-center '>
            <div >
              <Image 
              src={profileImage}
              alt='user_icon_image'
              width={100}
              height={100}
              className='w-32 h-32 bg-white rounded-full shadow-sm'
              />
              <p className='text-lg font-bold text-slate-600'>Shihab Ahemed</p>
            </div>


            
              <div className='flex flex-row w-md justify-between py-4'>
                <li className='flex flex-col items-center'>
                    <p>Ordered</p>
                    <p className='font-bold text-xl'>12</p>
                </li>
                <li className='flex flex-col items-center'>
                    <p>Received</p>
                    <p className='font-bold text-xl'>6</p>
                </li>
                <li className='flex flex-col items-center'>
                    <p>Pending</p>
                    <p className='font-bold text-xl'>2</p>
                </li>
                <li className='flex flex-col items-center'>
                    <p>Cancelled order</p>
                    <p className='font-bold text-xl'>1</p>
                </li>
              </div>
            
      </div>
          

      </div>
    </div>
  )
}

export default page
