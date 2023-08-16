import Link from "next/link";


const Header = () => {
    return ( 
        <header className="flex flex-col justify-center text-center bg-[#BA324F] p-[2rem] gap-10">
            <section className="border-2 border-white p-[10rem]">
                <img className="h-[10rem] w-[10rem] place-self-center rounded-2xl" src="/img/pink-me-2.png" alt="" />
                <img className="place-self-center h-[10rem] " src="/img/navn.png" alt="Logo" />
                <nav className="">
                    <Link className="pl-5 text-3xl hover:underline" href="/">Home Page</Link>    
                    <Link className="pl-5 text-3xl hover:underline" href="/info-page">Info Page</Link>
                    <Link className="pl-5 text-3xl hover:underline" href="/gallery">Gallery</Link>
                </nav>
            </section>
        </header>
     );
}
 
export default Header;