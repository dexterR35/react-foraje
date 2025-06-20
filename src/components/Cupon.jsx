import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function PromoCoupon() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-xs w-full bg-yellow-100 border border-yellow-300 shadow-xl rounded-xl p-5 animate-fade-in">
      <div className="flex justify-between items-start">
        <div className="text-sm text-gray-800 space-y-2">
          <p className="text-lg font-bold text-yellow-800">🎉 Reducere 20%!</p>
          <p>
            Beneficiază de <strong>20% reducere </strong> la lucrările
            programate până la <strong>30 August 2025</strong>.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-2 px-4 py-2 bg-primaryText/90 text-white rounded-md shadow hover:bg-primary/90 transition text-sm font-medium"
          >
            Programează acum
          </Link>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-gray-500 hover:text-gray-700 ml-3"
          aria-label="Închide cuponul"
        >
          <AiOutlineClose size={18} />
        </button>
      </div>
    </div>
  );
}
