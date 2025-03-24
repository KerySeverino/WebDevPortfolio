"use client";
import { useState } from "react";
import Link from "next/link";
import { BiListUl } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm py-4 px-4 sm:px-10">
      <div className="flex items-center justify-between sm:justify-center relative">
        
        {/* Mobile Dropdown Button */}
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <BiListUl size={35} />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex gap-8 sm:text-2xl">
          <li className="Navbar-page-link"><Link href="/">Home</Link></li>
          <li className="Navbar-page-link"><Link href="/aboutme">About Me</Link></li>
          <li className="Navbar-page-link"><Link href="/portfolio">Portfolio</Link></li>
          <li className="Navbar-page-link"><Link href="/contact">Contact</Link></li>
          <li className="Navbar-page-link"><Link href="/cats">Cats</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Nav Links */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col gap-5 mt-4 text-2xl">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/aboutme" onClick={() => setIsOpen(false)}>About Me</Link></li>
          <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/cats" onClick={() => setIsOpen(false)}>Cats</Link></li>
        </ul>
      )}
    </nav>

  );
}
