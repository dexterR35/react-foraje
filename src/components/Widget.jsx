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
        z-30 

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
      {/* Your phone button */}
      <CallToActionPhoneButton variant="widget" />
    </div>
  );
}
