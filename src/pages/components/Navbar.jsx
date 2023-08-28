'Use Client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [show, setShow] = useState(false)

    const categories = [{ name: 'होम', link: '/' }, { name: 'हरियाणा', link: '/category/haryana' }, { name: 'राष्ट्रीय', link: '/category/national' }, { name: 'अंतराष्ट्रीय', link: '/category/international' }, { name: 'राजनीती', link: '/category/politics' }, { name: 'मनोरंजन', link: '/category/entertainment' }, { name: 'खेल', link: '/category/sports' }, { name: 'प्रौद्योगिकी', link: '/category/technology' }]


    return (
        // MAIN NAVIGATION 
        <header className='bg-news-red w-full flex justify-center items-center box-border text-news-white'>
            <nav className='h-16 px-4 md:px-8 w-full max-w-7xl flex justify-between items-center box-border'>
                {/* LEFT NAV */}
                <div className='h-full w-full flex justify-between items-center gap-8'>
                    {/* LOGO OR TEXT */}
                    <div className=''>
                        {/* <h1 className='font-extrabold text-2xl lg:text-3xl whitespace-nowrap'>MY PALWAL</h1> */}
                        <img className='p-2' src="/logoss.png" alt="" />
                    </div>
                    {/* MENU OR LINKS */}
                    <ul className='h-full w-full hidden md:flex justify-center items-center relative'>
                        {/* MENU BUTTONS */}
                        {
                            categories.map((c, i) => {
                                return (
                                    <li key={c.name} className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 last:border-r-2 border-news-white/25 hover:bg-news-black'>
                                        <Link className='font-bold text-lg flex items-center gap-1' href={c.link}>
                                            <span>{c.name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                {/* RIGHT NAV */}
                {/* <div className='xl:flex items-center gap-4 hidden'>
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
                </div> */}
                {/* HAMBURGER MENU */}
                <div className='md:hidden'>
                    <button onClick={() => {setShow(!show); console.log('wow')}}>
                        <i className='bx bx-menu bx-md'></i>
                    </button>
                    {
                        show &&
                    <ul className='z-50 absolute left-0 top-0 bg-news-red h-full w-full flex flex-col md:hidden justify-center items-center py-8'>
                        {/* MENU BUTTONS */}
                        {
                            categories.map((c, i) => {
                                return (
                                    <li key={c.name} className='cursor-pointer h-full w-full flex justify-center items-center px-2  hover:bg-news-black'>
                                        <Link className='font-bold text-lg flex items-center gap-1' href={c.link}>
                                            <span>{c.name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar