import api from "./api/api";
import Breaking from "./components/Breaking";
import Entertainment from "./home/Entertainment";
import Haryana from "./home/Haryana";
import Hero from "./home/Hero";
import Hero2 from "./home/Hero2";

export async function getServerSideProps() {
  // GET Breaking News
  const fetchBreaking = await fetch(`${api}?categories=50`, { cache: 'no-store' })
  const breakingData = await fetchBreaking.json()
  const breakings = breakingData.slice(0, 5)
  // Get Big 4
  const fetcher = await fetch(`${api}?categories=49`, { cache: 'no-store' })
  const allData = await fetcher.json()
  const big4 = allData.slice(0, 4)
  // Get Haryana
  const response = await fetch(`${api}?categories=1`, { cache: 'no-store' });
  const adata = await response.json();
  const haryanaPosts = await adata.slice(0, 3)
  // Get Entertainment
  const responseEnt = await fetch(`${api}?categories=11`, { cache: 'no-store' });
  const adataEnt = await responseEnt.json();
  const entertainmentPosts = await adataEnt.slice(0, 3)
  return {
    props: {
      breakings,
      big4,
      haryanaPosts,
      entertainmentPosts
    },
  };
}

export default function Home({ breakings, big4, haryanaPosts, entertainmentPosts }) {
  return (
    <>
      {/* Breakings */}
      <Breaking data={breakings} />
      {/* Big News Hero */}
      <Hero data={big4} />
      {/* Ad */}
      <div className='h-[160px] w-full p-2 my-4 flex justify-center items-center bg-zinc-600/50'>
        Your Ad Here
      </div>
      {/* Haryana */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        हरियाणा
      </h2>
      <Haryana data={haryanaPosts} />
      {/* National */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        देश
      </h2>
      {/* International */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        विदेश
      </h2>
      {/* Politics */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        राजनीती
      </h2>
      {/* Sports */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        खेल
      </h2>
      {/* Entertainment */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        मनोरंजन
      </h2>
      <Entertainment data={entertainmentPosts} />
      {/* Technology */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        प्रौद्योगिकी
      </h2>
      {/* <Hero2 /> */}
    </>
  )
}
