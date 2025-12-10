"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);

  const isActive = (path: string) => pathname === path;
  return (
    <div className='container'>
      <nav className='navbar flex justify-between bg-white rounded-xl'>
        <Link href="/" className='pl-[18px]' onClick={() => setShowMenu(false)}><Image src="/logo-red-big-1.svg" alt="Logo" width={200} height={200} /></Link>
        <div className='flex-1 flex gap-5 justify-end'>
          <div className='navlinks hidden lg:flex'>
            <Link href="/" className={`navlink-text-2 ${isActive('/') ? 'border-b-2 border-red-500' : ''}`}>Home</Link>
            <Link href="/about" className={`navlink-text-2 ${isActive('/about') ? 'border-b-2 border-red-500' : ''}`}>About</Link>
            <Link href="/contact" className={`navlink-text-2 ${isActive('/contact') ? 'border-b-2 border-red-500' : ''}`}>Contact</Link>
            <Link href="/contact" className='cta nav'>Let's Start</Link>
          </div>

          <div className='hamburger lg:hidden cursor-pointer flex flex-col justify-between h-[50px] gap-[10px]' onClick={() => setShowMenu(!showMenu)}>
            <div className="top w-[36px] h-[3px] bg-black"></div>
            <div className="bottom w-[36px] h-[3px] bg-black"></div>
          </div>
        </div>
      </nav>
      <div className={`navbar-main-wrapper ${showMenu ? 'show' : ''}`}>
        <Link href="/about" onClick={() => setShowMenu(false)} className={`navlink-text-2 ${isActive('/about') ? 'border-b-2 border-red-500' : ''}`}>About</Link>
        <Link href="/contact" onClick={() => setShowMenu(false)} className={`navlink-text-2 ${isActive('/contact') ? 'border-b-2 border-red-500' : ''}`}>Contact</Link>
      </div>
    </div>
  )
}

export default Header