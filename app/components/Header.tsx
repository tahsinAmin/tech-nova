'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();
    const [showMenu, setShowMenu] = React.useState(false);
    const [atTop, setAtTop] = useState(true);

    const isActive = (path: string) => pathname === path;

    // Handle body overflow when menu is open/closed
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showMenu]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const controlNavbar = () => {

            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                setAtTop(false);
            } else {
                setAtTop(true);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        if (showMenu) {
            window.removeEventListener('scroll', controlNavbar);
        } else {
            window.addEventListener('scroll', controlNavbar);
        }
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);
    return (
        <>
            <div className={`navbar fixed w-full ${pathname.replace(/\//g, '')} transition-transform duration-300 z-50  ${atTop ? 'at-top bg-transparent' : showMenu ? '' : 'bg-white shadow-md'} ${isVisible ? 'translate-y-0' : '-translate-y-full mt-0'}`}>
                <nav className={`flex justify-between items-center rounded-xl`}>
                    <Link href="/" className='pl-[18px]' onClick={() => setShowMenu(false)}><Image src="/logo-red-big-1.svg" alt="Logo" width={200} height={30} /></Link>
                    <div className='flex-1 flex gap-5 justify-end'>
                        <div className='navlinks hidden lg:flex'>
                            <Link href="/" className={`navlink-text-2 ${isActive('/') ? 'border-b-2 border-red-500' : ''}`}>Home</Link>
                            <Link href="/about" className={`navlink-text-2 ${isActive('/about') ? 'border-b-2 border-red-500' : ''}`}>About</Link>
                            <Link href="/contact" className={`navlink-text-2 ${isActive('/contact') ? 'border-b-2 border-red-500' : ''}`}>Contact</Link>
                            <Link href="/contact" className='cta nav'>Let's Start</Link>
                        </div>

                        <div className='hamburger lg:hidden cursor-pointer flex flex-col justify-between h-[50px] gap-[10px]' onClick={() => {
                            setShowMenu(!showMenu);
                        }}>
                            <div className={`top w-[36px] h-[3px] ${showMenu ? 'bg-white' : atTop && pathname.replace(/\//g, '') === '' ? 'bg-white' : 'bg-black'}`}></div>
                            <div className={`bottom w-[36px] h-[3px] ${showMenu ? 'bg-white' : atTop && pathname.replace(/\//g, '') === '' ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    </div>

                </nav>
            </div>
            <div className={`navbar-main-wrapper ${showMenu ? 'show' : ''}`}>
                <Link href="/about" onClick={() => setShowMenu(false)} className={`navlink-text-2 ${isActive('/about') ? 'border-b-2 border-red-500' : ''}`}>About</Link>
                <Link href="/contact" onClick={() => setShowMenu(false)} className={`navlink-text-2 ${isActive('/contact') ? 'border-b-2 border-red-500' : ''}`}>Contact</Link>
            </div>
        </>
    )
}

export default Header