import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const categories = [{ name: 'हरियाणा', link: '/haryana' }, { name: 'राष्ट्रीय', link: '/national' }, { name: 'अंतराष्ट्रीय', link: '/international' }, { name: 'राजनीती', link: '/politics' }, { name: 'मनोरंजन', link: '/entertainment' }, { name: 'खेल', link: '/sports' }, { name: 'प्रौद्योगिकी', link: '/technology' }]
    const socials = [{ name: 'Facebook', link: 'https://www.facebook.com/bharatbrandingservices' }, { name: 'Twitter', link: 'https://www.twitter.com/bharatbrandings' }, { name: 'Instagram', link: 'https://www.instagram.com/bharatbrandingservices' }, { name: 'Linkedin', link: 'https://www.linkedin.com/in/bharatbrandingservices' }, { name: 'Koo App', link: 'https://www.kooapp.com/profile/bharatbrandingservices' }]
    return (
        <footer>
            <div className='bg-news-red text-news-white flex justify-center'>
                <div className='max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                    <div className='p-4 flex flex-col justify-start items-center gap-2'>
                        <img src="/logoss.png" alt="logo" />
                        <p>
                            हमें आपको नवीनतम और सबसे व्यापक समाचार कवरेज देने पर बेहद गर्व है, MY PALWAL पर हम न केवल पलवल शहर बल्कि पूरे हरियाणा राज्य के साथ देश-विदेश की खबरें लेकर आये हैं| सटीकता, विषयता और पत्रकारिता के प्रति अविचल प्रतिबद्धता के लिए जुड़े रहिये MY Palwal के साथ ।
                        </p>
                    </div>
                    <div className='p-2 flex flex-col justify-start items-center'>
                        <h2 className='text-2xl font-semibold py-2'>Categories</h2>
                        <ul className='flex flex-col gap-1 list-disc'>
                            {
                                categories.map((c, i) => {
                                    return (
                                        <li key={c.name} className='cursor-pointer hover:text-news-black'>
                                            <Link href={c.link}>
                                                <span>{c.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='p-2 flex flex-col justify-start items-center'>
                        <h2 className='text-2xl font-semibold py-2'>Social Media</h2>
                        <ul className='flex flex-col gap-1 list-disc'>
                            {
                                socials.map((s, i) => {
                                    return (
                                        <li key={s.name} className='cursor-pointer hover:text-news-black'>
                                            <Link href={s.link}>
                                                <span>{s.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='p-2 flex flex-col justify-start items-center'>
                        <h2 className='text-2xl font-semibold py-2'>Useful Links</h2>
                        <ul className='flex flex-col gap-1 list-disc'>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                            <li>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-news-white bg-news-black py-4 flex flex-col justify-center items-center gap-2'>
                <h4 className='text-xl font-semibold'>© ℗ MY PALWAL™ 2023</h4>
                <h6>Designed and Developed with <i class='bx bxs-heart'></i> by Bharat Branding Services</h6>
            </div>
        </footer>
    )
}

export default Footer