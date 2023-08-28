import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { decode } from 'html-entities'


const Catbox = ({ data, cat }) => {

    if (!data) {
        return <p>Loading...</p>;
    } else if (data.length === 0) {
        return <p className='text-news-red font-semibold p-4 flex justify-center border bg-news-red/5'>No articles found</p>;
    }

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1">
                {data.map((a) => {
                    const first50 = a.excerpt.rendered.slice(0, -186) + '...' + '<span className="text-news-red">Read More</span>'
                    return (
                        <Link key={a.id} href={`news/${a.slug}-${a.id}`} className=" cursor-pointer p-4 flex flex-col gap-2  rounded-md bg-news-red/5 hover:bg-news-black/10 hover:text-news-red">
                            {a.featured_media_src_url ? <Image className="rounded-md h-[250px] w-full" src={a.featured_media_src_url} alt="article thumbnail" width={400} height={300} /> : <Image className="rounded-md h-[250px] w-full" src="/empty.jpg" alt="No thumbnail" width={400} height={300} />}
                            <h1 className="text-3xl font-bold">
                                {decode(a.title.rendered)}
                            </h1>
                            <p dangerouslySetInnerHTML={{ __html: first50 }} />
                        </Link>
                    )
                })}
            </section>
            <Link href={`/category/${cat}`} >See More</Link>
        </>
    )
}


export default Catbox;