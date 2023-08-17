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
          <img className='w-[25rem] h-[30rem] object-cover' src="/img/moterbike-2.png" alt="" />
          <img className='w-[25rem] h-[30rem] object-cover' src="/img/eye.png" alt="" />
          <img className='w-[25rem] h-[30rem] object-cover' src="/img/sundown-2.png" alt="" />
          <img className='w-[25rem] h-[30rem] object-cover' src="/img/city-me.png" alt="" />
        </article>
      </section>


      <section>
        <h2 className='text-[2.5rem]'>Websites</h2>
        <article className='grid grid-cols-3 pb-[10rem] gap-5'>
           <article className='border-[0.2rem] border-[#CCE4F6] p-5 text-center'>
          <img className=' h-[11rem] object-cover' src="/img/MyMovie.png" alt="Movie Website" />
          <h2 className='text-2xl p-3'>My Movie Webpage</h2>
          <p>This website was my first attempt at using an API fully on a whole website. It's made with clean JavaScript and normal CSS.</p>
          <Link className='underline text-xl text-[#4BA3C3]' href="https://mymovies-wess.netlify.app/">Link to MyMovie</Link>
        </article>
        <article className='border-[0.2rem] border-[#CCE4F6] p-5 text-center'>
          <img className=' h-[11rem] object-cover' src="/img/movibes.png" alt="Movie Website" />
          <h2 className='text-2xl p-3'>Movibes Webpage</h2>
          <p>This website is a sequal to my first movie site, MyMovie. This site is made with Next.js and Tailwind CSS.</p>
          <Link className='underline text-xl text-[#4BA3C3]' href="https://weslyn-movibes.netlify.app/">Link to Movibes</Link>
        </article>
        <article className='border-[0.2rem] border-[#CCE4F6] p-5 text-center'>
          <img className=' h-[11rem] object-cover' src="/img/Portfolio4.png" alt="Movie Website" />
          <h2 className='text-2xl p-3'>My 4th Portolio</h2>
          <p>This is my fourth attempt at makin my portfolio. This webpage is made with vanilla React and CSS components.</p>
          <Link className='underline text-xl text-[#4BA3C3]' href="https://weslyn-portfolio-4.netlify.app/">Link to 4th Portfolio</Link>
        </article>
        </article>
       
      </section>


      <section>
        <article>
          <h1 className='text-[2.5rem] pb-3'>Ready to Dive into Weslyn's World?</h1>
          <div className='flex gap-3'>
          <button className='bg-white text-black px-10 py-3 rounded-xl text-xl'><Link href="/info-page">Info Page</Link></button>
          <button className='bg-[#CCE4F6] text-black px-10 py-3 rounded-xl text-xl'><Link href="/gallery">Gallery</Link></button>
          </div>
        </article>
      </section>
    </main>
  )
}
