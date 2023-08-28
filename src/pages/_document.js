import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/pages/components/Footer'
import Navbar from '@/pages/components/Navbar'
import TopNav from '@/pages/components/TopNav'
import Socials from './sidebar/Socials'
import Adbox from './sidebar/Adbox'
import Forex from './sidebar/Forex'
import Metal from './sidebar/Metal'
import { decode } from 'html-entities'


export default function Document() {

  decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');

  return (
    <Html lang="en">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6707176738687530"
          crossorigin="anonymous"></script>
      </Head>
      <body>
        <TopNav />
        <Navbar />
        <main className='flex flex-col items-center'>
          <div className="text-news-black max-w-7xl px-2 md:px-8 box-content grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className='col-span-4 md:col-span-3'>
              <Main />
            </div>
            <aside className='p-2 flex flex-col gap-2'>
              <Socials />
              <Adbox />
              <Forex />
              <Adbox />
              <Metal />
            </aside>
          </div>
        </main>
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
