"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"



const Header = () => {

    const pathname = usePathname()

    return ( 
        <header className="flex justify-center text-center bg-[#BA324F] p-[2rem] gap-10">
            <section className="border-2 border-white p-[10rem]">
                <img className="flex items-center justify-center h-[10rem] w-[10rem] rounded-2xl" src="/img/pink-me-2.png" alt="Logo" />
                <img className="flex place-self-center h-[10rem]" src="/img/navn.png" alt="Name" />
                <nav className="">
                    <Link className={pathname == "/" ? "pl-5 text-3xl hover:underline text-[#4BA3C3]" : "text-white pl-5 text-3xl hover:underline"} href="/">Home Page</Link>    
                    <Link className={pathname == "/info-page" ? "pl-5 text-3xl hover:underline text-[#4BA3C3]" : "text-white pl-5 text-3xl hover:underline"} href="/info-page">Info Page</Link>
                    <Link className={pathname == "/gallery" ? "pl-5 text-3xl hover:underline text-[#4BA3C3]" : "text-white pl-5 text-3xl hover:underline"} href="/gallery">Gallery</Link>
                </nav>
            </section>
        </header>
     );
}
 
export default Header;