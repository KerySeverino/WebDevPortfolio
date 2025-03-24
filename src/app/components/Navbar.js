import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm py-4 px-4 sm:px-10">
    <ul className="flex justify-center gap-4 sm:gap-10 text-white text-lg sm:text-2xl">
      <li className="Navbar-page-link">
        <Link href="/">Home</Link>
      </li>
      <li className="Navbar-page-link">
        <Link href="/aboutme">About</Link>
      </li>
      <li className="Navbar-page-link">
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className="Navbar-page-link">
        <Link href="/contact">Contact</Link>
      </li>
      <li className="Navbar-page-link">
        <Link href="/cats">Cats</Link>
      </li>
    </ul>
  </nav>  
  );
}
