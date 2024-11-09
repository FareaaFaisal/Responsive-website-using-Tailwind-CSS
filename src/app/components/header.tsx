
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-30 lg:h-20 bg-[rgb(19,13,13)] py-2 fixed w-full z-10 ">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center lg:h-56 sm:h-full">
          <Image 
            src="/logotry3-removebg-preview.png" 
            alt="web page" 
            width={100} 
            height={100}
          />
        </div>
        <h1 className="text-white sm:text-[40px] text-lg-2xl sm:ml-[20px] md:text-4xl ml-3 m-0">
          <span>𝓕</span>𝘳𝘰𝘴𝘵𝘦𝘥 &nbsp; <span>𝓓</span>𝘳𝘦𝘢𝘮𝘴
        </h1>

        {/* Toggle Button for Mobile */}
        <button onClick={toggleMenu} className="text-white sm:hidden ml-auto pr-2">
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`sm:w-auto w-full list-none flex gap-[20px] m-0 p-0 sm:text-[20px] text-md flex-col sm:flex-row items-center sm:space-x-3 
        ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
        <li className="inline-flex items-center">
          <Link href="/" className="text-white no-underline p-[10px] hover:underline hover:bg-white hover:text-slate-950 hover:rounded-md">
            <strong>Home</strong>
          </Link>
        </li>
        <li className="inline-flex items-center">
          <Link href="/about-us" className="text-white no-underline p-[10px] hover:underline hover:bg-white hover:text-slate-950 hover:rounded-md">
            <strong>About Us</strong>
          </Link>
        </li>
        <li className="inline-flex items-center">
          <Link href="/contact-us" className="text-white no-underline p-[10px] hover:underline hover:bg-white hover:text-slate-950 hover:rounded-md">
            <strong>Contact Us</strong>
          </Link>
        </li>
        <li className="inline-flex items-center">
          <Link href="/our-branches" className="text-white no-underline p-[10px] hover:underline hover:bg-white hover:text-slate-950 hover:rounded-md">
            <strong>Our Branches</strong>
          </Link>
        </li>
      </ul>
    </div>
  );
}
