import { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function PromoCoupon() {
  const [visible, setVisible] = useState(false);
  const [manuallyClosed, setManuallyClosed] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const timerRef = useRef(null);

  // Observe footer visibility
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: [0.1] }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Track which section is active (gallery or about-me)
  useEffect(() => {
    const gallery = document.getElementById("gallery");
    const aboutMe = document.getElementById("about-me");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (gallery) observer.observe(gallery);
    if (aboutMe) observer.observe(aboutMe);

    return () => {
      if (gallery) observer.unobserve(gallery);
      if (aboutMe) observer.unobserve(aboutMe);
    };
  }, []);

  // Main visibility logic
  useEffect(() => {
    if (manuallyClosed) {
      setVisible(false);
      timerRef.current = setTimeout(() => setManuallyClosed(false), 30000);
      return () => clearTimeout(timerRef.current);
    }

    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isHeroVisibleEnough = entry.isIntersecting && entry.intersectionRatio >= 0.3;
        const shouldHideForFooter =
          footerVisible && (activeSection === "gallery" || activeSection === "about-me");

        setVisible(!isHeroVisibleEnough && !shouldHideForFooter);
      },
      { threshold: [0, 0.3, 1] }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [manuallyClosed, footerVisible, activeSection]);

  return (
    <div
      className={`fixed z-20 max-w-xs w-full bg-yellow-100 border border-yellow-200 shadow-xl rounded-xl p-5 transition-opacity duration-500
        ${
          visible && !manuallyClosed
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
       bottom-24 left-6 right-6
        md:bottom-6 md:left-6 md:right-auto md:top-auto
      `}
      aria-live="polite"
      style={{ maxWidth: "350px" }}
    >
      <div className="flex justify-between items-start">
        <div className="text-sm text-gray-800 space-y-2">
          <p className="text-lg font-bold text-yellow-800">🎉 Reducere 20%!</p>
          <p>
            Beneficiază de <strong>20% reducere</strong> la lucrările programate
            până la <strong>30 August 2025</strong>.
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 px-4 py-2 bg-primaryText/90 text-white rounded-md shadow hover:bg-primary/90 transition text-sm font-medium"
          >
            Programează acum
          </a>
        </div>

        <button
          onClick={() => setManuallyClosed(true)}
          className="text-gray-500 hover:text-gray-700 ml-3"
          aria-label="Închide cuponul"
        >
          <AiOutlineClose size={18} />
        </button>
      </div>
    </div>
  );
}
