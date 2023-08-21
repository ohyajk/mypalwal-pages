import React from 'react'
import api from '../api/api'
import Link from 'next/link';
import Image from 'next/image';

export async function getServerSideProps() {
    // Get Haryana
    const response = await fetch(`${api}?categories=1`, { cache: 'no-store' });
    const adata = await response.json();
    const data = adata

    return {
        props: {
            data,
        },
    };
}

const Home = ({ data }) => {
    return (
        <>
            <section className='text-news-black max-w-7xl w-full'>
                < h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit text-left" >
                    हरियाणा
                </h2 >
                < div className="grid grid-cols-1 md:grid-cols-2 gap-2" >
                    {
                        data.map((a) => {
                            const first50 = a.excerpt.rendered.slice(0, -186) + '...' + '<span className="text-news-red">Read More</span>'
                            return (
                                <Link href={`news/${a.slug}-${a.id}`} className=" cursor-pointer p-4 flex flex-col gap-2  rounded-md bg-news-red/5 hover:bg-news-black/10 hover:text-news-red">
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

export default Home