import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { label: "Acasă", href: "#hero" },
  { label: "Despre noi", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 bg-primary/2 z-50">
      <nav className="max-w-[85rem] mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Left: Logo */}
        <a href="#hero" className="text-2xl font-extrabold text-primaryText/90">
          Foraje &amp; Puțuri
        </a>

        {/* Center: Middle Link */}
  
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Meniu"
          >
            {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
          <ul
            className={`absolute top-full left-0 right-0 bg-white md:static md:flex md:space-x-8 md:bg-transparent shadow-md md:shadow-none md:pt-0 pt-4 md:pb-0 pb-4 ${
              open ? "block" : "hidden md:block"
            }`}
          >
            {navLinks.map((n) => (
              <li key={n.href} className="md:inline-block px-6 md:px-0">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-700 hover:text-primary font-medium transition"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

  
      </nav>
    </header>
  );
}
