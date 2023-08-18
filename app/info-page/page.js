import { Tilt_Prism } from 'next/font/google'

const tilt_prism = Tilt_Prism({ subsets: ['latin'], weight: ["400"] })
// const tilt_prism = Tilt_Prism({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })



const InfoPage = () => {
    return ( 
        <main className="p-[5rem] text-[#CCE6F4]">
        <section className="bg-[#EDF2F4] m-[-5rem] mb-[10rem] p-10 text-black flex justify-center gap-[10rem]">
            <h2 className={`text-[#4BA3C3] text-[2.5rem] pb-5 ${tilt_prism.className}`}>Unleash your Creativity!</h2>

            <div className="w-[40%]">
            <p className="text-[#215669]">To be creative is like a relief for me. For when you hold a lot of emotions inside, that you need to get rid of or express. Art is an amazing tool for me. </p>
            <p className="text-[#215669]">That being in my art and drawings or in my web developing, doesn’t matter. One part lets me use the creative side of my brain and the other let’s me use the mathematic side of my brain, stimulating my ADHD and letting me work as a normal person. </p>
            </div>
        </section>

        <section className="flex justify-center gap-10 pb-[10rem]">
            <img className=" h-[40rem]" src="/img/irl-me.jpg" alt="A picture of me" />
            <div className="w-[50%]">
            <h2 className={`text-[2.5rem] pb-[5rem] text-[#4BA3C3] ${tilt_prism.className}`}>A little about me.</h2>
                <p className="pb-5">I will start by admitting that I am dyslexic, however this has never stopped me in completing my tasks or work. Being dyslexic has never really been a highlight in my life, therefore it hasn’t kept me from doing my assignments, as I always find a solution.</p>
                <p className="pb-5">I work hard and efficiently. I will never stop until I have a solution to a possible problem. I don't just give up and lie down but ask for help or look for it myself to solve the possible solutions.</p>
                <p>I am a person who likes to prettify her body. What this should mean is that I have a lot of tattoos, piercings and even dye my hair, but even though I may look a little scary, I'm a nice and sweet person. I care for my fellow students and coworkers. My style does not define who I am as a person, but instead let’s me express myself in a creative way. </p>
            </div>
        </section>

        <section className='pb-[10rem]'>
            <h2 className={`text-[2.5rem] text-[#4BA3C3] py-[3rem] ${tilt_prism.className}`}>Perks of hiring me:</h2>
            <article className="flex justify-center gap-10">
                <div className="pb-5 w-[30%] border-white border-[0.2rem] p-3 text-center">
                    <h3 className="text-[1.5rem] pb-2">Hard Working</h3>
                    <p>I’m a hardworking individual. I’ve never had it easy in school. This has taught me to work hard for my goal and to succeed. If I discover a problem, I do everything in my power to find a solution. I don’t just give up; I keep looking and I keep working. </p>
                </div>
                <div className="pb-5 w-[30%] border-white border-[0.2rem] p-3 text-center">
                    <h3 className="text-[1.5rem] pb-2">Efficient </h3>
                    <p>I’m an extremely open-minded person and I’m easy to come to, with a problem. I’m always happy to help others and I enjoy working with others in groups for a project. </p>
                </div>
                <div className="pb-5 w-[30%] border-white border-[0.2rem] p-3 text-center">
                    <h3 className="text-[1.5rem] pb-2">Creativity</h3>
                    <p>Creativity flows in my blood. You won’t find someone as creative and broad-minded as me. With my ADHD brain I have trouble sitting still, so slacking off won’t be a problem. I must always be working on something, making me a very efficient worker. </p>
                </div>
            </article>
        </section>

        <section>
            <h2 className='text-[2.5rem] pb-10'>Education: </h2>
            <article className='flex justify-center gap-10'>
                <article>
                    <p className='pb-5'>- From 2019 to 2021 I took the Danish variant of high school. In high school I took the line called STX, where I studied Spanish A, Danish A, English A and Chinese B. As you properly have noticed, I like learning new languages and to me coding is a language. 
                        The reason why I say coding is like learning a new language is because they have a lot of similarities! Learning the words, learning the grama/functions. Learning how to use the grama in a sentence or using the function to create something on the website. I could go on about how similar the two are. </p>
                    <p className='pb-5'>- From January 2022 to October 2023, I took the education Web Developer. At this school I have gotten the knowledge for the basics HTML, CSS, JavaScript. Furthermore, I have also been taught about React and the frameworks Remix and Next.js with Tailwind or CSS components. Here I have learned all frontend to become a front-end developer. </p>
                    <p>- From February 2024 to unknown date, I am Studying at Zealand Business School as a Computer Scientist. There I will learn all the backend I need to become a full-stack developer. </p>
                </article>
                <img className='h-[30rem]' src="/img/code.png" alt="Picture of some code from this curent page" />
            </article>
        </section>

        </main>
       
     );
}
 
export default InfoPage;