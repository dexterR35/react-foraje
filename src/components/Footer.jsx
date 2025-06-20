export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 w-full text-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Navigare */}
        <nav aria-label="Linkuri rapide">
          <h3 className="text-lg font-semibold text-white mb-4">Navigare</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-white transition-colors duration-200">
                Acasă
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200">
                Despre noi
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition-colors duration-200">
                Galerie
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact rapid</h3>
          <p className="mb-2">
            Telefon:{" "}
            <a href="tel:+40740000000" className="hover:text-white transition-colors duration-200">
              +40 740 000 000
            </a>
          </p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:office@foraje-exemplu.ro"
              className="hover:text-white transition-colors duration-200"
            >
              office@foraje-exemplu.ro
            </a>
          </p>
          <p>Program: Luni - Vineri, 08:00 - 18:00</p>
        </div>

        {/* Informații / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Informații</h3>
          <p className="mb-2">
            Strada Exemplu, Nr. 123<br />
            București, România
          </p>
      
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} Foraje &amp; Puțuri · Toate drepturile rezervate.
      </div>
    </footer>
  );
}
