import api from "./api/api";
import Breaking from "./components/Breaking";
import Hero from "./home/Hero";
import Catbox from "./home/Catbox";

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
  // Get International
  const responseInt = await fetch(`${api}?categories=5`, { cache: 'no-store' });
  const adataInt = await responseInt.json();
  const InternationalPosts = await adataInt.slice(0, 3)
  // Get National
  const responseNat = await fetch(`${api}?categories=4`, { cache: 'no-store' });
  const adataNat = await responseNat.json();
  const nationalPosts = await adataNat.slice(0, 3)
  // Get Business
  const responseBiz = await fetch(`${api}?categories=7`, { cache: 'no-store' });
  const adataBiz = await responseBiz.json();
  const bizPosts = await adataBiz.slice(0, 3)
  // Get Technology
  const responseTech = await fetch(`${api}?categories=12`, { cache: 'no-store' });
  const adataTech = await responseTech.json();
  const techPosts = await adataTech.slice(0, 3)
  // Get Sports
  const responseSp = await fetch(`${api}?categories=74`, { cache: 'no-store' });
  const adataSp = await responseSp.json();
  const sportPosts = await adataSp.slice(0, 3)
  // Get Viral
  const responseViral = await fetch(`${api}?categories=8`, { cache: 'no-store' });
  const adataViral = await responseViral.json();
  const viralPosts = await adataViral.slice(0, 3)
  // Get Astro
  const responseAstro = await fetch(`${api}?categories=9`, { cache: 'no-store' });
  const adataAstro = await responseAstro.json();
  const astroPosts = await adataAstro.slice(0, 3)
  // Get Health
  const responseHealth = await fetch(`${api}?categories=9`, { cache: 'no-store' });
  const adataHealth = await responseHealth.json();
  const healthPosts = await adataHealth.slice(0, 3)

  // Get Health
  const responsePol = await fetch(`${api}?categories=9`, { cache: 'no-store' });
  const adataPol = await responsePol.json();
  const politicsPosts = await adataPol.slice(0, 3)
  return {
    props: {
      breakings,
      big4,
      haryanaPosts,
      entertainmentPosts,
      InternationalPosts,
      nationalPosts,
      bizPosts,
      techPosts,
      sportPosts,
      viralPosts,
      astroPosts,
      healthPosts,
      politicsPosts
    },
  };
}

export default function Home({ breakings, big4, haryanaPosts, entertainmentPosts, InternationalPosts, nationalPosts, bizPosts, techPosts, sportPosts, viralPosts, astroPosts, healthPosts, politicsPosts }) {
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
      <Catbox cat={'haryana'} data={haryanaPosts} />

      {/* National */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        देश
      </h2>
      <Catbox cat={'national'} data={nationalPosts} />

      {/* Ad */}
      <div className='h-[160px] w-full p-2 my-4 flex justify-center items-center bg-zinc-600/50'>
        Your Ad Here
      </div>

      {/* International */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        विदेश
      </h2>
      <Catbox cat={'international'} data={InternationalPosts} />

      {/* Politics */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        राजनीती
      </h2>
      <Catbox cat={'politics'} data={politicsPosts} />

      {/* Ad */}
      <div className='h-[160px] w-full p-2 my-4 flex justify-center items-center bg-zinc-600/50'>
        Your Ad Here
      </div>

      {/* Entertainment */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        मनोरंजन
      </h2>
      <Catbox data={entertainmentPosts} />

      {/* Technology */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        प्रौद्योगिकी
      </h2>
      <Catbox data={techPosts} />

      {/* Ad */}
      <div className='h-[160px] w-full p-2 my-4 flex justify-center items-center bg-zinc-600/50'>
        Your Ad Here
      </div>

      {/* Business */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        व्यापार
      </h2>
      <Catbox data={bizPosts} />

      {/* Sports */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        खेल
      </h2>
      <Catbox data={sportPosts} />


      {/* Ad */}
      <div className='h-[160px] w-full p-2 my-4 flex justify-center items-center bg-zinc-600/50'>
        Your Ad Here
      </div>
      {/* Viral */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        वायरल
      </h2>
      <Catbox data={viralPosts} />

      {/* Astrology */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        ज्योतिष
      </h2>
      <Catbox data={astroPosts} />

      {/* Ad */}
      <div className='h-[160px] w-full p-2 my-4 flex justify-center items-center bg-zinc-600/50'>
        Your Ad Here
      </div>

      {/* Health */}
      <h2 className="my-2 py-2 px-4 bg-news-red text-news-white text-2xl font-bold w-fit">
        सेहत
      </h2>
      <Catbox data={healthPosts} />
    </>
  )
}
