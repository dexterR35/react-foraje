import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-6 right-10 z-[70] flex flex-col items-end gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/40740000000"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
        aria-label="Scrie-ne pe WhatsApp"
      >
        <div className="px-3 py-1 bg-green-500 text-white rounded-lg shadow hidden sm:block text-sm font-medium group-hover:scale-105 transition-transform">
          Scrie-ne pe WhatsApp
        </div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-105 transition-transform">
          <FaWhatsapp className="w-6 h-6" />
        </div>
      </a>

      {/* Phone */}
      <a
        href="tel:+40740000000"
        className="group flex items-center gap-3"
        aria-label="Sună-ne"
      >
        <div className="px-3 py-1 bg-primaryText/90 text-white rounded-lg shadow hidden sm:block text-sm font-medium group-hover:scale-105 transition-transform">
          Sună-ne acum
        </div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primaryText/90 text-white shadow-xl hover:scale-105 transition-transform">
          <FaPhone className="w-5 h-5" />
        </div>
      </a>
    </div>
  );
}
