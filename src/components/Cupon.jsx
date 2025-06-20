import { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function PromoCoupon() {
  const [visible, setVisible] = useState(false);
  const [manuallyClosed, setManuallyClosed] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (manuallyClosed) {
      setVisible(false);
      timerRef.current = setTimeout(() => {
        setManuallyClosed(false);
      }, 30000);
      return () => clearTimeout(timerRef.current);
    }

    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show coupon only when hero is NOT visible enough (less than 0.3)
        setVisible(!entry.isIntersecting || entry.intersectionRatio < 0.3);
      },
      { threshold: [0, 0.3, 1] }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, [manuallyClosed]);

  return (
    <div
      className={`fixed z-10 max-w-xs w-full bg-yellow-100 border border-yellow-300 shadow-xl rounded-xl p-5 transition-opacity duration-500
        ${
          visible && !manuallyClosed
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        top-20 left-6 right-6
        md:bottom-6 md:left-6 md:right-auto md:top-auto
      `}
      aria-live="polite"
      style={{ maxWidth: "350px" }} // Limit width on larger screens if needed
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
