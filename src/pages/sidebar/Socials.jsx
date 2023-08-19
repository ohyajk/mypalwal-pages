import React from 'react'

const Socials = () => {
    return (
        <>
            <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
                FOLLOW US
            </h2>
            <div className='flex flex-col gap-1 '>
                <a className='bg-[#4080FF] hover:bg-black py-2 px-4 flex justify-between items-center' href="#" target="_blank" rel="noopener noreferrer">
                    <i className='text-white bx bx-lg bxl-facebook-circle'></i>
                    <h2 className='text-white font-semibold'>Connect On Facebook</h2>
                </a>
                <a className='bg-[#40bff5] hover:bg-black py-2 px-4 flex justify-between items-center' href="#" target="_blank" rel="noopener noreferrer">
                    <i className='text-white bx bx-lg bxl-twitter'></i>
                    <h2 className='text-white font-semibold'>Connect On Twitter</h2>
                </a>
                <a className='bg-[#E1306C] hover:bg-black py-2 px-4 flex justify-between items-center' href="#" target="_blank" rel="noopener noreferrer">
                    <i className='text-white bx bx-lg bxl-instagram'></i>
                    <h2 className='text-white font-semibold'>Connect On Instagram</h2>
                </a>
                <a className='bg-[#ef4e41] hover:bg-black py-2 px-4 flex justify-between items-center' href="#" target="_blank" rel="noopener noreferrer">
                    <i className='text-white bx bx-lg bxl-youtube'></i>
                    <h2 className='text-white font-semibold'>Connect On Youtube</h2>
                </a>
            </div>
        </>
    )
}

export default Socials