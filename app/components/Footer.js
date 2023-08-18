import Link from "next/link";


const Footer = () => {
    return ( 
        <footer className="p-10 bg-gray-600">
            <article>
                <div className="flex flex-col">
                <Link className="text-[1.5rem] underline text-[#CCE4F3]" href="https://www.instagram.com/wessltoft/">My personal Instagram</Link>
                <Link className="text-[1.5rem] underline text-[#CCE4F3]" href="https://www.instagram.com/inwesstation/">My art Isntagram</Link>
                </div>
                <p className="text-[1.5rem] text-[#4BA3C3]">Mobile Number: +45 27 83 55 59</p>
                <p className="text-[1.5rem] text-[#4AB3C3]">Email: weslyn-l-toft@gmail.com</p>
            </article>
        </footer>
     );
}
 
export default Footer;