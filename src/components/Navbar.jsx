import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {CallToActionPhoneButton} from "./Button.jsx";
import { GiWaterSplash } from "react-icons/gi";
const navLinks = [
  { label: "Acasă", href: "#hero" },
  { label: "Despre noi", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:absolute relative top-0 inset-x-0 z-50 bg-white md:bg-transparent">
      <nav className="max-w-[85rem] mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <a href="#hero" className="text-3xl font-extrabold text-primaryText/90 flex gap-2 items-center">
       <GiWaterSplash size={40}/>
        </a>

        {/* Menu toggle & Links */}
        <div className="flex items-center ">
          <button
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Meniu"
            aria-expanded={open}
          >
            {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
          <ul
            className={`absolute top-full left-0 bg-white p-4 w-full md:static md:flex md:space-x-8 md:bg-transparent shadow-md md:shadow-none md:pt-0 pt-4 md:pb-0 pb-4 ${
              open ? "block" : "hidden md:block"
            }`}
          >
            {navLinks.map(({ label, href }) => (
              <li key={href} className="md:inline-block px-6 md:px-0">
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-700 hover:text-primary font-medium transition"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <CallToActionPhoneButton variant="header" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
