import Link from "next/link"
import Time from "./Time"

const TopNav = () => {

    return (
        // TOP NAVIGATION
        <div className='h-10 px-4 md:px-8 bg-news-black flex justify-center items-center border-b-2 text-news-white border-news-white/50'>
            <div className="w-full max-w-7xl flex justify-between">
                <div>
                    <Time />
                </div>

                <ul className="hidden md:flex gap-4 ">
                    <li>
                        <Link className="hover:text-news-red" href='/contact'>CONTACT</Link>
                    </li>
                    <li>
                        <Link className="hover:text-news-red" href='/about'>ABOUT</Link>
                    </li>
                    <li>
                        <Link className="hover:text-news-red" href='/privacy-policy'>PRIVACY</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopNav