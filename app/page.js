import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section>
        <h1>Meet the Artist</h1>
        <article>
          <p className='color-[##4BA3C3]'></p>
          <p className='color-[##4BA3C3]'></p>
        </article>
        <article>
          <p className='color-[##4BA3C3]'></p>
          <p className='color-[##4BA3C3]'></p>
        </article>
      </section>


      <section>
        <h1 className='text-2xl text-center pb-[5rem]'>Dazzling Masterpieces</h1>
        <article className='grid grid-rows-2 grid-flow-col gap-10 place-content-center'>
          <img className='w-[20rem] h-[20rem] object-cover' src="/img/moterbike-2.png" alt="" />
          <img className='w-[20rem] h-[20rem] object-cover' src="/img/eye.png" alt="" />
          <img className='w-[20rem] h-[20rem] object-cover' src="/img/albino.png" alt="" />
          <img className='w-[20rem] h-[20rem] object-cover' src="/img/genderfluid.png" alt="" />
        </article>
      </section>


      <section>
        <article>
          
        </article>
      </section>
    </main>
  )
}
