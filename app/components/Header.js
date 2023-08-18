"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Abril_Fatface } from 'next/font/google'

const fatface = Abril_Fatface({ subsets: ['latin'], weight: ["400"] })
// const tilt_prism = Tilt_Prism({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })




const Header = () => {

    const pathname = usePathname()

    return ( 
        <header className="flex justify-center text-center bg-[#BA324F] p-[2rem] gap-10">
            <section className="border-2 border-white p-[10rem] py-[15rem]">
                <img className="flex place-self-center h-[10rem]" src="/img/navn.png" alt="Name" />
                <nav>
                    <Link className={pathname == "/" ? `pl-5 text-3xl hover:underline text-[#4BA3C3] ${fatface.className}` : `text-white pl-5 text-3xl hover:underline ${fatface.className}`} href="/">Home Page</Link>    
                    <Link className={pathname == "/gallery" ? `pl-5 text-3xl hover:underline text-[#4BA3C3] ${fatface.className}` : `text-white pl-5 text-3xl hover:underline ${fatface.className}`} href="/gallery">View Artworks</Link>
                    <Link className={pathname == "/info-page" ? `pl-5 text-3xl hover:underline text-[#4BA3C3] ${fatface.className}` : `text-white pl-5 text-3xl hover:underline ${fatface.className}`} href="/info-page">About Weslyn</Link>
                </nav>
            </section>
        </header>
     );
}
 
export default Header;