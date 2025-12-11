'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
  
  return (
    <footer className={`bg-[#001e3fe3] ${pathname.replace(/\//g, '')}`}>
        <div className="container">
          <div className="wrapper wrapper-footer-top items-center">
            <div className="page-list grid-cols-2 grid text-[#f8f1ec] gap-[16px] md:w-1/5">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
            <div className="wrapper-footer-ctas md:w-2/5">
              <button className="rounded-4xl bg-white text-black p-4">Book a call</button>
              <button className="rounded-4xl bg-[#c4b2f6] text-black p-4">Join our team</button>
            </div>
          </div>
          <h1 className="wrapper wrapper-footer-middle text-white">
            Let's Build the next big thing, together.
          </h1>
          <div className="wrapper wrapper-footer-bottom text-white">
            <div className="cta transparent">contact@technova.com</div>
            <div className="cta transparent circle">TW</div>
            <div className="cta transparent circle">IN</div>
          </div>
          <div className="circle-big red">

          </div>
        </div>
      </footer>
  )
}

export default Footer