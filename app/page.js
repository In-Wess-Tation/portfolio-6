import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-[5rem] text-[#CCE6F4]">
      <section className='pb-[10rem]'>
        <h1 className='text-[2.5rem] pl-[6rem] pb-[3rem]'>Meet the Artist</h1>
        <article className='flex justify-center gap-[3rem]'>

        <article className='w-[40%]'>
          <p className='text-[#4BA3C3]'>Greetings! My name is Weslyn Lundberg Toft and I’m a 22-year-old Web Developer / artist. This is my very own portfolio that I’ve created using Next.js and Tailwind CSS. </p>
          <p className='text-[#4BA3C3]'>In this portfolio you will be able to see some of my previous works and websites that I’ve created. There will also be a link to my GitHub, so you will be able to see my other works that aren’t currently online. </p>
        </article>

        <article className='w-[40%]'>
          <p className='text-[#4BA3C3]'>I’ve been drawing and making art since I was about nine years old, and I newly started my journey as a Web Developer last year (2022). Before I started, I had no idea the passion and fun I would have and get for this industry and for this work. </p>
          <p className='text-[#4BA3C3]'>. To me, websites are like learning a new language. A new way to see and understand the world and that’s an amazing aspect to me. </p>
        </article>

        </article>
      </section>


      <section className='pb-[10rem]'>
        <h1 className='text-[2.5rem] text-center pb-[5rem]'>Dazzling Masterpieces</h1>
        <article className='grid grid-rows-2 grid-flow-col gap-10 place-content-center'>
          <img className='w-[25rem] h-[25rem] object-cover' src="/img/moterbike-2.png" alt="" />
          <img className='w-[25rem] h-[25rem] object-cover' src="/img/eye.png" alt="" />
          <img className='w-[25rem] h-[25rem] object-cover' src="/img/albino.png" alt="" />
          <img className='w-[25rem] h-[25rem] object-cover' src="/img/genderfluid.png" alt="" />
        </article>
      </section>


      <section>
        <article>
          <h1>Ready to Dive into Weslyn's World?</h1>
          <button><Link href="/gallery">Gallery</Link></button>
          <button><Link href="/info-page">Info Page</Link></button>
        </article>
      </section>
    </main>
  )
}
