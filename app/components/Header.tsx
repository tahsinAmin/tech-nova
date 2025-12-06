"use client";
import Link from 'next/link';
import React from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className='container'>
      <nav className='navbar flex justify-between'>
        <Link href="/" onClick={() => setShowMenu(false)}>Logo</Link>
        <div className='hamburger' onClick={() => setShowMenu(!showMenu)}>=</div>
      </nav>
      <div className={`navbar-main-wrapper ${showMenu ? 'show' : ''}`}>
      <Link href="/about" onClick={() => setShowMenu(false)} className='navlink-text-2'>About</Link>
      <Link href="/contact" onClick={() => setShowMenu(false)} className='navlink-text-2'>Contact</Link>
      </div>
    </div>
  )
}

export default Header