import React from 'react'
import api from '../api/api'
import Link from 'next/link';
import Image from 'next/image';
import categoryApi from '../api/categoryApi';
import { decode } from 'html-entities'



export async function getServerSideProps(context) {
    const { params } = context
    const catResponse = await fetch(`${categoryApi}?slug=${params.category}`, { cache: 'no-store' });
    const catData = await catResponse.json();
    const id = catData[0].id
    const catname = catData[0].name
    const response = await fetch(`${api}?categories=${id}`, { cache: 'no-store' });
    const adata = await response.json();
    const data = adata

    return {
        props: {
            data,
            catname
        },
    };
}

const Home = ({ data, catname }) => {
    if (!data) {
        return <p>Loading...</p>;
    } else if (data.length === 0) {
        return <p className='text-news-red font-semibold p-4 flex justify-center border bg-news-red/5'>No articles found</p>;
    }

    return (
        <>
            <section className='text-news-black max-w-7xl w-full'>
                < h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit text-left" >
                    {catname}
                </h2 >
                < div className="grid grid-cols-1 md:grid-cols-2 gap-2" >
                    {
                        data.map((a) => {
                            const first50 = a.excerpt.rendered.slice(0, -186) + '...' + '<span className="text-news-red">Read More</span>'
                            return (
                                <Link href={`news/${a.slug}-${a.id}`} className=" cursor-pointer p-4 flex flex-col gap-2  rounded-md bg-news-red/5 hover:bg-news-black/10 hover:text-news-red">
                                    {a.featured_media_src_url ? <Image className="rounded-md h-[250px] w-full" src={a.featured_media_src_url} alt="article thumbnail" width={400} height={300} /> : <Image className="rounded-md h-[250px] w-full" src="/empty.jpg" alt="No thumbnail" width={400} height={300} />}

                                    <h1 className="text-3xl font-bold">
                                        {decode(a.title.rendered)}
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

export default Home