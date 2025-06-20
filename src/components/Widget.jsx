import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {CallToActionPhoneButton,WhatsAppButton} from "./Button";

export default function FloatingContactWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show widget only when hero is NOT visible or visible less than 30%
        setVisible(!entry.isIntersecting || entry.intersectionRatio < 0.3);
      },
      { threshold: [0, 0.3, 1] }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`sticky bg-slate-50 md:bg-transparent md:fixed bottom-0 py-4
        right-10 
        left-0 sm:left-auto
        z-10 

        flex flex-row sm:flex-col 
        items-center sm:items-end 
        gap-4
        px-4 sm:px-0 
        justify-center sm:justify-end

        transition-opacity duration-500
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      style={{ maxWidth: "100vw" }}
      aria-live="polite"
    >
      {/* WhatsApp */}
      <WhatsAppButton variant="widget" />
      {/* <a
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
      </a> */}

      {/* Your phone button */}
      <CallToActionPhoneButton variant="widget" />
    </div>
  );
}
