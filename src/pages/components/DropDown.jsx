"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const DropDown = () => {

    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <>
            <li onMouseDown={() => { setShowDropDown(true); console.log('entered') }} onMouseLeave={() => setShowDropDown(false)} className='relative hidden cursor-pointer h-full lg:flex flex-col justify-center items-center px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                <div className='font-bold text-lg flex items-center gap-1' href="/">
                    <i className='bx bx-category bx-burst' ></i>
                    <span>अन्य </span>
                    <i className='bx bxs-down-arrow bx-xs ml-2 bx-tada ' ></i>
                </div>
            </li>
            {
                showDropDown &&
                <div onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)} className='absolute top-16 right-24 flex flex-col justify-start items-start text-left bg-news-red'>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/politics">
                            <i className='bx bx-poll' ></i>
                            <span>राजनीती</span>
                        </Link>
                    </li>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/entertainment">
                            <i className='bx bx-film' ></i>
                            <span>मनोरंजन</span>
                        </Link>
                    </li>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/sports">
                            <i className='bx bx-cricket-ball' ></i>
                            <span>खेल</span>
                        </Link>
                    </li>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/technology">
                            <i className='bx bx-laptop' ></i>
                            <span>प्रौद्योगिकी</span>
                        </Link>
                    </li>
                </div>
            }
        </>
    )
}

export default DropDown