import Link from 'next/link'
import React from 'react'
import DropDown from './DropDown'

const Navbar = () => {
    return (
        // MAIN NAVIGATION 
        <header className='bg-news-red w-full flex justify-center items-center box-border text-news-white'>
            <nav className='h-16 px-4 md:px-8 w-full max-w-7xl flex justify-between items-center box-border'>
                {/* LEFT NAV */}
                <div className='h-full w-full flex justify-between items-center gap-8'>
                    {/* LOGO OR TEXT */}
                    <div className=''>
                        <h1 className='font-extrabold text-2xl lg:text-3xl whitespace-nowrap'>MY PALWAL</h1>
                    </div>
                    {/* MENU OR LINKS */}
                    <ul className='h-full w-full hidden md:flex justify-center items-center relative'>
                        {/* MENU BUTTONS */}
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i className='bx bxs-home bx-burst'></i>
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/haryana">
                                <i className='bx bxs-flag bx-burst' ></i>
                                <span>हरियाणा</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/national">
                                <i className='bx bxs-castle bx-burst' ></i>
                                <span>राष्ट्रीय</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/international">
                                <i className='bx bx-globe bx-burst'></i>
                                <span>अंतराष्ट्रीय </span>
                            </Link>
                        </li>
                        <DropDown />
                    </ul>
                </div>
                {/* RIGHT NAV */}
                <div className='xl:flex items-center gap-4 hidden'>
                    <button>
                        <a href='https://www.facebook.com/bharatbrandingservices'><i className='hover:text-news-black bx bxl-facebook-circle bx-sm' ></i></a>
                    </button>
                    <button>
                        <a href='https://www.twitter.com/bharatbrandings'><i className='hover:text-news-black bx bxl-twitter bx-sm' ></i></a>
                    </button>
                    <button>
                        <a href='https://www.instagram.com/bharatbrandingservices'><i className='hover:text-news-black bx bxl-instagram-alt bx-sm'></i></a>
                    </button>
                    <button>
                        <a href='https://www.facebook.com/bharatbrandingservices'><i className='hover:text-news-black bx bxs-envelope bx-sm' ></i></a>
                    </button>
                </div>
                {/* HAMBURGER MENU */}
                <div className='md:hidden'>
                    <button>
                        <i className='bx bx-menu bx-md'></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar