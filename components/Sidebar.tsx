"use client";
import React, { useState } from "react";
import { sidebarData } from "../Constant";
import { useRouter } from 'next/navigation';
import { IoMenu,IoClose  } from "react-icons/io5";
import Image from "next/image";
const Sidebar= () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const path:any=sidebarData[0].items[0].path;

  const handleNavigation = (path:string) => {
      router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex flex-row bg-white hidden md:block">
      <div className="px-2 w-full text-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md focus:outline-none text-white"
        >
          {isOpen ? (
            // <Image src={close} width={32} height={32} alt="close icon" />
            <IoClose className="text-slate-800" size={24}/>
          ) : (
            // <Image src={open} width={32} height={32} alt="open icon" />
            <IoMenu className="text-slate-800 text-end" size={24}/>
          )}
        </button>
      </div>
      
      <div className="flex flex-col">
        {isOpen && (
          <div className="w-64 h-screen mx-4 text-slate-800">
            {sidebarData.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className=" font-bold text-sm ">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      onClick={() => handleNavigation(item.path)}
                      className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-violet-100 cursor-pointer border border-violet-200 my-2"
                    >
                      <div className="flex items-center px-2 space-x-2">
                        <Image 
                        src={item.image}
                        alt="categories_icon"
                        width={100}
                        height={100}
                        className="w-[50px] h-[50px]"
                        />
                        <span className="">{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;