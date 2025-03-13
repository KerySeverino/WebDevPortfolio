import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center mt-5">
      <ul className="flex gap-10 text-responsive-size">
        <li className="Navbar-page-link">
          <Link href="/">Home</Link>
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
