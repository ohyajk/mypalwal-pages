import React from 'react'
import api from '../api/api'
import Link from 'next/link'
import Image from 'next/image'


const Haryana = ({ data }) => {

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1">
            {data.map((a) => {
                const first50 = a.excerpt.rendered.slice(0, -186) + '...' + '<span className="text-news-red">Read More</span>'
                return (
                    <Link key={a.id} href={`news/${a.slug}-${a.id}`} className=" cursor-pointer p-4 flex flex-col gap-2  rounded-md bg-news-red/5 hover:bg-news-black/10 hover:text-news-red">
                        <Image className="rounded-md h-[250px] w-full" src={a.featured_media_src_url} alt="article thumbnail" width={400} height={300} />
                        <h1 className="text-3xl font-bold">
                            {a.title.rendered}
                        </h1>
                        <p dangerouslySetInnerHTML={{ __html: first50 }} />
                    </Link>
                )
            })}
        </section>
    )
}


export default Haryana;