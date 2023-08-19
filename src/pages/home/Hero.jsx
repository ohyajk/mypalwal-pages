import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ data }) => {
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <section className='text-news-black max-w-7xl w-full'>
                < h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit text-left" >
                    बड़ी खबर
                </h2 >
                < div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2" >
                    {
                        data.map((a) => {
                            const first50 = a.excerpt.rendered.slice(0, -186) + '...' + '<span className="text-news-red">Read More</span>'
                            return (
                                <Link href={`news/${a.id}`} className=" cursor-pointer p-4 flex flex-col gap-2  rounded-md bg-news-red/5 hover:bg-news-black/10 hover:text-news-red">
                                    <Image className="rounded-md h-[250px] w-full" src={a.featured_media_src_url} alt="article thumbnail" width={400} height={300} />
                                    <h1 className="text-3xl font-bold">
                                        {a.title.rendered}
                                    </h1>
                                    <p dangerouslySetInnerHTML={{ __html: first50 }} />
                                </Link>
                            )
                        })
                    }
                </div >
            </section>
        </>
    )
}

export default Hero