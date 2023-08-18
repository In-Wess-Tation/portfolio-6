

const Gallery = () => {
    return ( 
        <main className="p-[5rem] text-[#CCE6F4]">
        <section>
            
        </section>

        <section className="flex justify-center gap-10 pb-[7rem]">
            <img className="h-[15rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/Animation_Day_.png" alt="Artwork" />
            <img className="h-[15rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/Wings.png" alt="Artwork" />
            <img className="h-[15rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/me-lofi.png" alt="Artwork" />
        </section>

        <section className="flex justify-center gap-5 m-[-4rem] py-10">
            <article className="flex gap-3 border-gray-400 border-[0.2rem] bg-slate-300 p-2">
                <img className="h-[10rem]" src="/img/pink-me-2.png" alt="Pink artwork" />
                <div>
                <h2 className="text-[1.5rem] text-[#4BA3C3]">Pink artwork</h2>
                <p className="text-[#4BA3C3] ">This is a simple concept drawing of oen of my original characters</p>
                </div>
            </article>
            <article className="flex gap-3 border-gray-400 border-[0.2rem] bg-slate-300 p-2">
                <img className="h-[10rem]" src="/img/bubblegum-2.png" alt="Pink artwork" />
                <div>
                <h2 className="text-[1.5rem] text-[#4BA3C3]">Gorillaz inspired artwork</h2>
                <p className="text-[#4BA3C3]">This artwork is isnpired by the Gorillaz song "Humility"</p>
                </div>
            </article>
            <article className="flex gap-3 border-gray-400 border-[0.2rem] bg-slate-300 p-2">
                <img className="h-[10rem]" src="/img/dis-tattoo-2.png" alt="Pink artwork" />
                <div>
                <h2 className="text-[1.5rem] text-[#4BA3C3]">Tattoo artwork</h2>
                <p className="text-[#4BA3C3]">This is a tattoo design for the mental trouble of dissociation</p>
                </div>
            </article>
            <article className="flex gap-3 border-gray-400 border-[0.2rem] bg-slate-300 p-2">
                <img className="h-[10rem]" src="/img/Azrael1.png" alt="Pink artwork" />
                <div>
                <h2 className="text-[1.5rem] text-[#4BA3C3]">D&D artwork</h2>
                <p className="text-[#4BA3C3]">This is a concept drawing of my D&D character Arael, who is a changling bard</p>r
                </div>
            </article>
        </section>

        <section className="flex m-[-5rem] py-[10rem]">
            <img className="w-[25%]" src="/img/eye-2.png" alt="Blue eye artwork" />
            <img className="w-[25%]" src="/img/DND.png" alt="D&D drawing" />
            <img className="w-[25%]" src="/img/tzekel-kan-2.png" alt="Tzekel Kan drawing" />
            <img className="w-[25%]" src="/img/pan-me-2.png" alt="Pansexual drawing" />
        </section>

        <section className="flex justify-center gap-5">
            <img className="w-[15rem] rounded-[10rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/albino.png" alt="Realistic artwork of an albino girl" />
            <img className="w-[15rem] rounded-[10rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/pride-me.png" alt="Pride drawing of creator" />
            <img className="w-[15rem] rounded-[10rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/siren.png" alt="Realistic artwork of an siren girl" />
            <img className="w-[15rem] rounded-[10rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/lightning-2.png" alt="Lightning drawing" />
            <img className="w-[15rem] rounded-[10rem] hover:scale-125 transition duration-500 cursor-pointer" src="/img/green-me-2.png" alt="Drawing of one of my original characters" />
        </section>

        <section className="flex m-[-5rem] py-[10rem]">
            <img className="w-[25%]" src="/img/art-me.png" alt="Tzekel Kan drawing" />
            <img className="w-[25%]" src="/img/book-shop.png" alt="Blue eye artwork" />
            <img className="w-[25%]" src="/img/route66.jpg" alt="Pansexual drawing" />
            <img className="w-[25%]" src="/img/city-me.png" alt="D&D drawing" />
        </section>

        <section className="flex justify-center gap-[10rem]">
            <img className="rounded-[15rem] w-[25%]" src="/img/dragon-2.png" alt="Dragon tattoo" />
            <img className="rounded-[15rem] w-[25%]" src="/img/tettoo-sleeve-2.png" alt="Tattoo sleeve" />
        </section>

        </main>
     );
}
 
export default Gallery;