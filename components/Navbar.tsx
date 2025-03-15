"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineBell, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import Login from "./Login";
import { FaMapLocation } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [loginOpen, setLoginOpen] = useState(false); // Login modal state

  return (
    <div>
      {/* Topbar (Mobile & Desktop) */}
      <div className="fixed top-0 w-full bg-white text-slate-900 flex items-center justify-between px-5 py-3 md:relative z-50 max-w-full">
        {/* Hamburger & Logo */}
        <div className="flex items-center space-x-4">
          
          
          
          <div className="flex-1 sm:hidden max-w-full">
            <input
              type="text"
              placeholder="Search . . ."
              className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 bg-violet-200"
            />
          </div>
          <Link href="/">
            <div className="flex flex-col">
              <h1 className="text-2xl bg-gradient-to-r from-violet-500 to-pink-500 font-semibold bg-clip-text text-transparent">Foodies</h1>
            </div>
          </Link>
        </div>

        <div className="flex flex-row px-2 space-x-2 text-slate-700 items-center">
          <FaMapLocation size={18} />
            <p >Jhenaidah, Bangladesh</p>
            <FaArrowDown size={18}/>
          </div>
        {/* Search (Desktop Only) */}
        <div className="hidden md:block flex-1 mx-2 max-w-5xl">
        
          <input
            type="text"
            placeholder="Search . . ."
            className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 bg-violet-200"
          />
        </div>

        {/* Desktop Icons & Login */}
        <div className="hidden md:flex space-x-4 items-center">
          <AiOutlineHeart size={24} />
          <AiOutlineBell size={24} />
          <Link href="/cart" className="flex space-x-2">
            <AiOutlineShoppingCart size={24} />
            <p className="text-sm">7</p>
          </Link>
          <button
            className="px-4 py-2 bg-gradient-to-b from-violet-400/50 to-pink-200/60 rounded-md hover:bg-black-200/50"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>
          <p>|</p>
          <Link href="/userProfile">
            <div>
              Profile
            </div>
          </Link>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 w-full bg-violet-200 text-slate-800 flex justify-around items-center py-3 md:hidden max-w-full">
        <AiOutlineHeart size={24} />
        <AiOutlineBell size={24} />
        <Link href="/cart" className="flex space-x-2">
          <AiOutlineShoppingCart size={24} />
          <p className="text-sm">7</p>
        </Link>
        <button
          className="px-4 py-2 bg-gradient-to-b from-violet-400 to-pink-200 text-slate-800 rounded-md hover:bg-green-600"
          onClick={() => setLoginOpen(true)}
        >
          Login
        </button>
      </div>

      {/* Login Modal */}
      {loginOpen && <Login setIsOpen={setLoginOpen} />}
    </div>
  );
};

export default Navbar;
